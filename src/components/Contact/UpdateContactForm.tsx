import React, { Fragment, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { ContactsState, contactActions } from "../../store";

const UpdateContactForm = () => {
    const firstName = useRef<HTMLInputElement>();
    const lastName = useRef<HTMLInputElement>();
    const [status, setStatus] = useState();
    const dispatch = useDispatch();
    const params = useParams();
    const id = parseInt(params.contactId);
    const contacts = useSelector((state: ContactsState) => state.contacts)
    const navigate = useNavigate()
    useEffect(() => {
        const reqdContact = contacts.filter(d => d.id === id);
        firstName.current.value = reqdContact[0].firstName;
        lastName.current.value = reqdContact[0].lastName;
    }, [contacts,id])
    const onChangeValue = (e) => {
        setStatus(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(contactActions.updateContact({
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            id: id,
            status
        }))
        navigate("/");
    }
    return <Fragment>
        <div className="w-5/6 fixed right-0 h-full overflow-y-scroll scroll-smooth">
            <form className="flex flex-col p-10" onSubmit={submitHandler}>
                <label htmlFor="firstName" className="py-5">First Name</label>
                <input type="text" id="firstName" name="firstName" className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-2/4" ref={firstName}/>
                <label htmlFor="lastName" className="py-5">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-2/4" ref={lastName} />
                <div className="py-5" onChange={onChangeValue}>
                    <input type="radio" id="status" name="status" value="active" className="mr-2"/>
                    <label htmlFor="status" className="mr-10">Active</label>
                    <input type="radio" id="status" name="status" value="inactive" className="mr-2"/>
                    <label htmlFor="status">Inactive</label>
                </div>
                <button className="bg-blue-500 w-40 rounded-sm px-5 py-2 text-white" >Submit</button>
            </form>
        </div>
    </Fragment>
}

export default UpdateContactForm;