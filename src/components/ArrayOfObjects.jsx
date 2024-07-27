// import './ArrayOfObjects.css';

// function ArrayOfObjects(){
//     const data = [
//         {
//             firstName: 'Muhammad',
//             lastName: 'Aamir',
//             qualification: 'Bachelor\'s of Business Management',
//             learning: 'Front End Developer: ReactJs',
//             location: 'Hyderabad',
//             country: 'India',
//             Hobbies: 'Outdoor and Indoor Games',
//         },
//         {
//             firstName: 'Muhammad',
//             lastName: 'Ghouse',
//             qualification: 'Bachelor\'s of Mechanical Engineering',
//             learning: 'Front End Developer: ReactJs',
//             location: 'Hyderabad',
//             country: 'India',
//             Hobbies: 'Outdoor and Indoor Games',
//         },
//         {
//             firstName: 'Muhammad',
//             lastName: 'Asiya',
//             qualification: 'Bachelor\'s of Computer Science Engineering',
//             learning: 'Front End Developer: ReactJs',
//             location: 'Hyderabad',
//             country: 'India',
//             Hobbies: 'Outdoor and Indoor Games',
//         },
//         {
//             firstName: 'Muhammad',
//             lastName: 'Samiullah',
//             qualification: 'Bachelor\'s of Computer Science Engineering',
//             learning: 'Front End Developer: ReactJs',
//             location: 'Hyderabad',
//             country: 'India',
//             Hobbies: 'Outdoor and Indoor Games',
//         },
//         {
//             firstName: 'Muhammad',
//             lastName: 'Saad',
//             qualification: 'Bachelor\'s of Computer Science Engineering',
//             learning: 'Front End Developer: ReactJs',
//             location: 'Hyderabad',
//             country: 'India',
//             Hobbies: 'Outdoor and Indoor Games',
//         }
//     ]
//     return(
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <td>firstName</td>
//                         <td>lastName</td>
//                         <td>qualification</td>
//                         <td>learning</td>
//                         <td>location</td>
//                         <td>country</td>
//                         <td>Hobbies</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((value, i) =>
//                         <tr key={i}>
//                             <td>{value.firstName}</td>
//                             <td>{value.lastName}</td>
//                             <td>{value.qualification}</td>
//                             <td>{value.learning}</td>
//                             <td>{value.location}</td>
//                             <td>{value.country}</td>
//                             <td>{value.Hobbies}</td>
//                         </tr>
//                         )   
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ArrayOfObjects;