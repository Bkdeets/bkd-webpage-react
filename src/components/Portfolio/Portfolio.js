import React, { Fragment, useEffect, useState } from 'react';
import '../../tailwind.output.css';

import Pinpoint from '../Pinpoint/Pinpoint';
import Quant from '../Quant/Quant';
import Current from '../Current/Current';
import Education from '../Education/Education';
import Interests from '../Interests/Interests';
import MenuItem from '../MenuItem/MenuItem';

const Portfolio = (props) => {
    const ITEM_MAP = {
        "nCino" : <Current></Current>,
        "Pinpoint Surf": <Pinpoint></Pinpoint>,
        "Quantitative Investing": <Quant></Quant>,
        "Education": <Education></Education>,
        "Interests": <Interests></Interests>
    }
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemName, setActiveItemName] = useState("");
    const handleMenuItemClick = (name) => {
        setActiveItem(ITEM_MAP[name]);
        setActiveItemName(name);
    }
    

    useEffect(() => {
        props.handleMenuItemChange(activeItem);
    }, [activeItem]);
    return (
        <div className="flex px-16 pt-4 text-left mx-auto flex-wrap sm-max:px-2 sm-max:pt-0">
            <MenuItem isActive={"nCino" == activeItemName} name="nCino" hoverColor="bg-yellow-200" handleMenuItemClick={handleMenuItemClick}></MenuItem>
            <MenuItem isActive={"Pinpoint Surf" == activeItemName} name="Pinpoint Surf" hoverColor="bg-blue-200" handleMenuItemClick={handleMenuItemClick}></MenuItem>
            <MenuItem isActive={"Quantitative Investing" == activeItemName} name="Quantitative Investing" hoverColor="bg-teal-200" handleMenuItemClick={handleMenuItemClick}></MenuItem>
            <MenuItem isActive={"Education" == activeItemName} name="Education" hoverColor="bg-teal-400" handleMenuItemClick={handleMenuItemClick}></MenuItem>
            <MenuItem isActive={"Interests" == activeItemName} name="Interests" hoverColor="bg-purple-200" handleMenuItemClick={handleMenuItemClick}></MenuItem>
        </div>
    );
}

export default Portfolio;