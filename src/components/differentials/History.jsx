import React, { useState } from 'react';
import scoreImg from "../../assests/img/dashboard/score.png";


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

            {/* <!-- Form --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4">History of Present Illness</h1>
                <hr/>
                <p className="text-gray-600 my-4">Enter information related to your case</p>
                <div className="bg-blue-100 py-2 px-4 rounded-lg mb-6 border border-blue-400">
                    <div className="flex justify-between">
                        <div className='flex items-center'>
                            <img src={scoreImg} alt="info-icon" className='mr-2'/>
                            <p className='text-black text-sm'><strong>Quick DDX: </strong> Don't have time to fill out all of the fields? Describe some of the key information instead.</p>  
                        </div>
                        <div className='flex align-center bg-white border border-blue-700 py-1 px-2'>
                            <img src={scoreImg} alt="message-icon"></img>
                            <a href="/quick_ddsx" className="text-blue-500 text-sm font-bold">Try quick DDX</a> 
                        </div>
                    </div>
                </div>

                <form action="#">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="chief-complaint">Chief Complaint(s) <span className='text-red-500'>*</span></label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                            type="text" id="chief-complaint" placeholder="Example : Headache with morning rise Nausea & Vomiting"
                            value={chiefComplaint}
                            onChange={(e) => setChiefComplaint(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="duration">Duration <span className='text-red-500'>*</span></label>
                        <div className='flex'>
                            <input
                                className="basis-1/2 mr-4 p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                                type="number" id="duration" placeholder="Enter Number"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)} />
                                <select className="basis-1/2 p-3 border border-gray-300 text-gray-500 rounded-lg focus:border-blue-400"
                                value={selectedPeriod} onChange={handleSelectChange}>
                                <option>Days</option>
                                <option>Weeks</option>
                                <option>Months</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" for="additional-history">Associated Symptoms &
                            Additional History</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                            id="additional-history" rows="4"
                            placeholder="Example : 2 Attacks of Tonic Clonic Jerky Involuntary Movements with Post Attack Unconsciousness & Dizziness."
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            ></textarea>
                    </div>
                    <div className="text-right">
                        <button className="bg-blue-500 text-white rounded-md hover:bg-blue-700 py-2 px-4" onClick={handleContinue}>Continue</button>
                    </div>
                </form>
            </div>
            <div className='pl-4'>
                <p className='text-gray-500'>This is intended for educational purposes and not for medical diagnosis or treatment.</p>
            </div>
        </div>
    </div>
    </div>
    );
};

export default History;
