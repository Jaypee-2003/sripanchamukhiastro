import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles.app}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to bottom, #f9f3e6, #fffaf0)", // Light gradient
    color: "#333",
    minHeight: "100vh",
    scrollBehavior: "smooth",
  },
};

export default App;
