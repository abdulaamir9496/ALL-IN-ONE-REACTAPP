import PropTypes from "prop-types";
import { createContext } from "react"


export const DataContext = createContext();

const UserContext = ({children}) => {
    
    const userData = {
        name: "Muhammad Aamir",
        age: 28,
        occupation: "Software Engineer",
        city: "Hyderabad"
    }
    
    return (
        <div>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

UserContext.propTypes = {
    children: PropTypes.node.isRequired
}
export default UserContext
