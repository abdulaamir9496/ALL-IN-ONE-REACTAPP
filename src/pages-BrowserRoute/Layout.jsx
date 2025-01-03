import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li>
                    <Link to='nopage'>NoPage</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;