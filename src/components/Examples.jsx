import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState("");
  let expampleElements = ["components", "jsx", "props", "state"];

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
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
          > Components </TabButton> 
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
    </section>
  );
}
