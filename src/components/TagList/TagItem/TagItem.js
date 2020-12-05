import React, { Fragment } from "react";
import "../../../tailwind.output.css";

const TagItem = (props) => {
	return (
        <p className="text-sm font-light px-2 m-1 rounded bg-gray-400">
            {props.name}
        </p>
    );
};

export default TagItem;