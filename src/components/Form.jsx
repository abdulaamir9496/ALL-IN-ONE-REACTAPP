// import React, { Component } from 'react'

// class Form extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {};
//     }
//     //getting the data from the form when the element gets changed
//     // nameChangeHandler = (event) => {
//     //     console.log("Name", event.target.value);
//     // };

//     // nameChangeHandler = (event) => {
//     //     console.log("Select", event.target.value);
//     // };

//     submitHandler = (event) => {
//         console.log("Submit", event); //page is refreshing the form
//     };

//     render() {
//     return (
//         <div>
//             <form onSubmit={this.submitHandler}>
//                 <div>
//                     <label htmlFor=''>Name: </label>
//                     <input type="text" name='name' onKeyUp={this.nameChangeHandler}/>
//                 </div>
//                 <div>
//                     <label htmlFor=''>Country: </label>
//                     {/* <select onChange={this.nameChangeHandler}> */}
//                     <select name='Country'>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                     </select>
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
//     }
// }

// export default Form