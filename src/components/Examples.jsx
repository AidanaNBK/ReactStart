import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState("");
  let expampleElements = ["components", "jsx", "props", "state"];

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabComponent = !selectedTopic ? (
    <p>Please Select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section id="example" title="Examples">
      <Tab
        containerType="menu"
        innerButtons={expampleElements.map((elem) => (
          <TabButton
            key={elem}
            isSelected={selectedTopic === elem}
            onSelect={() => handleClick(elem)}
          >
            {elem.toUpperCase()}
          </TabButton>
        ))}
      >
        {tabComponent}
      </Tab>
    </Section>
  );
}
