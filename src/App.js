import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import ModalCart from './components/ModalCart'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <ModalCart />
        <Switch>
        <Route path="/shopping-list">
          <ShoppingList />
        </Route>
        <Route path='/' exact>
        <Redirect to='/shopping-list'/>
        </Route>
        </Switch>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
