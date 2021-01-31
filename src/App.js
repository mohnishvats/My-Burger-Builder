import "./App.css";
import Layout from "./Components/Layout/layout";
import Burgerbuilder from "./Containers/BurgerBuilder/burgerbuilder";
import Checkout from "../src/Containers/Checkout/Checkout";
import router from "react-router";
import { Route } from "react-router-dom";
import Orders from "../src/Containers/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={Burgerbuilder} />
        <Route path="/" component={Orders} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
