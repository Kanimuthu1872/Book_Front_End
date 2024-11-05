import { useState } from "react";

export default function JsonPlaceholder(){
    const [allPosts, setAllPosts]=useState([])
    function handleClick(){
        let baseUrl="https://jsonplaceholder.typicode.com/posts";
        fetch(baseUrl).then((res)=>res.json())
        .then((data)=>{console.log(data);
             setAllPosts([...data])})
    }
    let mapAllPosts=allPosts.map((eachPost)=>
        <tr key={eachPost.id}>
            <td>{eachPost.id}</td>
            <td>{eachPost.title}</td>
            <td>{eachPost.userId}</td>
            <td>{eachPost.body}</td>
        </tr>
    )

    return (
        <>
        <div className="container m-2">
            <button className="btn btn-primary" onClick={handleClick}>click to get post from placeholder</button>
            <table className="table table-stripped">
                <thead>
                    <tr className="bg-dark text-light">
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>USERID</td>
                        <td>BODY</td>
                    </tr>
                </thead>
                <tbody>
                    {mapAllPosts}
                </tbody>
            </table>
        </div>
        </>
    )
}