import "./App.css";
import Layout from "./Components/Layout/layout";
import Burgerbuilder from "./Containers/BurgerBuilder/burgerbuilder";
import Checkout from "../src/Containers/Checkout/Checkout";
import router from "react-router";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={Burgerbuilder} />
        <Route path="/checkout" exact component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
