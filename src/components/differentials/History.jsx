import React, { useState } from 'react';

const History = ({ onNext }) => {
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [duration, setDuration] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('Days');

    const handleSelectChange = (event) => {
        setSelectedPeriod(event.target.value);
    };

    const handleContinue = () => {
        // make a query to pass it to the api
        const historyOfIllness = `Chief Complaints: ${chiefComplaint}, 
        Duration: ${duration} ${selectedPeriod},
        Associated Symptoms: ${symptoms},`
       
        // pass it to the differential main page
        onNext(historyOfIllness);
        
    };

    return (

        <div className="bg-gray-100">
            <div className="flex min-h-screen">

        {/* <!-- Sidebar --> */}
        <div className="bg-white w-64 p-6 flex flex-col space-y-4 shadow-lg">
            {/* <!-- Logo and title --> */}
            <div className="flex items-center space-x-2">
                <img src="/mnt/data/Body.png" alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">NeuroLAB AI</span>
            </div>
            <hr />
            {/* <!-- Navigation --> */}
            <nav className="mt-6 flex-1">
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-blue-600 bg-blue-100 rounded-lg">
                            <span>🏠</span> <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-blue-600 bg-blue-100 rounded-lg">
                            <span>🔬</span> <span>Diagnose</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>💻</span> <span>Clinical Case Simulation</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>💊</span> <span>PharmacEASY</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>🔍</span> <span>Research</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>🛋️</span> <span>Doctor's Lounge</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>📝</span> <span>Contribute</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 py-2 px-4 text-gray-600">
                            <span>💬</span> <span>Expert Advice</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- User profile --> */}
            <div className="mt-auto flex items-center space-x-2">
                <img src="Avatar.png" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">Dr. Shiv</p>
                    <p className="text-sm text-gray-500">New Delhi, India</p>
                </div>
            </div>
        </div>

        {/* <!-- Main Content --> */}
        <div className="flex-1 p-8 space-y-8">

            {/* <!-- Header --> */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Guiding You to the Right Diagnosis</h2>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">1. History of Present Illness</h1>
            </div>

            {/* <!-- Form --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">Enter information related to your case</p>

                <div className="bg-blue-100 p-4 rounded-lg mb-6">
                    <p className="text-blue-700 text-sm flex items-center">
                        <span className="material-icons mr-2">info</span>
                        Quick DDX: Don't have time to fill out all of the fields? Describe some of the key information
                        instead.
                        <a href="#" className="text-blue-600 ml-auto">Try quick DDX</a>
                    </p>
                </div>

                <form action="#">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="chief-complaint">Chief Complaint(s)
                            *</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                            type="text" id="chief-complaint" placeholder="Example : Headache with morning rise Nausea & Vomiting"
                            value={chiefComplaint}
                            onChange={(e) => setChiefComplaint(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="duration">Duration *</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                            type="number" id="duration" placeholder="Enter Number"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)} />
                        <select
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={selectedPeriod} onChange={handleSelectChange}>
                            <option>Days</option>
                            <option>Weeks</option>
                            <option>Months</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" for="additional-history">Associated Symptoms &
                            Additional History</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                            id="additional-history" rows="4"
                            placeholder="Example : 2 Attacks of Tonic Clonic Jerky Involuntary Movements with Post Attack Unconsciousness & Dizziness."
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            ></textarea>
                    </div>

                    <div className="text-right">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 focus:ring focus:ring-blue-200" onClick={handleContinue}>Continue</button>
                    </div>
                </form>
            </div>

        </div>
            </div>
        </div>
    );
};

export default History;
