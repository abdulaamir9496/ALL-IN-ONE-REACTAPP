// //CONTEXT: share data without passing props
// //Allows you to work with the context API

// const moods = {
//     happy: 'happy',
//     sad: 'sad',
// }

// // const MoodContext = createContext(moods);
// const MoodContext = (moods);


// export default function UseContext() {
//     return (
//         <MoodContext.Provider value={moods.happy}>
//             <MoodEmoji />
//         </MoodContext.Provider>
//     )
// }

// // function MoodEmoji() {
// //     const mood = useContext(MoodContext); //consume value from nearest parent provider
// //     return <p>{mood}</p>;
// // }

// function MoodEmoji() {
//     return <MoodContext.Provider>
//         {({mood}) => <p>{mood}</p>}
//     </MoodContext.Provider>
// }