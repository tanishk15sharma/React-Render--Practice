import "./App.css";
import ArrayUseStateFunction from "./components/Immutable State/ArrayUseState";
import ObjectUseState from "./components/Immutable State/ObjUseState";
import UseReducerFunction from "./components/UseReducer/UseReducer";
import UseStateFunction from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseStateFunction /> */}
      {/* <UseReducerFunction /> */}
      {/* <ObjectUseState /> */}
      <ArrayUseStateFunction />
    </div>
  );
}

export default App;
