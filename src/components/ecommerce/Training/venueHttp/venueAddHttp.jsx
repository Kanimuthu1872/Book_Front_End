import { useState } from "react";
 
export default function VenueAddHttp() {
    const [venueData, setVenueData] = useState({
        venueID: 0,
        venueName: "",
        venueSeater: 0,
        isVenueAc: false,
        venueCity: "",
        venueState: "",
    });
 
    function handleFormSubmit(event) {
        // Prevent the default nature of the submit button
        event.preventDefault();
        // Log the form data
        console.log(venueData);
        // Here you can send venueData to the backend
        setVenueData({
            venueID: 0,
            venueName: "",
            venueSeater: 0,
            isVenueAc: false,
            venueCity: "",
            venueState: "",
        });
    }
 
    return (
        <div className="container m-5">
            <div className="card">
                <form onSubmit={handleFormSubmit}>
                    <div className="card-header bg-success text-light">
                        <h4>ADD NEW VENUE</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <h6>
                                <label htmlFor="venueName" className="form-label">
                                    Venue Name:
                                </label>
                            </h6>
                            <input
                                type="text"
                                id="venueName"
                                placeholder="Enter venue name"
                                className="form-control"
                                onChange={(e) =>
                                    setVenueData({ ...venueData, venueName: e.target.value })
                                }
                            />
                        </div>
 
                        <div className="form-control-group m-1">
                            <h6>
                                <label htmlFor="venueSeater" className="form-label">
                                    Venue Seater:
                                </label>
                            </h6>
                            <input
                                type="number"
                                id="venueSeater"
                                placeholder="Enter venue capacity"
                                className="form-control"
                                onChange={(e) =>
                                    setVenueData({ ...venueData, venueSeater: Number(e.target.value) })
                                }
                            />
                        </div>
 
                        <div className="form-control-group m-1">
                            <h6>
                                <label htmlFor="isVenueAc" className="form-label">
                                    Air Conditioned:
                                </label>
                            </h6>
                            <input
                                type="checkbox"
                                id="isVenueAc"
                                className="form-check-input"
                                onChange={(e) =>
                                    setVenueData({ ...venueData, isVenueAc: e.target.checked })
                                }
                            />
                        </div>
 
                        <div className="form-control-group m-1">
                            <h6>
                                <label htmlFor="venueCity" className="form-label">
                                    Venue City:
                                </label>
                            </h6>
                            <input
                                type="text"
                                id="venueCity"
                                placeholder="Enter venue city"
                                className="form-control"
                                onChange={(e) =>
                                    setVenueData({ ...venueData, venueCity: e.target.value })
                                }
                            />
                        </div>
 
                        <div className="form-control-group m-1">
                            <h6>
                                <label htmlFor="venueState" className="form-label">
                                    Venue State:
                                </label>
                            </h6>
                            <input
                                type="text"
                                id="venueState"
                                placeholder="Enter venue state"
                                className="form-control"
                                onChange={(e) =>
                                    setVenueData({ ...venueData, venueState: e.target.value })
                                }
                            />
                        </div>
                    </div>
 
                    <div className="card-footer bg-success text-light">
                        <button type="submit" className="btn btn-light text-success">
                            ADD
                        </button>
                        <button type="reset" className="btn btn-light text-success mx-5">
                            CLEAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}