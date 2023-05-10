import React, { Fragment } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = () => {
    return <Fragment>   
        <div className="flex flex-col w-4/5 ml-auto mr-auto mt-5 mb-28">
            <Link to="/add-contact"><button className="bg-blue-500 w-40 rounded-sm px-8 py-2 text-white">Add Contact</button></Link>
            <div className="flex flex-wrap  justify-between">
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </div>
        </div>
    </Fragment>
}

export default ContactList;