require("dotenv").config();
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const { query_db } = require("../db/functions");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const queryDatabaseFunctionDeclaration = {
  name: "queryDatabase",
  parameters: {
    type: "OBJECT",
    description: "Query a postgresql database.",
    properties: {
      query: {
        type: "STRING",
        description: "SQL query for the postres database.",
      },
    },
    required: ["query"],
  },
};

const cleanQuery = (query) => {
  // Remove unnecessary escape characters
  return query.replace(/\\'/g, "'");
};

const functions = {
  queryDatabase: ({ query }) => {
    return query_db(cleanQuery(query));
  },
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
  systemInstruction:
    "I have a postgresql database with a single table like this TABLE employees (id SERIAL PRIMARY KEY,name VARCHAR(100) NOT NULL,age INT NOT NULL,sex CHAR(1) NOT NULL,position VARCHAR(100) NOT NULL,salary DECIMAL(10, 2) NOT NULL,phone_number VARCHAR(15) NOT NULL). When generating queries based on a user prompt use this schema. Only generate queries for getting data, if user wants to update, insert or delete respond with 'I am only allowed to read the database.'. Salary is in $ and age is in yrs so include that in your final response if needed. If user asks about anything that is not related to the employees table then respond with 'Sorry, I can only answer queries relevant to the employees table.'",
  tools: {
    functionDeclarations: [queryDatabaseFunctionDeclaration],
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ],
});

const askGemini = async (prompt) => {
  const chat = model.startChat();

  const result = await chat.sendMessage(prompt);

  if (result.response.functionCalls()) {
    const call = result.response.functionCalls()[0];
    console.log(call.args);
    const apiResponse = await functions[call.name](call.args);

    const result2 = await chat.sendMessage([
      {
        functionResponse: {
          name: "queryDatabase",
          response: apiResponse,
        },
      },
    ]);

    return result2.response.text();
  } else {
    return result.response.text();
  }
};

module.exports = { askGemini };
