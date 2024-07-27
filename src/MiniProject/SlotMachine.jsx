
const SlotMachine = () => {
    const Slot = () => {
        let x = '😄';
        let y = '😄';
        let z = '😄';

        if(x === y && y === z){
            return (
                <>
                    <div className="slot_inner">
                        <h1> {x} {y} {z} </h1>
                        <h1>This is Matching.</h1>
                        <hr />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="slot_inner">
                        <h1> {x} {y} {z} </h1>
                        <h1>This is Not Matching.</h1>
                        <hr />
                    </div>
                </>
            )
        }
    }
}


const SlotMach = () => {
    return (
        <>
        <h1 className="heading_style"> 
        🎰 Welcome to {" "}
        <span style={{fontWeight : "bold"}}>Slot Machine Game</span> 🎰 </h1>
        <Slot />
        </>
    )
}

export default SlotMachine