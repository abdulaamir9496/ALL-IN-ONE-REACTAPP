// import { useState, useEffect, React } from 'react';
// // import axios from 'axios';

// // // How To Perform GET HTTP Request in React's Functional Component with the Fetch API

// const GetHttpRequest = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setPosts(data);
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
//     }, []);

//     return (
//     <>
//         <div>GetHttpRequest</div>
//         <div>
//             <ul>
//                 {posts.map((post) => (
//                 <li>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     </>
//     );
// };

// // // How To Perform GET HTTP Request in React's Functional Component With Axios
// // const GetHttpRequest = () => {
// //     const [posts, setPosts] = useState([]);
// //     useEffect(() => {
// //         axios
// //             .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
// //             .then((response) => {
// //                 setPosts(response.data);
// //             })
// //             .catch((err) => {
// //                 console.log(err);
// //             });
// //     }, []);

// //     return(
// //         <div>GetHttpsRequest</div>
// //     );
// // };

// // // How To Perform GET HTTP Request in React's Class Components With Fetch API
// // class App extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             posts: [],
// //         };
// //     }

// //     componentDidMount() {
// //         fetch('https://jsonplaceholder.typicode.com/posts')
// //             .then((data) => this.setState({ posts: data }))
// //             .then((response) => response.json())
// //             .catch((error) => console.log(error));
// //     }

// //     render() {
// //         const { posts } = this.state;

// //         return (
// //             <div>GetHttpsRequest</div>
// //         );
// //     }
// // }

// // // How To Perform GET HTTP Request in React's Class Components With Axios
// // import React, { Component } from 'react';
// // import axios from 'axios';

// // class App extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             posts: [],
// //         };
// //     }

// //     componentDidMount() {
// //         axios
// //             .get('https://jsonplaceholder.typicode.com/posts')
// //             .then((response) => {
// //             this.setState({ posts: response.data });
// //             })
// //             .catch((error) => {
// //             console.log(error);
// //             });
// //     }

// //     render() {
// //         const { posts } = this.state;
// //         return (
// //             <div>GET HTTP Request in React's Class Components With Axios</div>
// //         );
// //     }
// // }

// export default GetHttpRequest