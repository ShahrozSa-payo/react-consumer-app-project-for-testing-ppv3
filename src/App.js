import "./App.css";
import { OP_PAYMENT_WIDGET_V3_VERSION } from "test-with-pkg-version-for-pi-payment-widget";
import pkg from "../package.json";

function App() {
  return (
    <div className="App">
      <h2>
        PPv3 Package version from ESM package import is {" "}
        <span style={{color: "red"}}>{OP_PAYMENT_WIDGET_V3_VERSION}</span>
      </h2>

      <h2>
        React App version is {" "}
        <span style={{color: "red"}}>{pkg.version}</span>
      </h2>
    </div>
  );
}

export default App;

