// import React, { useState, useEffect } from 'react';

// const GetRequestAPI = () => {
//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://dummyjson.com/products/1')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 setPosts([data]); // assuming the response is a single object, wrap it in an array
//             })
//             .catch(error => {
//                 console.error('There was a problem fetching the data:', error);
//                 setError(error);
//             });
//     }, []);

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div>
//             <h2>Get Request API</h2>
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>
//                         <p>ID: {post.id}</p>
//                         <p>Title: {post.title}</p>
//                         <p>Description: {post.description}</p>
//                         <p>Price: {post.price}</p>
//                         <p>Discount Percentage: {post.discountPercentage}</p>
//                         <p>Rating: {post.rating}</p>
//                         <p>Stock: {post.stock}</p>
//                         <p>Brand: {post.brand}</p>
//                         <p>Category: {post.category}</p>
//                         {/* <p>Thumbnail: {post.thumbnail}</p>
//                         <p>Images: {post.images}</p> */}
//                         <img src={post.thumbnail}/>
//                         <div>
//                             {post.images.map((images) => (
//                                 <img src={images} />
//                             ))}
//                         </div>

//                         {/* <img src={post.thumbnail} alt={post.title} /> Displaying thumbnail image */}
//                         {/* <div>
//                             {post.images.map((image, index) => ( // Rendering multiple images if available
//                                 <img key={index} src={image} alt={`Image ${index + 1}`} />
//                             ))}
//                         </div> */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default GetRequestAPI;
