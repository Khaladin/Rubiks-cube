import React, { useState } from 'react';

import Cube from './Cube';
import SideSelector from './SideSelector';

const CubeContainer = () => {
    const [sideShowing, setSideShowing] = useState('show-back');

    return(
        <div className='cube-container'>
            <Cube sideShowing={sideShowing} />
            <SideSelector setSideShowing={setSideShowing} />

        </div>
    )
}

export default CubeContainer;
