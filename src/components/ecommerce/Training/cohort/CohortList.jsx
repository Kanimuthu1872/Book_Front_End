import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function CohortList() {
  const navigate=useNavigate();
  const [searchStack,setSearchStack]=useState("");
 
  const [allCohorts, setAllCohorts] = useState([
    {
      cohortId: 201,
      cohortSize: 26,
      cohortVenueId: 0,
      cohortStack: "java full stack",
      cohortStartDate: "2024-12-12",
      cohortDurationWeeks: 6,
      cohortSPOC: "",
      cohortInstructor: "",
    },
    {
        cohortId: 202,
        cohortSize: 26,
        cohortVenueId: 0,
        cohortStack: "python full stack",
        cohortStartDate: "2024-12-12",
        cohortDurationWeeks: 6,
        cohortSPOC: "",
        cohortInstructor: "",
      },
      {
        cohortId: 203,
        cohortSize: 26,
        cohortVenueId: 0,
        cohortStack: ".Net full stack",
        cohortStartDate: "2024-12-12",
        cohortDurationWeeks: 6,
        cohortSPOC: "",
        cohortInstructor: "",
      },
  ]);
  // initially we willdisplay all cohorts
  const [filteredAllCohorts,setFilteredCohorts]=useState([...allCohorts])
  const [allVenues, setAllVenues] = useState([
    {
      VenueId: 101,
      venueName: "Pallavas",
      venueSeater: 30,
      isVenueAc: true,
      venueCity: "trivandrum",
      venueState:"Kerala"
    },
  ]);
 
  let mappedAllCohorts=filteredAllCohorts.map((eachCohort)=>
  <tr key={eachCohort.cohortId}>
      <td>{eachCohort.cohortId}</td>
      <td>{eachCohort.cohortSize}</td>
      <td>{eachCohort.cohortVenueId}</td>
      <td>{eachCohort.cohortStack}</td>
      <td>{eachCohort.cohortStartDate}</td>
      <td>{eachCohort.cohortDurationWeeks}</td>
      <td>{eachCohort.cohortSPOC}</td>
      <td>{eachCohort.cohortInstructor}</td>
      <td><button onClick={()=>handleView(eachCohort.cohortId)} className="btn btn-warning">VIEW</button></td>
      <td><button onClick={()=>handleEdit(eachCohort.cohortId)} className="btn btn-primary">EDIT</button></td>
      <td><button onClick={()=>handleDelete(eachCohort.cohortId)} className="btn btn-danger">Delete</button></td>
  </tr>
  );
 
function handleSearch(e){
  // console.log("handle search method...")
  setSearchStack(e.target.value);
  // if we alter the state variable in that function we cannot use that state variable immediately becuase it works on stale data
  // let filteredByStack=allCohorts.filter((eachCohort)=>eachCohort.cohortStack.toLowerCase().includes(searchStack.toLowerCase()));
  let filteredByStack=allCohorts.filter((eachCohort)=>eachCohort.cohortStack.
  toLowerCase().
  includes(e.target.value.toLowerCase())
  );
  // setFilteredCohorts(filteredAllCohorts); we cannot use it becuase it permanenents converts the allcohorts to categorized cohorts
  setFilteredCohorts([...filteredByStack])
}
 
  function handleView(cohortId){
    console.log(cohortId);
    // navigate to another component with route-path cohort-view this called programtic navigation
    let getCohort=filteredAllCohorts.filter((eachCohort)=>eachCohort.cohortId==cohortId);
    navigate("/training/cohort-view/" +cohortId,{state:getCohort[0]})
}
 
function handleDelete(cohortId){
    console.log(cohortId);
    // before search
 
    // let filteredCohorts=allCohorts.filter((eachCohort)=>eachCohort.cohortId!=cohortId);
    // setAllCohorts(filteredCohorts);
 
    // after search
    let filteredCohorts=filteredAllCohorts.filter((eachCohort)=>eachCohort.cohortId!=cohortId);
     setFilteredCohorts(filteredCohorts);
 
}
 
function handleEdit(cohortId){
    console.log(cohortId);
}
 
function handleClick(){
  navigate("/training/cohort-add");
}
 
 
  return (
      <>
      {JSON.stringify(allCohorts)}
      {JSON.stringify(all)}
      <div className="container m-3">
      <div>
        <button className="btn btn-primary my-2" onClick={handleClick}>ADD cohort</button>
      </div>
      <h3>List Of Cohorts:</h3>
      <div className="formC-control-group my-2">
        <label htmlFor="sStack">Search :</label>
        <input type="text" placeholder="search" id="sStack"
        onChange={(e)=>handleSearch(e)}
        />
      </div>
     
      <table className="table table-stripped">
          <thead >
              <tr className="table-dark">
              <th>Id</th>
              <th>Size</th>
              <th>VenueId</th>
              <th>Stack</th>
              <th>StartDate</th>
              <th>DurationInWeeks</th>
              <th>SPOC</th>
              <th>Instructor</th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
          </thead>
          <tbody>
              {mappedAllCohorts}
          </tbody>
      </table>
  </div>
     
      </>
  );
}