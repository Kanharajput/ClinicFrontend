import React from 'react';
import Slider from './Slider';

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Slider />
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default Layout;
