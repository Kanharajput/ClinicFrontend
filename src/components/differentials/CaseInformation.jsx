import React, { useState } from 'react';

const CaseInformation = ({ onNext }) => {
    const [age, setAge] = useState('');
    const [selectedSex, setSelectedSex] = useState('Male');
    const [pmhx, setPmhx] = useState('');
    const [meds, setMeds] = useState('');

    const handleSelectedSex = (event) => {
        setSelectedSex(event.target.value);
    };

    const handleContinue = () => {
        // make a query to pass it to the api
        const caseInformation = `Age: ${age}, 
        Sex: ${selectedSex},
        PMHX: ${pmhx},
        Meds: ${meds},`

        // pass it to the differential main page
        onNext(caseInformation);
    };

    return (
        // <div>
        //     <h2>Page 2</h2>
        //     <input
        //         type="text"
        //         value={inputData}
        //         onChange={(e) => setInputData(e.target.value)}
        //         placeholder="Enter data for Page 2"
        //     />
        //     <button onClick={handleContinue}>Continue</button>
        // </div>
        <div className="bg-gray-100">
            <div className="flex min-h-screen">
                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8 space-y-8">

                    {/* <!-- Header --> */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Guiding You to the Right Diagnosis</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">2. Simulated Case Information</h1>
                    </div>

                    {/* <!-- Form --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form action="#">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="age">Age*</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    type="number" id="age" placeholder="Enter Number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="sex">Sex*</label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    id="sex"
                                    value={selectedSex}
                                    onChange={handleSelectedSex}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="pmhx">PMHX</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    type="text" id="pmhx"
                                    placeholder="Past Medical History, Example: Lung Ca, HTN, Tb, CAD, Asthma..." 
                                    value={pmhx}
                                    onChange={(e) => setPmhx(e.target.value)} 
                                    />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="meds">Meds</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    type="text" id="meds" placeholder="Example: Telmisartan 40" 
                                    value={meds}
                                    onChange={(e) => setMeds(e.target.value)} 
                                    />
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="flex justify-between">
                                <button
                                    className="bg-gray-200 text-gray-700 p-3 rounded-lg font-bold hover:bg-gray-300 focus:ring focus:ring-gray-200">Back</button>
                                <button
                                    className="bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-700 focus:ring focus:ring-blue-200" onClick={handleContinue}>Continue</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaseInformation;
