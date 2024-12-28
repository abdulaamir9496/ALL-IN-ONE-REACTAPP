import { useContext } from "react"
import { DataContext } from "../context/UserContext"

const Header = () => {

    const userHeader = useContext(DataContext)

    return (
            <>
                <h1>This is Header.{userHeader.age}</h1>
            </>
    )
}

export default Header
