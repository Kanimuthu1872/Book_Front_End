function FruitArray(){
    let allFruit=[
        {
            id: 11,
            Name : "PineApple"
        },
        {
            id: 12,
            Name : "Apple"
        }

    ]
    let mappedAllFruits=allFruit.map((eachFruit)=><li>{eachFruit.id} : {eachFruit.Name}</li>)
    return(
        <>
        <h2>
            FruitArray component
        </h2>
        <h4>List of all things</h4>
        <ul>
            {mappedAllFruits}
        </ul>
        </>
    )
}
export default FruitArray;