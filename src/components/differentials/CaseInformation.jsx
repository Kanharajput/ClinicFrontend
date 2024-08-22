import React, { useState } from 'react';

const CaseInformation = ({ onNext, onBack }) => {
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

    // go one step back
    const handleBack = () => {
        onBack()
    }

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
                <div className="flex-1 space-y-8">

                    {/* <!-- Form --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-4">Simulated Case Information</h1>
                        <hr />
                        <form action="#">
                            <div className="my-4">
                                <label className="block text-gray-700 font-bold mb-2" for="age">Age<span className='text-red-500'>*</span></label>
                                <input
                                    className="w-2/4 p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                                    type="number" id="age" placeholder="Enter Number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="sex">Sex<span className='text-red-500'>*</span></label>
                                <select
                                    className="w-2/4 p-3 border border-gray-300 rounded-lg text-gray-500 focus:border-blue-400"
                                    id="sex"
                                    value={selectedSex}
                                    onChange={handleSelectedSex}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="pmhx">PMHx</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                                    type="text" id="pmhx"
                                    placeholder="Past Medical History, Example: Lung Ca, HTN, Tb, CAD, Asthma..." 
                                    value={pmhx}
                                    onChange={(e) => setPmhx(e.target.value)} 
                                    />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="meds">Meds</label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                                    type="text" id="meds" placeholder="Example: Telmisartan 40" 
                                    value={meds}
                                    onChange={(e) => setMeds(e.target.value)} 
                                    />
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="flex justify-end space-x-4">
                                <button
                                    className="bg-white text-blue-700 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white py-2 px-4" onClick={handleBack}>Back</button>
                                <button
                                    className="bg-blue-500 text-white rounded-lg hover:border hover:border-blue-500 hover:bg-white hover:text-blue-700 py-2 px-4" onClick={handleContinue}>Continue</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaseInformation;
