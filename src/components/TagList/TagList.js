import React, { Fragment } from "react";
import "../../tailwind.output.css";
import TagItem from './TagItem/TagItem';

const TagList = (props) => {
	return (
        <div className="flex flex-center flex-wrap mx-auto mb-4 px-2">
            {props.items.map((item) => <TagItem name={item}></TagItem>)}
        </div>
    );
};

export default TagList;