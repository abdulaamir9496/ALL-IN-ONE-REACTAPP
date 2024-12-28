import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Section = () => {

    const sectionData = useContext(DataContext)

    return (
        <>
            <h1>This is Section.{sectionData.occupation}</h1>
        </>
    )
}

export default Section
