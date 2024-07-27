
// // const SimpleGreetingWebsite = () => {

// //     let curDate = new Date(2024, 6, 28, 12);
// //     curDate = curDate.getHours();

// //     let greeting = '';
// //     const cssStyle = {};

// //     if(curDate => 12 && curDate < 11) {
// //         greeting = "Good Morning!";
// //         cssStyle.color = "green";
// //     } else if(curDate => 12 && curDate < 7) {
// //         greeting = "Good Afternoon!";
// //         cssStyle.color = "orange";
// //     } else {
// //         greeting = "Good Night!";
// //         cssStyle.color = "black";
// //     }

// //     return (
// //         <>
// //             <div>
// //                 <h1>Welcome Aamir, <span style={cssStyle}>{greeting}</span></h1>
// //             </div>
// //         </>
// //     )
// // }

// // export default SimpleGreetingWebsite

// //Rewrite our project into components in React JS

// function SimpleGreetingWebsite() {

//     let curDate = new Date(2024, 6, 28, 2);
//     curDate = curDate.getHours();
//     let greeting = '';
//     const cssStyle = {};

//     if(curDate >= 1 && curDate < 12) {
//         greeting = "Good Morning!";
//         cssStyle.color = "green";
//     } else if(curDate >= 12 && curDate < 20) {
//         greeting = "Good Afternoon!";
//         cssStyle.color = "orange";
//     } else if(curDate >= 20 && curDate <= 24) {
//         greeting = "Good Night!";
//         cssStyle.color = "black";
//     }

//     return(
//         <>
//             <div>
//                 <h1>
//                     Welcome Coders! <span style={cssStyle}> {greeting} </span>
//                 </h1>
//             </div>
//         </>
//     );
// }

// export default SimpleGreetingWebsite;