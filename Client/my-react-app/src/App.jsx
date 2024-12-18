import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ViewExpensePage from './Pages/ViewExpensePage';
import AddExpensePage from './Pages/AddExpensePage';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Pass expenses as a prop to ViewExpensePage */}
        <Route path="/view-expense" element={<ViewExpensePage expenses={expenses} />} />
        
        {/* Pass addExpense function as a prop to AddExpensePage */}
        <Route path="/add-expense" element={<AddExpensePage addExpense={addExpense} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
