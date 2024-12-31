import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "./components/ToggleSwitch";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div class="flex items-center justify-end gap-4 p-4 mr-40 mt-4 tracking-wide">
        <ToggleSwitch />
        <LanguageSwitcher />
      </div>
      <Layout />
      <Switch>
        <Route exact path="/">
          {/* Ana sayfa için bileşen buraya eklenecek */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
