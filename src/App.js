import React from "react";
import './App.css';
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Info from "./components/Info";


function App() {

  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App;
