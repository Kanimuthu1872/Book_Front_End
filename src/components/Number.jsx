function Number(){
    let odd =[1,3,5,7,9];
    let even = [2,4,6,8,10];
    let mappedodd=odd.map((eachNumber)=><li>{eachNumber}</li>)
    let mappedeven=even.map((eachNumber)=><li>{eachNumber}</li>)
    let combinedArray=[...odd, ...even]
    let mappedcomb=combinedArray.map((eachNumber)=><li>{eachNumber}</li>)
    return(
        <>
        <h2>This is Number Component</h2>
        <ul>
            {mappedodd}
        </ul>
        <ul>
            {mappedeven}
        </ul>
        <ul>
            {mappedcomb}
        </ul>
        </>
    )
}
export default Number;