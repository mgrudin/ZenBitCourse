import React from 'react';
import { ProductList } from 'Pages/ProductList';
import { ProductDetail } from 'Pages/ProductDetails';
import { Cart } from 'Pages/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ProductList} exact/>
          <Route path="/details" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
