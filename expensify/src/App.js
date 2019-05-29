import React from 'react';
import { Route } from 'react-router-dom';
import ExpenseDashBoard from './components/ExpenseDashboard.js';
import AddExpense from './components/AddExpense.js';
import EditExpense from './components/EditExpense.js';
import Help from './components/Help.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Expensify App</header>
      <Route exact path="/" component={ExpenseDashBoard} />
      <Route path="/add-expense" component={AddExpense} />
      <Route path="/edit-expense" component={EditExpense} />
      <Route path="/help" component={Help} />
    </div>
  );
}

export default App;
