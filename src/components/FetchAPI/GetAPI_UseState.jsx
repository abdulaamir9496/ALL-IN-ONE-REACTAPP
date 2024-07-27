// import { useEffect, useState } from 'react'

// function GetAPI_UseState() {
//     const [data, setData] = useState([]);

//     const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    
//     useEffect(() => {
//         fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             console.log("json", json);
//             setData(json);
//         })
//         .catch((e) => {
//             console.log("error", e);
//         })
//     }, []);

//     return (
//         <>
//             <div>GetAPI_UseState</div>
//             <div className='App'>
//                 <h2>Welcome to the useState GET API request.</h2>
//                 {
//                     data.map(item => {
//                         return(
//                             <div>{item.email}</div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     );
// }

// export default GetAPI_UseState