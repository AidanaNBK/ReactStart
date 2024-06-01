import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";
// <Header /> is a way to call the function in regular jsx component
// or <Header> </Header>
function App() {
  let [selectedTopic, setSelectedTopic] = useState("Please click a button");

  // let tabContent = "Please click a button";

  function handleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleClick("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
          <TabButton onSelect={() => handleClick("state")}>State</TabButton>
        </menu>
        {selectedTopic}
      </section>
    </div>
  );
}

export default App;
