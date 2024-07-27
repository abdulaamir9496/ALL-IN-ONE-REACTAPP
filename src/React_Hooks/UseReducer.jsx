// import { useReducer } from "react";

// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             throw new Error();
//     }
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, 0);
//     return (
//         <>
//             <div>UseReducer</div>
//             count: {state}
//             <button onClick={() => dispatch({type: "decrement"})}>-</button>
//             <button onClick={() => dispatch({type: "increment"})}>+</button>
//         </>
//     )
// }


// /**
//  * a different way to manage state, in a different way using REDUX pattern
//  * it is very similar to setState
//  * this part of code: onClick={() => dispatch({type: "decrement"})} is ACTION type: string, payload: any
//  */