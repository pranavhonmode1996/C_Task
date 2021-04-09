import { Route, Switch } from "react-router";
import "./App.css";
import Main from "./views/Main";
import NavBar from './reusableComponents/NavBar';
import AddItems from "./views/AddItems";
import ViewOrders from "./views/ViewOrders";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/addItems" component={AddItems} />
        <Route path="/viewOrders" component={ViewOrders} />
      </Switch>
    </>
  );
}

export default App;
