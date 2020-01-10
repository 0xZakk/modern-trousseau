import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";

import Informationbanner from "./components/BridalAppointment/BridalAppointment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InformationBanner>
            <h2>Book Appointments</h2>
            <p>
              Modern Trousseau appointments are truly about you, the bride. Our
              Flagship stores offer private appointment for you, your family and
              friends, to create your dream wedding gown. With every Modern
              Trousseau gown made in Woodbridge, Connecticut, be prepared for
              fun, bubbles, and that magic moment where you find your dream
              dress.
            </p>
          </InformationBanner>
        </a>
      </header>
    </div>
  );
}

export default App;
