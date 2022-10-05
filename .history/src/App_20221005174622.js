import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <div>hello</div>;
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </Container>
    </CartProvider>
  );
}

export default App;
