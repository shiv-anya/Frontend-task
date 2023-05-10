import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return <aside className="fixed bg-indigo-50 p-4 h-full w-1/6">
        <nav>
            <ul>
                <li className="p-4 border-solid border-current border-b-2"><Link to="/contacts">Contacts</Link></li>
                <li className="p-4 border-solid border-current border-b-2"><Link to="/graph-and-maps">Graph and Maps</Link></li>
            </ul>
        </nav>
    </aside>
}

export default Sidebar;