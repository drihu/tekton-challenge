import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Employees from './pages/Employees';
import PettyCash from './pages/PettyCash';
import CashFlow from './pages/CashFlow';

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/employees">
        <Employees />
      </Route>

      <Route exact path="/petty-cash">
        <PettyCash />
      </Route>

      <Route exact path="/cash-flow">
        <CashFlow />
      </Route>
    </Layout>
  );
}

export default App;
