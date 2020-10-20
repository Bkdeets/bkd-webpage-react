import React, { Fragment } from 'react';
import '../../tailwind.output.css';

import Pinpoint from '../Pinpoint/Pinpoint';
import Quant from '../Quant/Quant';
import Current from '../Current/Current';
import Education from '../Education/Education';
import Interests from '../Interests/Interests';

const Portfolio = () => {
    return (
        <Fragment>
            <Pinpoint />
            <Quant />
            <Current />
            <Education />
            <Interests />
        </Fragment>
    );
}

export default Portfolio;