import { CORE_SKILLS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
                  <h2>Core Skills</h2>
                  <ul>
                    {CORE_SKILLS.map((item) => (
                      <CoreConcept key={item.title} {...item} />
                    ))}
                  </ul>
                </section>
    );
}