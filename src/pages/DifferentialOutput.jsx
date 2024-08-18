import { useLocation } from 'react-router-dom';


const DifferentialOutput = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const response = data["response"]
    const normalCauses = response["Normal Causes"]
    const mustNotMiss = response["Must Not Miss"]
    const rareDiagnoses = response["Rare Diagnoses"]

    return (
        <div className="bg-gray-100">
            <div className="flex flex-col md:flex-row h-screen">
                {/* <!-- Sidebar --> */}
                <div className="bg-white w-64 p-6 flex flex-col space-y-4 shadow-md">
                    {/* <!-- Logo and title --> */}
                    <div className="flex items-center space-x-2">
                        <img src="Group 39512.png" alt="Logo" className="w-8 h-8" />
                            <span className="text-xl font-bold">NeuroLAB AI</span>
                    </div>
                    <hr />
                        {/* <!-- Navigation --> */}
                        <nav className="mt-6 flex-1">
                            <ul className="space-y-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <li><a href="#" className="flex items-center text-white-500 font-bold"><span
                                        className="mr-2">🏠</span>Dashboard</a>
                                    </li>
                                </button>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🔬</span>Diagnose</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💻</span>Clinical Case Simulation</a>
                                </li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💊</span>PharmacEASY</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🔍</span>Research</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🛋️</span>Doctor's Lounge</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">📝</span>Contribute</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💬</span>Expert Advice</a></li>
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
                <div className="flex-1 p-4">
                    {/* <!-- Header --> */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Guiding You to the Right Diagnosis</h2>
                        {/* <div className="flex space-x-2 mt-2">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <span className="ml-2 text-sm">History of Present Illness</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <span className="ml-2 text-sm">Simulated Case Information</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <span className="ml-2 text-sm">Examination & Investigatory Findings</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <span className="ml-2 text-sm">Diagnosis Preview</span>
                            </div>
                        </div> */}
                    </div>

                    {/* <!-- Content --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* <!-- Diagnoses --> */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-3">Diagnoses</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Here are the possible diagnoses for the case:
                                </p>
                                <div className="mt-4">
                                    <p className="text-gray-500 text-sm mt-1">{normalCauses}</p>
                                </div>
                        </div>

                        {/* <!-- Must Not Miss --> */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-3">Must Not Miss</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Essential conditions that must be ruled out or addressed urgently.
                                </p>
                                <div className="mt-4">
                                    <p className="text-gray-500 text-sm mt-1">{mustNotMiss}</p>
                                </div>
                        </div>

                        {/* <!-- Rare Diagnoses --> */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-3">Rare Diagnoses</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Here are possible rare diagnoses for the case:
                                </p>
                                <div className="mt-4">
                                <div className="mt-4">
                                    <p className="text-gray-500 text-sm mt-1">{rareDiagnoses}</p>
                                </div>
                                </div>
                        </div>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-gray-500 text-sm">Did you like the quality of this search?</div>
                        <div className="flex space-x-4">
                            <button className="text-blue-500 font-semibold">Expert Insights</button>
                            <button className="text-blue-500 font-semibold">Share it with a Friend</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Treatment Plan</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};



export default DifferentialOutput;