import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }
  return (
    <Section title="Projects" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic == "Project1"}
          onClick={() => handleSelect("Project1")}
        >
          Project1
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "Project2"}
          onClick={() => handleSelect("Project2")}
        >
          Project2
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "Project3"}
          onClick={() => handleSelect("Project3")}
        >
          Project3
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "Project4"}
          onClick={() => handleSelect("Project4")}
        >
          Project4
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please Select a button.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <ul>
            <li>{EXAMPLES[selectedTopic].features[0]}</li>
            <li>{EXAMPLES[selectedTopic].features[1]}</li>
            <li>{EXAMPLES[selectedTopic].features[2]}</li>
          </ul>
        </div>
      )}
    </Section>
  );
}
