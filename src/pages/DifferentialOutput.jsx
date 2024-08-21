// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';


const DifferentialOutput = ({completeQuery}) => {

    const [loading, setLoading] = useState(false);
    const [normalCauses, setNormalCauses] = useState("");
    const [mustNotMiss, setMustNotMiss] = useState("");
    const [rareDiagnoses, setRareDiagnoses] = useState("");
    // const normalCauses = response["Normal Causes"]
    // const mustNotMiss = response["Must Not Miss"]
    // const rareDiagnoses = response["Rare Diagnoses"]

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
        <div className="flex flex-col md:flex-row">
            {/* <!-- Main Content --> */}
            <div className="flex-1 p-8 space-y-8">
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
                    <div className="bg-white p-4 rounded-lg shadow">
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
                    <div className="bg-white p-4 rounded-lg shadow">
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
    );
};



export default DifferentialOutput;