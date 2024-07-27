// import { useEffect, useState } from 'react'

// function PostAPI() {
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

//     //Post and Put API implementation
//     const postPutEvent = () => {
//         const data = {
//             id: 'asd123',
//             name: 'Muhammad',
//             mobile: '7867867863',
//             designation: 'Developer',
//             pin: '500008',
//         }
//             const url = data.id ? 'https://jsonplaceholder.typicode.com/comments/' + data.id : 'https://jsonplaceholder.typicode.com'
//             fetch(url, {
//                 method: data.id ? 'PUT' : 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                 },
//                 body:JSON.stringify(data)
//             })
//             .then(response => {
//                 console.log("response", response);
//                 if(response.state == 200) {
//                     alert('success')
//                 }
//             }).catch(e => {
//                 console.log("e", e)
//             })
//     }

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

// export default PostAPI