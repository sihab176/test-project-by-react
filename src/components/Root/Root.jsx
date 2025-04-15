import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Tooltip from '../Tooltip/Tooltip';

const Root = () => {
    return (
        <div>
            <Navbar/>
        <Outlet></Outlet>
        <Tooltip/>
        </div>
    );
};

export default Root;