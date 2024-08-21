import React from 'react';
import Slider from './Slider';
import { useLocation, Outlet } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const noSliderPaths = ['/', '/login', '/user-details', '/terms-conditions'];
    return (
        <div className="flex bg-gray-100">
            {!noSliderPaths.includes(location.pathname) && <Slider />}
            <div className="ml-72 flex-1 bg-gray-100">
                {<Outlet />}
            </div>
        </div>
    );
};

export default Layout;



// import React, { useState } from 'react';
// import Slider from './Slider';
// import { useLocation, Outlet } from 'react-router-dom';

// const Layout = () => {
//     const [isSliderVisible, setSliderVisible] = useState(true);
//     const location = useLocation();
//     const noSliderPaths = ['/', '/login', '/user-details', '/terms-conditions'];

//     const toggleSlider = () => {
//         setSliderVisible(prevState => !prevState);
//     };

//     // Only show Slider if not in paths where it's hidden and it's visible
//     const shouldShowSlider = !noSliderPaths.includes(location.pathname) && isSliderVisible;

//     return (
//         <div className="flex bg-gray-100">
//             {shouldShowSlider && (
//                 <div className="relative w-72 bg-white shadow-md">
//                     <button
//                         className="absolute top-2 right-2 text-gray-500 text-2xl"
//                         onClick={toggleSlider}
//                     >
//                         button button button {/* Cross icon */}
//                     </button>
//                     <Slider />
//                 </div>
//             )}
//             <div className={`transition-all duration-300 ${shouldShowSlider ? 'ml-72' : 'ml-0'} flex-1`}>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Layout;
