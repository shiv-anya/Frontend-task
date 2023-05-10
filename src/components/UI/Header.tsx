import React from "react";
import {useLocation} from "react-router-dom"
const Header = () => {
    const location = useLocation()
    let path = location.pathname;
    if (path === "/graph-and-maps") {
        path = "Graph and Maps"
    } else {
        path = "Contacts";
    }
    return <div>
        <header className="bg-blue-500 h-20 flex justify-center text-white items-center text-2xl">
            <h1>{path}</h1>
        </header>
    </div>
}

export default Header;