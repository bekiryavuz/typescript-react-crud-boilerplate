import * as ReactDOM from "react-dom";
import "../src/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Foutes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <Foutes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
