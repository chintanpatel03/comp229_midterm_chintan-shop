// NewShopForm.js
import React, { useState } from 'react';
import '../css/NewShopForm.css'; // Import the CSS file

const NewShopForm = () => {
  const [shop, setShop] = useState({ name: '', description: '' });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log('New Shop Values:', shop);
    } else {
      console.log('Form contains invalid values. Please check values.');
      setErrors(validationErrors); // Update the error messages
    }
  };

  const handleCancel = () => {
    console.log('Cancel event called');
    setShop({ name: '', description: '' });
  };

  const validateForm = () => {
    const { name, description } = shop;
    const errors = {};

    if (!name) {
      errors.name = 'Name must be a non-null value.';
    }
    if (!description) {
      errors.description = 'Description must be a non-null value.';
    }
    return errors;
  };

  return (
    <div className="new-shop-form">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={shop.name} onChange={handleInputChange} />
        {errors.name && <span className="error-message">{errors.name}</span>} {/* Display error message */}
        <br />
        <label>Description:</label>
        <input type="text" name="description" value={shop.description} onChange={handleInputChange} />
        {errors.description && <span className="error-message">{errors.description}</span>} {/* Display error message */}
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default NewShopForm;
