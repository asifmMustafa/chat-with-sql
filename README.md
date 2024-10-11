# Chat with SQL

Interact with a database using natural language by taking advantage of function calling feature of LLMs and the straight forward interface for CRUD operations of a SQL database.

![App Screenshot](https://i.postimg.cc/65ZXkZh9/Screenshot-2024-08-28-at-1-39-38-AM.png)

Live demo: https://chat-with-sql.netlify.app

## How it works

- provide the Large Language Model with the database schema, enabling the LLM to understand the structure and relationships within the database.
- upon receiving a user prompt, the LLM generates a corresponding SQL query based on the provided schema
- the system executes the generated SQL query against the database
- the output from the executed query is then passed back to the LLM that then makes the information more human readable and gives it back to the user

Tech stack:

- Frontend: React app created with Vite, Tailwind CSS
- Backend: Express server, Google Gemini LLM
- Database: PostgreSQL (CockroachDB Cloud)

## Installation

Clone the repository and install the packages

```bash
git clone https://github.com/asifmMustafa/chat-with-sql.git && \
cd chat-with-sql && \
npm install --prefix client && \
npm install --prefix server
```

Create an employees table in your postgres database
```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    sex CHAR(1) NOT NULL,
    position VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);
```

Create .env in the server folder and add DATABASE_URL and GEMINI_API_KEY

Create .env in client folder

```
VITE_SEVER_URL='http://localhost:9000'
```

Create .env in server folder

```
DATABASE_URL='your-postgresql-database-url'
GEMINI_API_KEY='your-gemini-api-key'
```

Start the server

```bash
cd server
npm start
```

Start the client

```bash
cd ..
cd client
npm run dev
```

Open the client in your browser http://localhost:5173/
