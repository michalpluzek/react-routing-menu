import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Start</Link>
                </li>
                <li>
                  <Link to="/news">Aktualności</Link>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
