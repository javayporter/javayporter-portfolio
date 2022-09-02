import logo from "./logo.svg";
import "./App.css";
import Layout from "../src/components/Layout/index";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Home from "./components/Home/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
