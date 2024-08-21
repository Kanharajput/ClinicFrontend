import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import dashboardImg from "../assests/img/slider/dashboard.png"
import diagnoseImg from "../assests/img/slider/diagnose.png"
import caseImg from "../assests/img/slider/case_sim.png"
import pharmaImg from "../assests/img/slider/pharma.png"
import researchImg from "../assests/img/slider/research.png"
import doctorImg from "../assests/img/slider/doctor.png"
import expertImg from "../assests/img/slider/expert.png"


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
            fetch(`http://localhost:8000/get-full-name/${user_id}`, {
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
        <div className="bg-gray-100">
            <div className="fixed top-4 left-4 h-[95%] bg-white w-72 p-8 flex flex-col space-y-1 shadow-lg rounded-xl">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">NeuroGen</span>
                </div>
                <hr />
                <nav className="pt-4 flex-1">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <img src={dashboardImg} className="mr-2" />Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/differential"
                                className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <img src={diagnoseImg} className="mr-2" />Diagnose
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/case-simulation-dashboard"
                                className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
                                style={({ isActive }) =>
                                    isActive
                                        ? { backgroundColor: 'rgb(59 130 246)', color: 'white' }
                                        : undefined
                                }
                            >
                                <img src={caseImg} className="mr-2" />Clinical Case Simulation
                            </NavLink>
                        </li>

                        {/* later covert this into NavLink */}
                        <li><a href="#" className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><img src={pharmaImg} className="mr-2" />PharmacEASY</a></li>
                        <li><a href="#" className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><img src={researchImg} className="mr-2" />Research</a></li>
                        <li><a href="#" className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><img src={doctorImg} className="mr-2" />Doctor's Lounge</a></li>
                        <li><a href="#" className="flex items-center text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><img src={expertImg} className="mr-2" />Expert Advice</a></li>
                    </ul>
                </nav>
                <hr />
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
