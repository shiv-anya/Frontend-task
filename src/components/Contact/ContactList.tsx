import React, { Fragment} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ContactsState } from "../../store";
const ContactList = () => {
    const contacts = useSelector((state: ContactsState) => state.contacts);
    return <Fragment>   
        <div className="flex flex-col w-4/5 ml-auto mr-auto mt-5 mb-28">
            <Link to="/add-contact"><button className="bg-blue-500 w-40 rounded-sm px-8 py-2 text-white">Add Contact</button></Link>
            <div className="flex flex-wrap  justify-between">
                {contacts.length === 0 && <p className="my-5">No Contacts. Add contacts to see results.</p>}
                {contacts.length > 0 && contacts.map(d => <ContactCard firstName={d.firstName} lastName={d.lastName} key={d.id} id={d.id} status={d.status} />)}
            </div>
        </div>
    </Fragment>
}

export default ContactList;