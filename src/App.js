import React from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
          <section>Strona - Witaj</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
