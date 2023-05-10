import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import { ContactsState } from "../../store";

const ContactInfo = () => {
    const params = useParams();
    const id = params.contactId;
    const contacts = useSelector((state: ContactsState) => state.contacts)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        const reqdContact = contacts.filter(d => d.id === parseInt(id));
        setFirstName(reqdContact[0].firstName);
        setLastName(reqdContact[0].lastName);
        setStatus(reqdContact[0].status);
    }, [id, contacts])
    return <Fragment>
        <div className="ml-56">
            <h1 className="text-6xl text-blue-500">Personal Info</h1>
            <div  className="bg-[url('https://source.unsplash.com/random/?person')] h-56 w-56 bg-no-repeat bg-center bg-cover my-5 rounded-l-full rounded-r-full"></div>
            <div>
                <p className="text-4xl my-2">{firstName}</p>
                <p className="text-4xl my-2">{lastName}</p>
                <p className="text-4xl my-2">{status}</p>
            </div>
        </div>
    </Fragment>
}

export default ContactInfo;