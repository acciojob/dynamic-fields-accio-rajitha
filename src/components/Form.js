// Form.js
import React, { useState } from 'react';

const Form = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  // Handle input changes for fields
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  // Add a new field
  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  // Remove a field by index
  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log only the raw array of data without any extra label
    console.log(fields);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={field.age}
            onChange={(e) => handleInputChange(index, e)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button className="add" type="button" onClick={handleAddField}>
        Add More...
      </button>
      <button className="sub" type="submit">
        Submit
      </button>
      <p>After clicking submit, check for console data</p>
    </form>
  );
};

export default Form;
