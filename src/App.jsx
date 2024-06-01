import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import "./index.css";

// <Header /> is a way to call the function in regular jsx component
// or <Header> </Header>
function App() {
  let [selectedTopic, setSelectedTopic] = useState("components");

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
      <section id="example">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleClick("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
          <TabButton onSelect={() => handleClick("state")}>State</TabButton>
        </menu>

        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default App;
