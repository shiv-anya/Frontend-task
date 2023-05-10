import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import { contactActions } from "../../store";
const ContactCard = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const deleteHandler = (e) => {
        console.log(params.contactId)
        dispatch(contactActions.deleteContact(props.id));
        navigate("/dashboard");
    }
    return <div className="bg-white mt-10 shadow-md cursor-pointer flex flex-col rounded-lg">
        <div className="bg-[url('https://source.unsplash.com/random/?person')] h-56 w-56 bg-no-repeat bg-center bg-cover rounded-t-lg"></div>
        <p className="text-center mt-2 font-bold">{`${props.firstName + " " + props.lastName}`}</p>
        <div className="flex justify-evenly mt-2">
        <Link to={`/update-contact/${props.id}`} className="px-5 py-2 bg-lime-400 rounded-sm text-white">Edit</Link>
        <button className="px-5 py-2 bg-red-600 rounded-sm text-white" onClick={deleteHandler}>Delete</button>
        </div>
        <button className="bg-blue-500 mt-5 text-white py-2 rounded-b-lg"><Link to={`/info/${props.id}`}>Contact Details</Link></button>
    </div>
}

export default ContactCard;