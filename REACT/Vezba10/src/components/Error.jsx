import React from 'react';
import './../Styles.css'; 

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">Error: {message}</p>
    </div>
  );
};

export default Error;