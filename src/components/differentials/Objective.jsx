import React, { useState } from 'react';
import scoreImg from "../../assests/img/dashboard/score.png";


const Objective = ({onNext, onBack }) => {
    const [vitals, setVitals] = useState('');
    const [imageUpload, setImageUpload] = useState('');
    const [examFinding, setExamFinding] = useState('');
    const [specificInfo, setSpecificInfo] = useState('');

    const handleSubmit = () => {
        // first create the full data like other pages
        // make a query to pass it to the api
        const objective = `Vitals: ${vitals}, 
        Any Other Specific Information: ${specificInfo},
        Notable Exam Findings: ${examFinding},`

        // pass it to the differential main page
        onNext(objective);
    };

    // go one step back
    const handleBack = () => {
        onBack()
    }


    return (
        <div className="bg-gray-100">
            <div className="flex min-h-screen">

                {/* <!-- Main Content --> */}
                <div className="flex-1 space-y-8">

                    {/* <!-- Form --> */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-4">Objective</h1>
                        <hr/>
                        <form action="#">
                            <div className="my-4">
                                <label className="block text-gray-700 font-bold mb-2" for="vitals">Vitals<span className='text-red-500'>*</span></label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    type="text" id="vitals" placeholder="Temp : 99.7, RR : 20, HR : 98, BP : 140/80" 
                                    value={vitals}
                                    onChange={(e) => setVitals(e.target.value)}
                                    />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="exam-findings">Notable Exam Findings</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    id="exam-findings" rows="5"
                                    placeholder="Enter the System-Wise - Inspectory, Palpatory, Percussion & Auscultatory Findings."
                                    value={examFinding}
                                    onChange={(e) => setExamFinding(e.target.value)}
                                    ></textarea>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" for="additional-history">Any Other Specific Information</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400"
                                    id="additional-history" rows="4" placeholder='Enter Here'
                                    value={specificInfo}
                                    onChange={(e) => setSpecificInfo(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" for="imageUpload">Add Lab & Imaging Files</label>
                                <label className="block text-sm text-gray-500 mb-3" for="imageUpload">Image upload / Pdf upload</label>
                                <div class="flex items-center justify-center">
                                    <label class="w-full flex justify-center py-2 bg-gray-200 text-black rounded-md cursor-pointer ring ring-offset-4 ring-gray-200">
                                        <span class="text-gray-700 mr-2">Upload Here</span>
                                        <img src={scoreImg} alt="icon" />
                                        <input type="file" id="imageUpload" class="hidden" onChange={(e) => setImageUpload(e.target.files[0])} />
                                    </label>
                                </div>

                            </div>


                            {/* <!-- Buttons --> */}
                            <div className="flex justify-end space-x-4 mt-8">
                                <button
                                    className="bg-white text-blue-700 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white py-2 px-4" onClick={handleBack}>Back</button>
                                <button
                                    className="bg-blue-500 text-white rounded-lg hover:border hover:border-blue-500 hover:bg-white hover:text-blue-700 py-2 px-4" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Objective;
