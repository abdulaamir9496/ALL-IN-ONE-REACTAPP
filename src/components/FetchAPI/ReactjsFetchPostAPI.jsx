// import { useEffect } from "react";
// import axios from "axios";
// import useFetch from "./useFetch";

// const ReactjsFetchPostAPI = () => {

    //TOPIC 1: ReactJs Fetch Post API request method

    // const data1 = {
    //     title: "This is title of POST request",
    //     body: "This is body of POST request",
    //     userID: 101
    // };

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "content-type": "application/json",
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // });
    
    //TOPIC 2: ReactJs Fetch Post API request method (2. Fetch data using API using Axios Package)

    // const data2 = {
    //     title: "This is title of POST request",
    //     body: "This is body of POST request",
    //     userID: 102
    // };

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         body: data2,
    //         headers: {
    //             "context-type": "application/json",
    //         }
    //     })
    //         .then(response => console.log(response.data))
    // });

    //TOPIC 3: ReactJs Fetch Post API request method (3. Fetch data using API with Async-Await)

    //     const data3 = {
    //     title: "This is title of POST request",
    //     body: "This is body of POST request",
    //     userID: 101
    // };

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    //                 method: "POST",
    //                 body: data3,
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             })
    //                 console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     })()
    // });

    //TOPIC 4: ReactJs Fetch Post API request method (4. Using Custom hook)

    //     const data4 = {
    //     title: "This is title of POST request",
    //     body: "This is body of POST request",
    //     userID: 101
    // };

    // const { data: dataInfo, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         body: data4,
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    // });

//     return (
//         <div>
//             ReactjsFetchPostAPI
//             {console.log(dataInfo, loading, error, refetch)}
//         </div>
//     )
// }

// export default ReactjsFetchPostAPI