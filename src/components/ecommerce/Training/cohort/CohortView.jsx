// import { useParams, useNavigate } from "react-router-dom";

// export default function CohortView() {
//     const { cid } = useParams();  
//     const navigate = useNavigate();  

//     return (
//         <div>
//             <button onClick={() => navigate(-1)} className="btn btn-warning">Back To Cohort List</button>
//             <div className="card">
//                 <div className="card-header bg-secondary">
//                 <h3>Cohort Details: {cid}</h3>
//                 </div>
//             </div>
            
//         </div>
//     );
// }
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
export default function CohortView(){
    let {cid}=useParams();
    let navigate=useNavigate();
    let {state}=useLocation();
    console.log({cid});
    return(
        <>
        <button onClick={()=>navigate(-1)} className="btn btn-primary">Back to CohortList</button>
        <h3>Cohort Deatails of cohortID :{cid}</h3>
        <div className="container">
            <p>cohortId:{state.cohortId}</p>
 
 
            <p>cohortSize:{state.cohortSize}</p>
            <p>cohortVenueId:{state.cohortVenueId}</p>
            <p>cohortStack:{state.cohortStack}</p>
            <p>cohortStartDate:{state.cohortStartDate}</p>
        </div>
        </>
    );
}
 