import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpense = (newExpense)=>{
        props.addExpense(newExpense);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm 
      saveExpense = {saveExpense}
      />
    </div>
  );
};

export default NewExpense;