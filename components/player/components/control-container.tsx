import React, { FunctionComponent } from "react";

const ControlContainer: FunctionComponent = ({ children }): JSX.Element => {
    return (
        <div className="w-full items-center justify-between h-auto bg-black text-white p-2 hidden group-hover:flex" onClick={(e) => e.stopPropagation()} >
            {children}
        </div>
    )
}

export default ControlContainer;