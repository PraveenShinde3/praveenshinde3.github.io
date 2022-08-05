import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SkillsAndEducation from "./pages/SkillsAndEducation";
import Projects from "./pages/Projects";
import FooterPage from "./pages/FooterPage";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div>
      <Header />
      <Home />
      <About />
      <SkillsAndEducation />
      <Projects />
      <FooterPage />
    </motion.div>
  );
}

export default App;
