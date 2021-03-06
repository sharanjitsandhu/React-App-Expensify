import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ExpenseDashBoard from './components/ExpenseDashboard.js';
import AddExpense from './components/AddExpense.js';
import EditExpense from './components/EditExpense.js';
import Help from './components/Help.js';
import NotFound from './components/NotFound.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expensify App</h1>
        <NavLink exact to="/" activeClassName="is-active">
          Dashboard{' '}
        </NavLink>
        <NavLink to="/add-expense" activeClassName="is-active">
          Add Expense
        </NavLink>
        <NavLink to="/edit-expense" activeClassName="is-active">
          Edit Expense
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </header>
      <Switch>
        <Route exact path="/" component={ExpenseDashBoard} />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/edit-expense" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
