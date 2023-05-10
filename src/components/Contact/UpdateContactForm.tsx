import React, { Fragment } from "react";

const UpdateContactForm = () => {
    return <Fragment>
        <div className="w-5/6 fixed right-0 h-full overflow-y-scroll scroll-smooth">
            <form className="flex flex-col p-10">
                <label htmlFor="firstName" className="py-5">First Name</label>
                <input type="text" id="firstName" name="firstName" className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-2/4"/>
                <label htmlFor="lastName" className="py-5">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-2/4"/>
                <div className="py-5">
                    <input type="radio" id="status" name="status" value="active" className="mr-2"/>
                    <label htmlFor="status" className="mr-10">Active</label>
                    <input type="radio" id="status" name="status" value="inactive" className="mr-2"/>
                    <label htmlFor="status">Inactive</label>
                </div>
                <button className="bg-blue-500 w-40 rounded-sm px-5 py-2 text-white">Submit</button>
            </form>
        </div>
    </Fragment>
}

export default UpdateContactForm;