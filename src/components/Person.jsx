function Person(){
    let oneperson={
        id:1,
        name :"kani"
    }
    return(
        <>
        <h2>Person Component</h2>
        <h4>Person Id : {oneperson.id}</h4>
        <h4>Person Name: {oneperson.name}</h4>
        </>
    )
}
export default Person;