import React from 'react';
import {Link} from "react-router-dom";
import PropsType from "prop-types";

const Navbar = ({title,icon}) => {
    
        return(
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon} style={{color:"black"}}></i> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
}
Navbar.defaultProps = {
    title:"Github Finder",
    icon:"fab fa-github-square"
}

Navbar.propsType = {
    title:PropsType.string.title,
    icon:PropsType.string.icon
}

export default Navbar;