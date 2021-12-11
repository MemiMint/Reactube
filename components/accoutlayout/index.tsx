import React, { FunctionComponent } from "react";
import { AccountSideBar } from "../accountsidebar"

export const AccountLayout: FunctionComponent = ({ children }): JSX.Element => {
    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <AccountSideBar />
            <div className="w-full h-full p-14">
                { children }
            </div>
        </div>
    )
}