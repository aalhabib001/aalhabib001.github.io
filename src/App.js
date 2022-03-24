import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-223822148-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  ReactGA.event({
    category: 'User',
    action: 'Site Visit',
  });

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
