import React, { useState } from "react";
import PersonProps from "./PersonProps";

function Person() {
    const personobj = [
        { Id: 1, Name: "Kanimuthu" },
        { Id: 2, Name: "Mani" }
    ];

    const [selectedPerson, setSelectedPerson] = useState(null);

    const handlePersonClick = (person) => {
        setSelectedPerson(person);
    };

    const allmappedPerson = personobj.map((eachPerson) => (
        <tr key={eachPerson.Id}>
            <PersonProps data={eachPerson} />
            <td>
                <button onClick={() => handlePersonClick(eachPerson)}>
                    View Info
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <h3>List of Persons</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{allmappedPerson}</tbody>
            </table>

            {selectedPerson && (
                <div className="card">
                    <h4>Person Info</h4>
                    <p><strong>Id:</strong> {selectedPerson.Id}</p>
                    <p><strong>Name:</strong> {selectedPerson.Name}</p>
                </div>
            )}
        </>
    );
}

export default Person;
