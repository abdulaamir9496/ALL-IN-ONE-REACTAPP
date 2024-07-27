// import { React, useState, useEffect } from 'react'

// function UseEffectHook() {
//     const [count, setcounter] = useState(0);
//     const [data, setdata] = useState("Aamir");

//     useEffect(() => {
//         console.log("Component Mount");
//     }, [count]);

//     function updateCount() {
//         setcounter(count + 1);
//     }
//     function updateData() {
//         setdata("Muhammad");
//     }
//     return (
//         <>
//             <div>
//                 <h1>We are learning about UseEffectHook in ReactJS</h1>
//                 <h2>Button clicked {count} times</h2>
//                 <button onClick={updateCount}>Click Me</button>
//                 <button onClick={updateData}>Update Button</button>
//             </div>
//         </>
//     )
// }

// export default UseEffectHook