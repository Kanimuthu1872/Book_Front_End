import { useState} from "react"; 
export default function Counter(){
    //let count=0;
    let[count,setCount]=useState(0);
function handleIncrement(){
    setCount((count)=>count+1);
    setCount((count)=>count+1);
    setCount((count)=>count+1);
    console.log(count);
}    
function handleDecrement(){
    setCount((count)=>count-1);
    setCount((count)=>count-1);
    setCount((count)=>count-1);
    console.log(count);
}
    return(
        <>
        <div className="container m-5 p-5">
            <h2>
            <button className="btn btn-warning" onClick={handleDecrement}>➖</button>
            <span className="mx-5 badge bg-success">{count}</span>
            <button className="btn btn-warning" onClick={handleIncrement}>➕</button>
            </h2>
        </div>
        </>
    )
}