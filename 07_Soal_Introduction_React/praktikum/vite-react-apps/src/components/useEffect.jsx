import React, { useState, useEffect } from 'react';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (inputValue.length > 5) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      {showError && (
        <small style={{ color: 'red' }}>Input tidak boleh lebih dari 5 karakter.</small>
      )}
    </div>
  );
}

export default FormValidation;