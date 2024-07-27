import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
    <div>
        <Header />
        <h2>Blogs Articles</h2>
        <h3>Click on any of the below links to land on that particular page without loading the complete WebPage.</h3>
        <br />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/blogs'>Blog Articles</Link>
        <br />
        <Link to='/contact'>Contact Me</Link>
        <br />
        <Link to='/nopage'>NoPage Found</Link>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default Blogs