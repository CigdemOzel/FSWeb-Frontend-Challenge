import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "./components/ToggleSwitch";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div class="flex items-center justify-end gap-4 p-4 mr-40 mt-4 tracking-wide ">
        <ToggleSwitch />
        <LanguageSwitcher />
      </div>
      <Layout />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <Switch>
        <Route exact path="/">
          {/* Ana sayfa için bileşen buraya eklenecek */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
