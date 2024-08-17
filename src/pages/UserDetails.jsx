export default function UserDetails() {


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form id="userForm">
            <div className="mb-4">
                <label for="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name <span className="text-red-500">*</span></label>
                <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name" />
                    <p id="firstNameError" className="text-red-500 text-xs hidden mt-2">First Name is required.</p>
            </div>

            <div className="mb-4">
                <label for="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name <span className="text-red-500">*</span></label>
                <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name" />
                    <p id="lastNameError" className="text-red-500 text-xs hidden mt-2">Last Name is required.</p>
            </div>

            <div className="mb-4">
                <label for="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex items-center">
                    <input id="countryCode" type="text" className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="+91"/>
                    <input type="text" id="phoneNumberInput" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="0000000000" />
                </div>
                <p id="phoneError" className="text-red-500 text-xs hidden mt-2">Please enter a valid phone number.</p>
            </div>

            <div className="mb-4">
                <label for="currentRole" className="block text-gray-700 text-sm font-bold mb-2">Current Role <span className="text-red-500">*</span></label>
                <select id="currentRole" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
                <select id="specialization" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Select">Select</option>
                    {/* <!-- Add other specialization options here --> */}
                </select>
                <p id="specializationError" className="text-red-500 text-xs hidden mt-2">Please select your specialization.</p>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue</button>
            </div>
        </form>
        </div>
    </div>
    );
}