// Form.js
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


