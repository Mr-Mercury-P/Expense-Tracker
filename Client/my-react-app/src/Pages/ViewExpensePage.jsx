import React, { useState } from 'react';
import ExpenseList from '../Components/ExpenseList';
import Summary from '../Components/Summary';

const ViewExpensePage = ({ expenses }) => {
  return (
    <div className="view-expenses">
      <ExpenseList expenses={expenses} />
      <Summary expenses={expenses} />
    </div>
  );
};

export default ViewExpensePage;
