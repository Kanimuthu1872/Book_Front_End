import { useState } from "react";
export default function CohortAdd(){
    const [cohortData, setCohortData] = useState({
        cohortID:0,
        cohortSize:0,
        cohortVenueId:0,
        cohortStack:" ",
        cohortStartDate:" ",
        cohortDurationWeeks:0,
        cohortPOC:" ",
        cohortInstructor:" "
      });
 
      function handleFormSubmit(event){
        event.preventDefault();
        console.log(cohortData);
        setCohortData({
            cohortID:0,
            cohortSize:0,
            cohortVenueId:0,
            cohortStack:" ",
            cohortStartDate:" ",
            cohortDurationWeeks:0,
            cohortPOC:" ",
            cohortInstructor:" "

        }

        )
      }
 
   
    return(
        <>
        <div className="container m-5">
        <div className="card">
          <form  onSubmit={(e)=>handleFormSubmit(e)}>
            <div className="card-header bg-warning text-light">
              <h4>ADD NEW COHORT</h4>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="cSize" className="form-label">
                 Cohort size:
                </label>
                </h6>
                <input
                  type="text"
                  id="cSize"
                  placeholder="Enter cohort size"
                  className="form-control"
                  onChange={(e) =>
                    setCohortData({ ...cohortData, cohortSize: e.target.value })
                  }
                ></input>
              </div>
 
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="cVenueId" className="form-label">
                Cohort Venue Id:
                </label>
                </h6>
                <input
                  type="text"
                  id="cVenueId"
                  placeholder="Enter cohort venue Id"
                  className="form-control"
                  onChange={(e) =>
                    setCohortData({ ...cohortData, cohortVenueId: e.target.value })
                  }
                ></input>
              </div>
 
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="duration" className="form-label">
                Duration weeks:
                </label>
                </h6>
                <input
                  type="text"
                  id="duration"
                  placeholder="Enter cohort stack"
                  className="form-control"
                  onChange={(e) =>
                    setCohortData({ ...cohortData, cohortDurationWeeks: e.target.value })
                  }
                ></input>
              </div>
 
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="POC" className="form-label">
                POC:
                </label>
                </h6>
                <input
                  type="text"
                  id="POC"
                  placeholder="Enter POC "
                  className="form-control"
                  onChange={(e) =>
                    setCohortData({ ...cohortData, cohortPOC: e.target.value })
                  }
                ></input>
              </div>
 
              <div className="form-control-group m-1">
                <h6>
                <label htmlFor="Instructor" className="form-label">
                Instructor:
                </label>
                </h6>
                <input
                  type="text"
                  id="Instructor"
                  placeholder="Enter Instructor"
                  className="form-control"
                  onChange={(e) =>
                    setCohortData({ ...cohortData, cohortInstructor: e.target.value })
                  }
                ></input>
              </div>
 
 
 
 
            </div>
 
            <div className="card-footer  bg-success text-light ">
              <button type="submit"
               className="btn btn-light text-success "
              >
                ADD
              </button>
              <button type="reset"
              className="btn btn-light text-success mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}