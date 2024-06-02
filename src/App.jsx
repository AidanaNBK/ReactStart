import { Fragment } from "react";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

import "./index.css";
// <Header /> is a way to call the function in regular jsx component (<Header> </Header>)

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
      </main>
      <Examples />
    </Fragment>
  );
}

export default App;
