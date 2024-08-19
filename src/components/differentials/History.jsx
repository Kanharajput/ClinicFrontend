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
                        <a href="/quick_ddsx" className="text-blue-600 ml-auto underline underline-offset-4 hover:underline"> Try quick DDX</a>
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
                    <div className="flex text-right">
                        <button className="bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-700 focus:ring focus:ring-blue-200 p-3" onClick={handleContinue}>Continue</button>
                    </div>
                </form>
            </div>

        </div>
            </div>
        </div>
    );
};

export default History;
