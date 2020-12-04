import React, { Fragment, useState } from "react";
import "../../tailwind.output.css";

const MenuItem = (props) => {
	return (
		<button
			className={
                `rounded-full flex-1 
                sm-max:w-auto sm-max:text-xs sm-max:rounded
                hover:${props.hoverColor} 
                border border-black mt-4 mx-2 p-2 sm-max:mx-1 sm-max:p-1
                ${props.isActive ? props.hoverColor : ""}
                `
            }
			onClick={() => props.handleMenuItemClick(props.name)}
		>
			{props.name}
		</button>
	);
};

export default MenuItem;
