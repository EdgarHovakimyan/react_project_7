import React, { useState } from "react";
import { IDeveloper } from "../types";

interface Props {
    developers: IDeveloper[];
    delDeveloper: Function;
    technologies: string[];
}

function Developers({ developers, delDeveloper, technologies }: Props) {
    const [inputValue, setInputValue] = useState<string[]>([]);

    const handleCheckboxChange = (tech: string) => {
        setInputValue((prev) =>
            prev.includes(tech) ? prev.filter((item) => item !== tech) : [...prev, tech]
        );
    };

    let filteredDevelopers = developers;
    if (inputValue.length > 0) {
        filteredDevelopers = filteredDevelopers.filter((elm) =>
            inputValue.every((tech) => elm.skills.includes(tech))
        );
    }

    return (
        <>
            <table style={{ width: "400px" }} className="table table-success table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Technologies</th>
                        <th>Check</th>
                    </tr>
                </thead>
                <tbody>
                    {technologies.map((tech, index) => (
                        <tr key={index}>
                            <td>{tech}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={inputValue.includes(tech)}
                                    onChange={() => handleCheckboxChange(tech)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Skills</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDevelopers.map((developer, index) => (
                        <tr key={index}>
                            <td>{developer.id}</td>
                            <td>{developer.name}</td>
                            <td>{developer.surname}</td>
                            <td>{developer.age}</td>
                            <td>
                                <ul>
                                    {developer.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button
                                    onClick={() => delDeveloper(developer.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default React.memo(Developers);
