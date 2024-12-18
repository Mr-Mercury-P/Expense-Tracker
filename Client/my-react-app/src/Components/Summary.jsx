import React, { useState } from 'react';
import '../Styles/Summary.css';

const Summary = ({ expenses }) => {
  // State to track the selected grouping (day, month, or year)
  const [groupBy, setGroupBy] = useState('Day');
  // State to track the selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from the expenses
  const categories = ['All', ...new Set(expenses.map(expense => expense.category))];

  // Group expenses by day, month, or year based on the selection
  const groupExpenses = (grouping) => {
    return expenses.reduce((acc, expense) => {
      if (selectedCategory !== 'All' && expense.category !== selectedCategory) {
        return acc; // Skip if the expense doesn't match the selected category
      }

      let key;
      switch (grouping) {
        case 'Month':
          key = expense.date.slice(0, 7); // Year-Month format (e.g., '2024-12')
          break;
        case 'Year':
          key = expense.date.slice(0, 4); // Year format (e.g., '2024')
          break;
        case 'Day':
        default:
          key = expense.date; // Full date (e.g., '2024-12-18')
          break;
      }

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(expense);
      return acc;
    }, {});
  };

  // Calculate total for a given list of expenses
  const calculateTotal = (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const groupedExpenses = groupExpenses(groupBy);

  return (
    <div className="summary-container">
      <h1>Summary Page</h1>
      <p>This is a summary of your expenses grouped by your selected option.</p>

      <h2>Total Expenses: ${calculateTotal(expenses).toFixed(2)}</h2>

      {/* Dropdown for Grouping */}
      <label htmlFor="groupBy">Group Expenses By:</label>
      <select
        id="groupBy"
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value)}
      >
        <option value="day">Day</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>

      {/* Dropdown for Category */}
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <h3>{groupBy.charAt(0).toUpperCase() + groupBy.slice(1)}-wise Breakdown:</h3>
      {Object.keys(groupedExpenses).map((key) => (
        <div key={key}>
          <h4>{key}</h4>
          <ul>
            {groupedExpenses[key].map((expense, index) => (
              <li key={index}>
                <p><strong>Category:</strong> {expense.category}</p>
                <p><strong>Amount:</strong> ${expense.amount.toFixed(2)}</p>
                <p><strong>Description:</strong> {expense.description}</p>
              </li>
            ))}
          </ul>
          <p><strong>Total for {key}: ${calculateTotal(groupedExpenses[key]).toFixed(2)}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
