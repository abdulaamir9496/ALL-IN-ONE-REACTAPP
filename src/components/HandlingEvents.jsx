/**
 * What is an Event?
 * Events are actions or occurrences that happens in the system you are 
 * programming, which the system tells you about so your code can react to them.
 * 
 * Most often user of a website generates events.
 * 
 * React Events:
 * Just like HTML DOM events, React can perform actions based on user events.
 * React has the same events as HTML: click, change, mouseover etc.,
 * 
 * Adding Events
 * React events are written in camelCase syntax
 * Ex: onClick instead of onlick
 * React event handlers are written inside curly braces: 
 * 
 * Passing Arguments:
 * To pass an argument to an event handler, use an arrow function.
 *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 */


//Event handling using function:

// function HandlingEvents() {
//     function changeEvent() {
//         console.log("I have changed event after the clicking the button")
//     }
//     return (
//         <>
//             <div>HandlingEvents</div>
//             <div>
//                 {/* The output will be displayed only when the button is clicked. */}
//                 <button type="button" onClick={changeEvent}>Click Me</button>  
//                 {/* <button type="button" onClick={changeEvent()}>Click Me</button> if we use parenthesis with the function name the output will be executed without clicking the button. */}

//             </div>
//         </>
//     )
// }

// export default HandlingEvents


//Event handling using class:

// import { Component } from 'react'

// class HandlingEvents extends Component {
//     changeEvent() {
//         console.log("I have changed in Handling Events using class after clicking the button");
//     }
//     render() {
//     return (
//         <>
//             <div>HandlingEvents using class</div>
//             <div>
//                 <button onClick={this.changeEvent}>Click Me</button>
//             </div>
//         </>
//     )
//     }
// }

// export default HandlingEvents

//Event Handling for changing background colors

// const HandlingEvents = () => {
//     const bgChange = () => {
//         console.log("Clicked");
//     }
//     return(
//         <>
//             <div>
//                 <button onClick = {bgChange}>Click Me</button>
//             </div>
//         </>
//     );
// }

// export default HandlingEvents



