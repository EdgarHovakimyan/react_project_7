import { useState } from "react";
import { IDeveloper } from "./types";
import Developers from "./components/Developers";
import AddDevelopers from "./components/AddDevelopers";

function App() {
  const [developers, setDevelopers] = useState<IDeveloper[]>([
    { id: 1, name: "Gegham", surname: "Vardanyan", age: 20, skills: ["HTML", "CSS", "JS"] },
    { id: 2, name: "Vahan", surname: "Lalayan", age: 19, skills: ["JS", "NODE.JS", "VUE.JS"] },
    { id: 3, name: "Mane", surname: "Sahakyan", age: 22, skills: ["ANGULAR", "PYTHON", "JAVA"] },
  ])
  const [technologies, setTechnologies] = useState<string[]>(["HTML", "CSS", "JS", "NODE.JS", "VUE.JS", "ANGULAR", "PYTHON", "JAVA"])
  const add = (newDeveloper: IDeveloper) => {
    setDevelopers([...developers, newDeveloper])
  }
  const delDeveloper = (id: number) => {
    setDevelopers(
      developers.filter((elm) => elm.id != id)
    )
  }
  return (<>
    <AddDevelopers
      add={add}
      technologies={technologies}
    />
    <Developers
      developers={developers}
      delDeveloper={delDeveloper}
      technologies={technologies}
    />
  </>)
}

export default App;
