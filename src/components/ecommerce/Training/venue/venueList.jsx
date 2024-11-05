import { useState } from "react";

export default function VenueList() {
    const [allVenues, setAllVenues] = useState([{
        venueId: 101,
        venueName: "Pallavas",
        venueSeater: 30,
        isVenueAc: true,
        venueCity: "Trivandrum",
        venueState: "Kerala"
    }]);

    function handleView(venueId) {
        console.log(venueId);
    }

    function handleEdit(venueId) {
        console.log(venueId);
    }

    function handleDelete(venueId) {
        console.log(venueId);
        const filteredVenue=allVenues.filter((eachVenue)=>eachVenue.venueId != venueId);
        setAllVenues(filteredVenue);
    }

    let mappedAllVenues = allVenues.map((eachVenue) => (
        <tr key={eachVenue.venueId}>
            <td>{eachVenue.venueId}</td>
            <td>{eachVenue.venueName}</td>
            <td>{eachVenue.venueSeater}</td>
            <td>{eachVenue.isVenueAc ? "Yes" : "No"}</td>
            <td>{eachVenue.venueCity}</td>
            <td>{eachVenue.venueState}</td>
            <td><button onClick={() => handleView(eachVenue.venueId)} className="btn btn-success">View</button></td>
            <td><button onClick={() => handleEdit(eachVenue.venueId)} className="btn btn-warning">Edit</button></td>
            <td><button onClick={() => handleDelete(eachVenue.venueId)} className="btn btn-danger">Delete</button></td>
        </tr>
    ));

    return (
        <div className="container m-5">
            <h4>List of Venues</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CAPACITY</th>
                        <th>AC</th>
                        <th>CITY</th>
                        <th>STATE</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{mappedAllVenues}</tbody>
            </table>
        </div>
    );
}
