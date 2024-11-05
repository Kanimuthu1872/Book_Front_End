import React from "react";
import ActorItem from "./ActorItem";

function ActorList() {
    const allActors = [
        { Id: 1, Name: "Kanimuthu" },
        { Id: 2, Name: "Nivetha" },
        { Id: 3, Name: "Murugesan" }
    ];

    const mapAllActor = allActors.map((eachActor) => (
        <ActorItem key={eachActor.Id} data={eachActor} />
    ));

    return (
        <>
            <h3>List of Actors</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{mapAllActor}</tbody>
            </table>
        </>
    );
}

export default ActorList;
