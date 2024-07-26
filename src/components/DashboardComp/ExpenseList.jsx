// src/components/Dashboard/ExpenseList.js
import React from 'react';
import './Dashboard.scss';

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="expense-list">
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="description">{expense.description}</div>
            <div className="amount">${expense.amount}</div>
            <div className="date">{expense.date}</div>
          </li>
        ))
      ) : (
        <li className="empty-list">No expenses added yet.</li>
      )}
    </ul>
  );
};

export default ExpenseList;
