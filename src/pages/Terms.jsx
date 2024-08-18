import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Terms() {

    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (isChecked) {
            // navigate to dashboard
            navigate('/dashboard');
        } else {
            // Show an alert or disable the button if the checkbox isn't checked
            alert("Please agree to the Terms Of Use and Privacy Policy to continue.");
        }
    };

    return (
        <div className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
                <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" id="termsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    />
                        <label for="termsCheckbox" className="ml-2 text-gray-700 font-medium cursor-pointer">
                            <span className="text-red-500">*</span>By checking this box you agree to the
                            <a href="#" className="text-blue-500 underline">Terms Of Use</a> and
                            <a href="#" className="text-blue-500 underline">Privacy Policy</a>
                        </label>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={handleSubmit} disabled={!isChecked} >Continue</button>
                </div>
            </div>
        </div>
    );
}