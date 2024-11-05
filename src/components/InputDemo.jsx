import { useState } from "react";
 
export default function InputDemo(){
 
    //let data="hello";
    const [data,setData]=useState("");
 
    // function handleChange(e){
    //     console.log(e.target.value);
    //     setData(e.target.value);
    // }
   
    return(
        <>
        <h4>
        <div className="container m-5 p-5">
            <input type="text" value={data}
            onChange={(e)=>setData(e.target.value)
                //</div>handleChange(e)
                }>
            </input>
           
            <div>{data}</div>
        </div>
        </h4>
 
        </>
    );
}