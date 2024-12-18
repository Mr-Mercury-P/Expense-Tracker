import React, { useState } from 'react';
import '../Styles/AddExpensePage.css';

const AddExpensePage = ({ addExpense }) => {
    const [expenseData, setExpenseData] = useState({
        date: '',
        category: '',
        amount: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseData({
            ...expenseData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            date: expenseData.date,
            category: expenseData.category,
            amount: parseFloat(expenseData.amount),
            description: expenseData.description
        };
        
        // Call addExpense from the parent to update the global expenses state
        addExpense(newExpense);

        setExpenseData({
            date: '',
            category: '',
            amount: '',
            description: ''
        });
    };

    return (
        <div className="add-expense-page">
            <h2>Expense Tracker</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={expenseData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={expenseData.category}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={expenseData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default AddExpensePage;
