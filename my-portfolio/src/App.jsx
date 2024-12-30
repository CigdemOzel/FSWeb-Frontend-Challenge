import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  return (
    <>
      <ToggleSwitch />
      <Switch>
        <Route exact path="/">
          {/* Ana sayfa için bileşen buraya eklenecek */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
