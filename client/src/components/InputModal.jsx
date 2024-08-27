import React, { useState } from "react";

const CloseIcon = () => (
  <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
);

const AddIcon = () => (
  <svg
    className="me-1 -ms-1 w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div
    className={
      id === "position" || id === "name"
        ? "col-span-2"
        : "col-span-2 sm:col-span-1"
    }
  >
    <label
      htmlFor={id}
      className="block mb-2 sm:text-sm text-xs font-medium text-gray-900"
    >
      {label}
    </label>
    {type === "select" ? (
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    ) : (
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    )}
  </div>
);

const InputModal = ({ onSubmit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    position: "",
    salary: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, sex, position, salary, phone_number } = formData;

    if (!name || !age || !sex || !position || !salary || !phone_number) {
      alert("All fields are required!");
      return;
    }

    await onSubmit(formData);

    setFormData({
      name: "",
      age: "",
      sex: "",
      position: "",
      salary: "",
      phone_number: "",
    });
    setModalVisible(false);
  };

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Type name" },
    { id: "age", label: "Age", type: "number", placeholder: "Enter age" },
    { id: "sex", label: "Sex", type: "select", placeholder: "Select sex" },
    {
      id: "position",
      label: "Position",
      type: "text",
      placeholder: "Enter position",
    },
    {
      id: "salary",
      label: "Salary",
      type: "text",
      placeholder: "Enter salary",
    },
    {
      id: "phone_number",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter phone number",
    },
  ];

  return (
    <div>
      <button
        className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 sm:mb-10 mb-5 text-center"
        type="button"
        onClick={() => setModalVisible(!modalVisible)}
      >
        <AddIcon />
        Add employee
      </button>

      {modalVisible && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full">
          <div
            className="fixed inset-0 bg-gray-800 opacity-75"
            onClick={() => setModalVisible(false)}
          ></div>

          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="sm:text-lg text-sm font-semibold text-gray-900">
                  Add New Employee
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg sm:text-sm text-xs w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setModalVisible(!modalVisible)}
                >
                  <CloseIcon />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {fields.map((field) => (
                    <InputField
                      key={field.id}
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                    />
                  ))}
                </div>
                <div className="w-full grid place-content-center">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 text-center"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputModal;
