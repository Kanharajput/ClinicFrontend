import React from 'react';
import Slider from './Slider';
import { useLocation, Outlet } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const noSliderPaths = ['/', '/login', '/user-details', '/terms-conditions'];
    return (
        <div className="flex">
            {!noSliderPaths.includes(location.pathname) && <Slider />}
            <div className="flex-1">
                {<Outlet />}
            </div>
        </div>
    );
};

export default Layout;
