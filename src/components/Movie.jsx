import DisplayMovie from "./DisplayMovie";
function Movie(){
    return(
        <>
         <h3>This is KM's Movie component!</h3>
        <DisplayMovie LeadActor="Thalapathy Vijay" Name="Ghilli" Language="Tamil" ></DisplayMovie>
        <DisplayMovie LeadActor="Thalapathy Vijay" Name="Pokiri" Language="Tamil" ></DisplayMovie>
        <DisplayMovie LeadActor="Thalapathy Vijay" Name="Leo" Language="Tamil" ></DisplayMovie>
        <DisplayMovie LeadActor="Thalapathy Vijay" Name="Greatest of all time" Language="Tamil" ></DisplayMovie>
        <DisplayMovie LeadActor="Thalapathy Vijay" Name="Kaththi" Language="Tamil" ></DisplayMovie>
        </>
    )
}
export default Movie;