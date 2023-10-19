// NewProductForm.js
import React, { useState } from 'react';
import '../css/NewProductForm.css';

const NewProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Perform real-time validation as the user types
    const updatedErrors = { ...errors };

    if (name === 'quantity') {
      if (isNaN(value) || !Number.isInteger(Number(value)) || value < 0) {
        updatedErrors[name] = 'Quantity must be a non-negative integer.';
      } else {
        delete updatedErrors[name];
      }
    } else if (name === 'price') {
      if (isNaN(value) || value < 0) {
        updatedErrors[name] = 'Price must be a non-negative number.';
      } else {
        delete updatedErrors[name];
      }
    }

    setProduct({ ...product, [name]: value });
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log('New Product Values:', product);
    } else {
      console.log('Form contains invalid values. Please check values.');
      setErrors(validationErrors); // Update the error messages
    }
  };

  const handleCancel = () => {
    console.log('Cancel event called');
    setProduct({ name: '', description: '', category: '', quantity: '', price: '' });
  };

  const validateForm = () => {
    const { name, description, category, quantity, price } = product;
    const errors = {};

    if (!name) {
      errors.name = 'Name must be a non-null value.';
    }
    if (!description) {
      errors.description = 'Description must be a non-null value.';
    }
    if (!category) {
      errors.category = 'Category must be a non-null value.';
    }
    if (!quantity) {
      errors.quantity = 'Quantity must be a non-null value.';
    }
    if (!price) {
      errors.price = 'Price must be a non-null value.';
    }
    if (isNaN(quantity) || !Number.isInteger(Number(quantity)) || quantity < 0) {
      errors.quantity = 'Quantity must be a non-negative integer.';
    }
    if (isNaN(price) || price < 0) {
      errors.price = 'Price must be a non-negative number.';
    }
    return errors;
  };

  return (
    <div className="new-product-form">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        {errors.name && <span className="error-message">{errors.name}</span>} {/* Display error message */}
        <br />
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        {errors.description && <span className="error-message">{errors.description}</span>} {/* Display error message */}
        <br />
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleInputChange} />
        {errors.category && <span className="error-message">{errors.category}</span>} {/* Display error message */}
        <br />
        <label>Quantity:</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleInputChange} />
        {errors.quantity && <span className="error-message">{errors.quantity}</span>} {/* Display error message */}
        <br />
        <label>Price:</label>
        <input type="number" name="price" step="0.01" value={product.price} onChange={handleInputChange} />
        {errors.price && <span className="error-message">{errors.price}</span>} {/* Display error message */}
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default NewProductForm;
