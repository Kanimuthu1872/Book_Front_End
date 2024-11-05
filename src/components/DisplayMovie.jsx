function DisplayMovie({LeadActor,Name,Language}){
    return(
        <>
        <h3>This is Display Movie Component</h3>
        <h3>{Name} acted by {LeadActor} belongs to {Language} language</h3>
        </>
    )
}
export default DisplayMovie;