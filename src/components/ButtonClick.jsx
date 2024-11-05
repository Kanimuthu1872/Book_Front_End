let Buttonclick=function(){
    let count=0;
    function handleClick(){
        count++;
        console.log("clicked");
        console.log(count);
       
    }
    return(
        <>
        <button onClick={handleClick}>Click Me...</button>
         <div>
            {count}
         </div>
        </>
    )


}
export default Buttonclick;
