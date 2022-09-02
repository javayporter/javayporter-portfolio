import "./App.css";
import Layout from "../src/components/Layout/index";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home/index";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
