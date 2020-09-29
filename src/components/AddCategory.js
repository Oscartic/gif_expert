import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const upValue = e.target.value;
    setInputValue(upValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories(categories => [inputValue, ...categories]) // para cuando no se tiene acceso a categories 
      setInputValue('');
    }
  }  
  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}