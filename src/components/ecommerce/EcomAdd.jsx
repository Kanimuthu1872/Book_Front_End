import { useState } from "react";

function EcomAdd() {
    const [gadgetData, setGadgetData] = useState({
        prodId: 0,
        prodName: "",
        prodCost: 0,
        prodImage: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Gadget:", gadgetData);
        setGadgetData({
            prodId: 0,
            prodName: "",
            prodCost: 0,
            prodImage: ""
        });
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className="card-header bg-success text-light">
                            <h3>ADD A NEW GADGET</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="gName" className="form-label">Gadget Name</label>
                                <input
                                    type="text"
                                    id="gName"
                                    className="form-control"
                                    value={gadgetData.prodName}
                                    placeholder="Enter Gadget Name"
                                    onChange={(e) => setGadgetData({ ...gadgetData, prodName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gCost" className="form-label">Gadget Cost</label>
                                <input
                                    type="number"
                                    id="gCost"
                                    className="form-control"
                                    value={gadgetData.prodCost}
                                    placeholder="Enter Gadget Cost"
                                    onChange={(e) => setGadgetData({ ...gadgetData, prodCost: parseFloat(e.target.value) })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gUri" className="form-label">Gadget Image URI</label>
                                <input
                                    type="text"
                                    id="gUri"
                                    className="form-control"
                                    value={gadgetData.prodImage}
                                    placeholder="Enter Gadget Image URI"
                                    onChange={(e) => setGadgetData({ ...gadgetData, prodImage: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" >Add Gadget</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EcomAdd;
