import React, { Fragment } from "react";
import ContactList from "../Contact/ContactList";

const Dashboard = () => {
    return <Fragment>
        <div className="w-5/6 fixed right-0 h-full overflow-y-scroll scroll-smooth">
            <div><ContactList/></div>
        </div>
    </Fragment>
}

export default Dashboard;