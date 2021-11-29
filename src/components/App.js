import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
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
                  <NavLink to="/">Start</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    className={({ isActive }) => isActive && "news_selected"}
                  >
                    Aktualności
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive && "contact_selected"}
                  >
                    Kontakt
                  </NavLink>
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
