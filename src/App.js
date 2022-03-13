import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ProjectPage from "./components/ProjectPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={DarkTheme}>
        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/workExperience" component={WorkPage} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
