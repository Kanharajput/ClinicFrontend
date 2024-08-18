import React from 'react';
import Slider from './Slider';

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Slider />
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default Layout;
