import "./App.css";
import Layout from "./Components/Layout/layout";
import Burgerbuilder from "./Containers/BurgerBuilder/burgerbuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <Burgerbuilder></Burgerbuilder>
      </Layout>
    </div>
  );
}

export default App;
