import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("Medical Aspirant");
    const [specialization, setSpecialization] = useState("");

    const navigate = useNavigate()

    const handleRole = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, phoneCode, phoneNumber, role, specialization)
        const full_phone_number = phoneCode.concat(" ", phoneNumber)
        // Submit the formData to the API
        const user_id = localStorage.getItem("user_id")
        fetch(`http://localhost:8000/register-user-details/${user_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: full_phone_number,
                current_role: role,
                specialisation: specialization,
            })
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response_data => {
                // redirect it to the user details page
                navigate('/terms-conditions');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form id="userForm">
            <div className="mb-4">
                <label for="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name <span className="text-red-500">*</span></label>
                <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <p id="firstNameError" className="text-red-500 text-xs hidden mt-2">First Name is required.</p>
            </div>

            <div className="mb-4">
                <label for="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name <span className="text-red-500">*</span></label>
                <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
                <p id="lastNameError" className="text-red-500 text-xs hidden mt-2">Last Name is required.</p>
            </div>

            <div className="mb-4">
                <label for="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex items-center">
                    <input id="countryCode" type="text" className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="+91"
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}/>
                    <input type="text" id="phoneNumberInput" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="0000000000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <p id="phoneError" className="text-red-500 text-xs hidden mt-2">Please enter a valid phone number.</p>
            </div>

            <div className="mb-4">
                <label for="currentRole" className="block text-gray-700 text-sm font-bold mb-2">Current Role <span className="text-red-500">*</span></label>
                <select id="currentRole" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={role} onChange={handleRole}>
                    <option value="Select">Select</option>
                    <option value="Medical Aspirant">Medical Aspirant</option>
                    <option value="Medical Student">Medical Student</option>
                    <option value="Intern">Intern</option>
                    <option value="Junior Resident">Junior Resident</option>
                    <option value="Senior Resident">Senior Resident</option>
                    <option value="Medical Researcher">Medical Researcher</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Clinical Specialist">Clinical Specialist</option>
                    <option value="Fellowship">Fellowship</option>
                    <option value="Gene Scientist">Gene Scientist</option>
                    <option value="Clinical Psychologist">Clinical Psychologist</option>
                    <option value="Nutritionist">Nutritionist</option>
                    <option value="Medical Educator">Medical Educator</option>
                    <option value="Healthcare IT Professional">Healthcare IT Professional</option>
                    <option value="Paramedic">Paramedic</option>
                    <option value="Public Health Professional">Public Health Professional</option>
                    <option value="Healthcare administrator">Healthcare administrator</option>
                    <option value="Others">Others</option>
                </select>
                <p id="roleError" className="text-red-500 text-xs hidden mt-2">Please select your current role.</p>
            </div>

            <div className="mb-4">
                <label for="specialization" className="block text-gray-700 text-sm font-bold mb-2">Specialization</label>
                <input id="specialization" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)} >
                </input>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>Continue</button>
            </div>
        </form>
        </div>
    </div>
    );
}