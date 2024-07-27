/**
 * what is conditional rendering?
 * on certain conditions we will hide our data or show the data in JSX 
 * for such conditions we call it conditional rendering
 * 
 * To achieve conditional rendering in reactJs we have 4 conditions
 * If/else
 * Element variables
 * Ternary operator
 * Short circuit operator
 */

// import React, { useState } from "react";


//TOPIC1: If/else (never use if/else condition) it is not a good approach and not recommended.

// function ConditionalRendering() {
//     const [isAgeValid, setisAgeValid] = useState(true);
//     if(isAgeValid) {
//         return (
//             <div>You can vote.</div>
//         )
//     } else {
//         return (
//             <div>You cannot vote.</div>
//         )
//     }
// }
// export default ConditionalRendering


//TOPIC2: Element variables (some better approach compared to if/else condition)

// export default function ConditionalRendering() {
//     const [isAgeValid, setisAgeValid] = useState(true);
//     let age;
//     if(isAgeValid) {
//         age = <div>You can vote</div>
//     } else {
//         age = <div>You cannot vote</div>
//     }
//     return (
//         <>{age}</>
//     )
// }

//NOTE: this is also not a much good approach so will use one more approach 
//which is recommended and mostly used is known as 'ternary operator'


/**
 * TOPIC: Ternary operator (much better approach compared to if/else condition & Element variables: 
 * mostly recommended)
 * 
 * why this Ternary operator come into this picture, reason being in JSX we cannot use if/else condition
 * that means we cannot use if/else keywords
 * So, whenever we have to use the if/else conditions in JSX we use Ternary operator in JSX
 * Best approach: in real time while working in the companies we see and we use this kind of Ternary operator approach
 */

// const ConditionalRendering = () => {
//     const [isAgeValid, setisAgeValid] = useState(true);
//     return (
//         <>
//             {isAgeValid ? <div>You can vote</div> : <div>You cannot vote</div>}
//         </>
//     )
// }

// export default ConditionalRendering

/**
 * TOPIC: Short circuit operator
 * short circuit operator is similar to Ternary operator
 * we use this 'short circuit operator' only when we have to use 'if' condition
 * where we don't want to use 'else' condition in such scenarios we use 'short circuit operator'
 */

// const ConditionalRendering = () => {
//     const [isAgeValid, setisAgeValid] = useState(true);
//     return (
//         <>
//             {isAgeValid && <div>You can vote</div>}
//         </>
//     )
// }

// export default ConditionalRendering