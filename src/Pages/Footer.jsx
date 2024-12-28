import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Footer = () => {

    const footerData = useContext(DataContext)

    return (
        <>
            <h1>This is Footer.{footerData.city}</h1>
        </>
    )
}

export default Footer
