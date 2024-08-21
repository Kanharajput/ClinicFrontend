import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";


export default function QuickDDsx() {
    const [userInput, setUserInput] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleCancel = () => {
        navigate("/differential");
    }
    
    const handleSubmit = () => {
        // start the loader
        setLoading(true);

        // Submit the formData to the API
        fetch(`http://localhost:8000/differential-diagonise?question=${userInput}`, {
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
            .then(response_data => {
                // stop the loader
                setLoading(false);
                navigate('/differential-output', { state: { data: response_data } });
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    }


    return (
        <div>
        {loading?(
                <LoadingSpinner />
            ) : (
        <div className= "bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white w-97 rounded-lg shadow-lg p-6">
                {/* <!-- Header --> */}
                <div className="mb-4">
                    <h1 className="text-lg font-semibold text-gray-900">Quick DDx</h1><br/>
                        <p className="text-sm text-gray-600">Enter your case summary and attach investigatory/imaging files below.</p>
                </div>

                {/* <!-- Case Summary Input --> */}
                <div className="mb-4">
                    <textarea className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                        placeholder="Example: A 58-year-old male with a history of DM and HTN presents with progressive muscle weakness, stroke-like episodes, and bilateral hearing loss..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}></textarea>
                </div>

                {/* <!-- Action Buttons --> */}
                <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={handleCancel}>Cancel</button>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
        )}
    </div>
    );
}