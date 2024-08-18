
const CashSimulationDash = () => {
    return (
        <div class="flex min-h-screen">
            {/* <!-- Sidebar --> */}
            <div class="bg-white w-64 p-6 flex flex-col space-y-4 shadow-lg">
                {/* <!-- Logo and title --> */}
                <div class="flex items-center space-x-2">
                    <img src="/mnt/data/Body.png" alt="Logo" class="w-8 h-8" />
                        <span class="text-xl font-bold">NeuroLAB AI</span>
                </div>
                <hr />
                    {/* <!-- Navigation --> */}
                    <nav class="mt-6 flex-1">
                        <ul class="space-y-4">
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-blue-600 bg-blue-100 rounded-lg">
                                    <span>🏠</span> <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-blue-600 bg-blue-100 rounded-lg">
                                    <span>🔬</span> <span>Diagnose</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>💻</span> <span>Clinical Case Simulation</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>💊</span> <span>PharmacEASY</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>🔍</span> <span>Research</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>🛋️</span> <span>Doctor's Lounge</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>📝</span> <span>Contribute</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center space-x-2 py-2 px-4 text-gray-600">
                                    <span>💬</span> <span>Expert Advice</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- User profile --> */}
                    <div class="mt-auto flex items-center space-x-2">
                        <img src="Avatar.png" alt="User" class="w-10 h-10 rounded-full" />
                            <div>
                                <p class="font-semibold">Dr. Shiv</p>
                                <p class="text-sm text-gray-500">New Delhi, India</p>
                            </div>
                    </div>
            </div>
            {/* <!-- Main Content --> */}
            <div class="flex-1 p-8">
                <header class="flex items-center justify-between">
                    <h1 class="text-2xl font-bold">Hello Dr.Shiv,</h1>
                    <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        <i class="fas fa-coins mr-2"></i>
                        200
                    </button>
                </header>
                <p class="mt-2 text-gray-600">Your patient needs you, Let's rush to the rescue</p>
                <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold">Welcome to Clinical Case Simulator</h2>
                    <p class="mt-2 text-gray-600">This feature allows you to practice your clinical case skills. Choose from our list of unique patient scenarios and experience a realistic case simulation. Perform a patient interview followed by a questionnaire to test your clinical examination skills. We have a total of 9 cases right now and are continuously updating the library. Make sure to check back frequently!</p>
                </section>
                <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold">Choose the Subject You Want to Master:</h2>
                    <div class="flex flex-wrap mt-4">
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Random" class="mb-2" />
                                Random
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Anatomy" class="mb-2" />
                                Anatomy
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Physiology" class="mb-2" />
                                Physiology
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Biochemistry" class="mb-2" />
                                Biochemistry
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Pharmacology" class="mb-2" />
                                Pharmacology
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Pathology" class="mb-2" />
                                Pathology
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Microbiology" class="mb-2" />
                                Microbiology
                        </button>
                        <button class="flex-1 m-2 p-4 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center">
                            <img src="https://via.placeholder.com/50" alt="Immunology" class="mb-2" />
                                Immunology
                        </button>
                    </div>
                    <button class="mt-4 w-full py-2 bg-blue-100 text-blue-400 rounded hover:bg-blue-600">Start the Case Study</button>
                </section>
                <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold">Achievements</h2>
                    <hr />
                        <div class="flex items-center mt-4 space-x-4">
                            {/* <!-- Icons for Achievements (You can replace these with actual icons or images) --> */}
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
                        </div>
                </section>
                <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold">Completed Cases</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div class="p-4 bg-gray-50 rounded-lg shadow-md">
                            <h3 class="font-semibold">65 Year Old Man with Sudden Onset of Shortness of Breath</h3>
                            <p class="mt-2 text-gray-600">A 65 year old man presents to the emergency department complaining of four days of shortness of breath.</p>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg shadow-md">
                            <h3 class="font-semibold">72 Year Old Woman with Worsening Shortness of Breath</h3>
                            <p class="mt-2 text-gray-600">A 72 year old woman presents to the outpatient clinic complaining of worsening shortness of breath over the past week.</p>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg shadow-md">
                            <h3 class="font-semibold">78 Year Old Man with Progressive Shortness of Breath</h3>
                            <p class="mt-2 text-gray-600">A 78 year old man to the outpatient clinic complaining of progressive shortness of breath over the past few months.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CashSimulationDash;