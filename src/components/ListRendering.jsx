/**
 * Rendering of List in react?
 * How map works in react?
 * Normal approach of list rendering
 */

// function ListRendering() {
//     const fruits = ["Apple", "Banana", "litchi", "DragonFruit", "Pomegranate",]
//     return (
//         <>
//             <div className="listrendering">
//                 {fruits[0]} <br />
//                 {fruits[1]} <br />
//                 {fruits[2]} <br />
//                 {fruits[3]} <br />
//                 {fruits[4]}
//             </div>
//         </>
//     )
// }

// export default ListRendering


/**
 * Rendering a list of fruit using Map functionality
 */


// function ListRendering() {
//     const Fruits = ["Apple", "Banana", "litchi", "DragonFruit", "Pomegranate"]
//     const result = Fruits.map((fruit) => <p>{fruit}</p>)   //Missing 'key' prop element in iterator
// return (
//         <>
//             <div className="maplistrendering">
//                 {result}
//             </div>
//         </>
//     )
// }

// export default ListRendering

//Warning: Each child in a list should have a unique "key" prop.
/**
 * What is this unique 'key' prop?
 * Keys help React identify which item has changed, are added, or are removed.
 * Keys should be given to the elements inside the array to give the elements a stable identity
 * 
 * if we have unique values in our 'key' then we don't use 'index' as a 'key' prop
 * if we don't have any unique values as an 'id' in the array list, objects then we use 'index' as a 'key' prop
 * For generating unique 'key's we use 'index'
 */


// function ListRendering() {
//     const Fruits = ["Apple", "Banana", "litchi", "DragonFruit", "Pomegranate", "Apple", "Banana"]
//     const result = Fruits.map((fruits, index) => <p key={index}>{fruits} index is {index}</p>)
//     return (
//         <>
//             {result}
//         </>
//     )
// }

// export default ListRendering

