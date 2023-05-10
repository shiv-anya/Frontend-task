import React, { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
type PropsWithChildren = { children?: ReactNode };

const Layout = (props: PropsWithChildren): JSX.Element => {
    return <Fragment>
        <div>   
            <Header />
            <Sidebar />
        </div>
        <div>
            {props.children}
        </div>
    </Fragment>
}

export default Layout;