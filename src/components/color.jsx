function Color(){
    let allcolors=["RED" , "BLUE", "GREEN"];
    let mappedAllColors= allcolors.map((eachColor)=><li>{eachColor}</li> );
    return (
        <>
        <h2>This is color</h2>
        <h3>{allcolors}</h3>
        <h2>Listing all colors</h2>
        <ul>
            {allcolors.map((eachColor)=> (<li>{eachColor}</li>))}
        </ul>
        <h2>ordered List</h2>
        <ol>
            {mappedAllColors}
        </ol>
        </>
    )
}
export default Color;