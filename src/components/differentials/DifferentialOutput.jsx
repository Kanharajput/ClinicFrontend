// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';


const DifferentialOutput = ({ completeQuery, backGenerator }) => {

    const [loading, setLoading] = useState(false);
    const [normalCauses, setNormalCauses] = useState("");
    const [mustNotMiss, setMustNotMiss] = useState("");
    const [rareDiagnoses, setRareDiagnoses] = useState("");

    const handleBack = () => {
        // go back to generator
        backGenerator()
    }

    useEffect(() => {
        console.log(completeQuery)
        // start the loader
        setLoading(true);
    
        // Submit the formData to the API
        fetch(`http://localhost:8000/differential-diagonise?question=${completeQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                // stop the loader
                setLoading(false);
                // navigate('/differential-output', { state: { data: response_data } });
                const response = data["response"]
                setNormalCauses(response["Normal Causes"])
                setMustNotMiss(response["Must Not Miss"])
                setRareDiagnoses(response["Rare Diagnoses"])
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* <!-- Main Content --> */}
            <div className="flex-1 px-6 space-y-8">
                <div className='flex justify-end'>
                    <h1 className="text-blue-500 font-bold" onClick={handleBack}>Back to Generator</h1>
                </div>
                {/* <!-- Content --> */}
                <div className=' bg-white p-6 rounded-lg shadow-md'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* <!-- Diagnoses --> */}
                        <div className="p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3">Diagnoses</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Here are the possible diagnoses for the case
                                </p>
                                <div className="mt-4 differential-output text-gray-700">
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (normalCauses &&
                                        <div dangerouslySetInnerHTML={{ __html: normalCauses }} />
                                )}
                                </div>
                        </div>

                        {/* <!-- Must Not Miss --> */}
                        <div className="p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3">Must Not Miss</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Essential conditions that must be ruled out or addressed urgently
                                </p>
                                <div className="mt-4 differential-output text-gray-700">
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (mustNotMiss &&
                                    <div dangerouslySetInnerHTML={{ __html: mustNotMiss }} />
                                )}
                                </div>
                        </div>

                        {/* <!-- Rare Diagnoses --> */}
                        <div className="p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3">Rare Diagnoses</h3>
                            <hr />
                                <p className="mt-4 text-gray-600">
                                    Here are possible rare diagnoses for the case
                                </p>
                                <div className="mt-4 differential-output text-gray-700">
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (rareDiagnoses &&
                                    <div dangerouslySetInnerHTML={{ __html: rareDiagnoses }} />
                                )}
                                </div>
                        </div>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="mt-6 flex items-center justify-end">
                        <div className="flex space-x-4">
                            <button className="text-blue-500 font-medium border border-blue-500 bg-blue-100 px-4 py-2 rounded-md hover:text-white hover:bg-blue-500">Expert Insights</button>
                            <button className="text-blue-500 font-medium border border-blue-500 bg-blue-100 px-4 py-2 rounded-md hover:text-white hover:bg-blue-500">Share it with a Friend</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white">Treatment Plan</button>
                        </div>
                    </div>
                </div>
                <div className="flex text-gray-500 text-sm space-x-2">
                    <p>Did you like the quality of this search?</p>
                    <img src="" alt='like'></img>
                    <img src="" alt='dis-like'></img>
                </div>
            </div>
        </div>
    );
};



export default DifferentialOutput;