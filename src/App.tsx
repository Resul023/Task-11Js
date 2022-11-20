import React from "react";

import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
