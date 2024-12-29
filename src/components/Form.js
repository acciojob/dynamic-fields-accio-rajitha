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
    // Log the form data without the 'Form Data:' label and directly log the array of field objects
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

/*
import React, { useState } from 'react';

const Form = () => {
  // State to manage dynamic fields
  const [fields, setFields] = useState([{ id: Date.now(), name: '', age: '' }]);

  // Handle input changes for dynamic fields
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  // Add new field
  const handleAddField = () => {
    setFields([...fields, { id: Date.now(), name: '', age: '' }]);
  };

  // Remove a specific field
  const handleRemoveField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate fields
    if (fields.some(field => !field.name || !field.age)) {
      alert("All fields must be filled!");
      return;
    }
    console.log('Form Data:', fields);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={field.id} className="field">
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
          <button type="button" onClick={() => handleRemoveField(field.id)}>
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
      <p>After clicking submit check for console data</p>
    </form>
  );
};

export default Form;

/*
import React, { useState } from 'react';


const Form = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', fields);
  };

  return (
    <form   className='form' onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
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
      <button className='add' type="button" onClick={handleAddField}>
        Add More ...
      </button>
      <button className='sub' type="submit">Submit</button>
      <p>After clicking submit check for console data</p>
    </form>
  );
};

export default Form;
*/

