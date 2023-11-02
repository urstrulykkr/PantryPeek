// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <ProductList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
