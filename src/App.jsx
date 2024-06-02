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
  let [selectedTopic, setSelectedTopic] = useState("");
  let expampleElements = ["components", "jsx", "props", "state"];
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
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}
      </main>
      <section id="example">
        <h2>Examples</h2>
        <menu>
          {expampleElements.map((elem) => (
            <TabButton
              key={elem}
              isSelected={selectedTopic === elem}
              onSelect={() => handleClick(elem)}
            >
              {elem.toUpperCase()}
            </TabButton>
          ))}
          {/* 
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleClick("components")}
          >
            Components
          </TabButton> 
          */}
        </menu>

        {!selectedTopic && <p>Please Select a topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        {/* or simply can use a ternary operator */}
      </section>
    </div>
  );
}

export default App;
