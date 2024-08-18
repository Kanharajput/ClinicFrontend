import React, { useState } from 'react';

const Objective = ({onNext, onSubmit }) => {
    const [vitals, setVitals] = useState('');
    const [labResults, setLabResults] = useState('');
    const [examFinding, setExamFinding] = useState('');

    const handleSubmit = () => {
        // first create the full data like other pages
        // make a query to pass it to the api
        const objective = `Vitals: ${vitals}, 
        Pertinent Labs and Imaging Results: ${labResults},
        Notable Exam Findings: ${examFinding},`

        // pass it to the differential main page
        onNext(objective);
        onSubmit();
    };

    return (
        <div className="bg-gray-100">
            <div className="flex min-h-screen">

                {/* <!-- Sidebar --> */}
                <div className="bg-white w-64 p-6 flex flex-col space-y-4 shadow-lg">
                    {/* <!-- Logo and title --> */}
                    <div className="flex items-center space-x-2">
                        <img src="/mnt/data/Body (2).png" alt="Logo" className="w-8 h-8" />
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
                        <h1 className="text-2xl font-bold">3. Objective</h1>
                    </div>

                    {/* <!-- Form --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form action="#">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="vitals">Vitals*</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    type="text" id="vitals" placeholder="Temp : 99.7, RR : 20, HR : 98, BP : 140/80" 
                                    value={vitals}
                                    onChange={(e) => setVitals(e.target.value)}
                                    />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="labs">Pertinent Labs and Imaging Results</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    id="labs" rows="3" placeholder="Enter Here"
                                    value={labResults}
                                    onChange={(e) => setLabResults(e.target.value)}
                                    ></textarea>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="exam-findings">Notable Exam Findings</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    id="exam-findings" rows="3"
                                    placeholder="Enter the System-Wise - Inspectory, Palpatory, Percussion & Auscultatory Findings."
                                    value={examFinding}
                                    onChange={(e) => setExamFinding(e.target.value)}
                                    ></textarea>
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="flex justify-between">
                                <button
                                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 focus:ring focus:ring-gray-200">Back</button>
                                <button
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 focus:ring focus:ring-blue-200" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Objective;
