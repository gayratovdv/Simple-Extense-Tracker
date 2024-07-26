// src/components/Dashboard/Summary.js
import React from 'react';
import './Dashboard.scss';

const Summary = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);

  return (
    <div className="summary-container">
      <h2>Total Expenses</h2>
      <p className="total-amount">${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
