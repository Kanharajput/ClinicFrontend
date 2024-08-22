import { useState } from "react";


export default function QuickDDsx({onClose, onSubmit}) {
    const [userInput, setUserInput] = useState();


    const handleCancel = () => {
        // close the popup
        onClose()
    }

    const handleSubmit = () => {
        onSubmit(userInput)
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-97 rounded-lg shadow-lg p-6">
                {/* <!-- Header --> */}
                <div className="mb-4">
                    <h1 className="text-lg font-semibold text-gray-900">Quick DDx</h1><br />
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
                    <button className="bg-white text-blue-700 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white py-2 px-4" onClick={handleCancel}>Cancel</button>
                    <button className="bg-blue-500 text-white rounded-lg hover:border hover:border-blue-500 hover:bg-white hover:text-blue-700 py-2 px-4" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}