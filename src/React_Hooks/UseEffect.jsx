// import { useState, useEffect } from "react";

// export default function UseEffect() {
//     //use of useState function 
//     const [count, setCount] = useState(0);
//     // const [loaded, setLoaded] = useState(false);  //infinite loop

//     // use of useEffect function (Run when mounted & Run when state changes)
//     useEffect(() => {
//         alert("Use of useEffect function");
//     });

//     //tier down code when the function is destroyed, implementation of tier down function
//     // useEffect(() => {  //Run before component is removed from UI
//     //     alert("Hello side effect!");
    
//     //     return () => alert('Goodbye component!');
//     // });

//     //use of useEffect function (Run when)
//     // useEffect(() => {
//     //     fetch('foo').then(() => {   //infinite loop
//     //         setLoaded(true);
//     //     })
//     // });

//     //use of useEffect function (Run when)
//     // useEffect(() => {
//     //     fetch('foo').then(() => {
//     //         setLoaded(true);
//     //     }, []) //for stopping the infinite loop we addresses with the empty array
//     // });  //If we add empty array that means there is no DEPENDENCIES

//     //use of useEffect function (Run when)
//     // useEffect(() => {
//     //     fetch('foo').then(() => {
//     //         setLoaded(true);
//     //     }, [count])  //It will re-run when count changes, adding the state to the DEPENDENCIES(count) now react will tract that value every time it changes
//     // });

//     return (
//         <>
//             <button onClick={() => setCount(count + 1)}>Clicked Me {count}</button>
//         </>
//     )
// }
