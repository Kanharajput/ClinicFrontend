import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const [location, setLocation] = useState({});
    const [userName, setUserName] = useState("");

    // location api
    useEffect(() => {
        if (localStorage.getItem("location") === '{}' || localStorage.getItem("location") === null) {
            axios.get('https://ipapi.co/json/')
                .then((response) => {
                    let data = response.data;
                    localStorage.setItem('location', JSON.stringify({
                        countryName: data.country_name,
                        countryCapital: data.country_capital
                    }));
                    setLocation({
                        countryName: data.country_name,
                        countryCapital: data.country_capital
                    });
                }).catch((error) => {
                    console.log(error);
                });
        }
        else
            setLocation(JSON.parse(localStorage.getItem("location")));
    }, [])

    // get the user full name
    useEffect(() => {
        if (localStorage.getItem("username") === null || localStorage.getItem("username") === "") {
            const user_id = localStorage.getItem("user_id")
            console.log(user_id)
            fetch(`http://3.110.175.181/get-full-name/${user_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(
                    response => {
                        if (response.status == 200) {
                            return response.json()
                        }
                    }
                )
                .then(data => {
                    localStorage.setItem("username", data.full_name)
                    setUserName(data.full_name)
                })
        }
        else {
            const username = localStorage.getItem("username")
            setUserName(username)
        }
    }, [])

    return (
        <div className='bg-gray-100'>
            <div className="fixed top-0 left-0 h-screen bg-white w-72 p-8 flex flex-col space-y-4 shadow-md">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">NeuroLAB AI</span>
                </div>
                <hr />
                <nav className="mt-6 flex-1">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <span className="mr-2">🏠</span>Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/differential"
                                className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <span className="mr-2">🔬</span>Diagnose
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/case-simulation-dashboard"
                                className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <span className="mr-2">💻</span>Clinical Case Simulation
                            </NavLink>
                        </li>

                        {/* later covert this into NavLink */}
                        <li><a href="#" className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"><span className="mr-2">💊</span>PharmacEASY</a></li>
                        <li><a href="#" className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"><span className="mr-2">🔍</span>Research</a></li>
                        <li><a href="#" className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"><span className="mr-2">🛋️</span>Doctor's Lounge</a></li>
                        <li><a href="#" className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"><span className="mr-2">📝</span>Contribute</a></li>
                        <li><a href="#" className="flex items-center text-black py-2 px-4 rounded hover:bg-blue-500"><span className="mr-2">💬</span>Expert Advice</a></li>
                    </ul>
                </nav>
                <div className="mt-auto flex items-center space-x-2">
                    <div>
                        <p className="font-semibold">Dr. {userName}</p>
                        <p className="text-sm text-gray-500">{location.countryCapital}, {location.countryName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
