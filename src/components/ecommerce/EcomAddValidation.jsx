import { useState } from "react";

function EcomAddValidation() {
    const [gadgetData, setGadgetData] = useState({
        prodId: 0,
        prodName: "",
        prodCost: 0,
        prodImage: ""
    });

    const [errors, setErrors] = useState({
        prodName: "",
        prodCost: "",
    });

    function handleFormChange(event) {
        const { name, value } = event.target;
        setGadgetData({ ...gadgetData, [name]: value });
        
        // Clear error messages on change
        setErrors({ ...errors, [name]: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        // Validate gadget name
        if (!gadgetData.prodName) {
            newErrors.prodName = "Gadget Name is required!";
        }
        // Validate gadget cost
        if (gadgetData.prodCost <= 0) {
            newErrors.prodCost = "Gadget Cost must be greater than zero!";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Prevent form submission
        }

        console.log("New Gadget:", gadgetData);

        // Reset the form
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
                    <form onSubmit={handleSubmit}>
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
                                    name="prodName"
                                    onChange={handleFormChange} 
                                    required
                                />
                                {errors.prodName && <div className="text-danger">{errors.prodName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gCost" className="form-label">Gadget Cost</label>
                                <input
                                    type="number"
                                    id="gCost"
                                    className="form-control"
                                    value={gadgetData.prodCost} 
                                    name="prodCost"
                                    placeholder="Enter Gadget Cost"
                                    onChange={handleFormChange} 
                                    required
                                />
                                {errors.prodCost && <div className="text-danger">{errors.prodCost}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gUri" className="form-label">Gadget Image URI</label>
                                <input
                                    type="text"
                                    id="gUri"
                                    className="form-control"
                                    value={gadgetData.prodImage}
                                    name="prodImage"
                                    placeholder="Enter Gadget Image URI"
                                    onChange={handleFormChange} 
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Add Gadget</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EcomAddValidation;
