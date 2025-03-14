import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const CashSimulation = () => {

    const [userName, setUserName] = useState("");
    const [question, setQuestion] = useState("Enter Hi to get your first Question");
    const [userResponse, setUserResponse] = useState("")
    const [answer, setAnswer] = useState("Submit to know your Knowledge")
    const [loading, setLoading] = useState(false);

    const handleSubmit = () =>{
        // start the loader
        setLoading(true);

        // fetch the data
        fetch(`http://localhost:8000/case-simulation?user_input=${userResponse}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((data) => {
                // start the loader
                setLoading(false);
                setAnswer(data["response"])
            })
            .catch((error) => {
                // start the loader
                setLoading(false);
                console.error('Error:', error);
            });
    }

    const handleNextSkip = () =>{
        // start the loader
        setLoading(true);

        // fetch the data
        fetch(`http://localhost:8000/case-simulation?user_input=Next Question`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((data) => {
                setLoading(false)
                setAnswer(data["response"])
            })
            .catch((error) => {
                setLoading(false)
                console.error('Error:', error);
            });
    }
  
    useEffect(() => {
        if (localStorage.getItem("username") === null || localStorage.getItem("username") === "") {
            const user_id = localStorage.getItem("user_id")
            console.log(user_id)
            fetch(`http://localhost:8000/get-full-name/1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(
                    response => {
                        if (response.status == 200) {
                            return response.json()
                        }
                    }
                )
                .then(data => {
                    console.log(data.full_name)
                    localStorage.setItem("username", data.full_name)
                    setUserName(data.full_name)
                })
        }
        else {
            const username = localStorage.getItem("username")
            setUserName(username)
        }
    }, [])

    return (
        <div class="bg-gray-100">
            <div class="flex min-h-screen">
                {/* <!-- Main Content --> */}
                <div class="flex-1 p-8">
                    <header class="flex items-center justify-between">
                        <h1 class="text-2xl font-bold">Hello Dr.{userName},</h1>
                        {/* <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                            <i class="fas fa-coins mr-2"></i>
                            200
                        </button> */}
                    </header>
                    <p class="mt-2 text-gray-600">Your patient needs you, Lets rush to the rescue</p>
                    {/* later on don't know what's uses */}
                    {/* <div class="mt-4 bg-blue-100 p-4 rounded-lg">
                        <span class="text-blue-700 font-semibold">75% complete</span>
                        <div class="w-full bg-blue-200 rounded-full h-2.5 mt-2">
                            <div class="bg-blue-500 h-2.5 rounded-full w-3/4"></div>
                        </div>
                    </div> */}
                    {/* <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-semibold">Case 1 :</h2>
                        <h3 class="text-lg font-semibold mt-4">56 Yr Old Man with Sudden Onset of Severe Chest Pain</h3>
                        <div class="mt-4">
                            <p><span class="font-semibold">Patient Information:</span></p>
                            <ul class="list-disc list-inside">
                                <li>Name: Mr. Rajesh Kumar</li>
                                <li>Age: 56 years</li>
                                <li>Sex: Male</li>
                                <li>Occupation: Retired Bank Manager</li>
                                <li>Chief Complaint: Sudden onset of severe chest pain</li>
                            </ul>
                        </div>
                        <div class="mt-4">
                            <p><span class="font-semibold">Description:</span></p>
                            <p><span class="font-semibold">History of Present Illness:</span> Mr. Rajesh Kumar presents to the emergency department with a sudden, excruciating chest pain that started 2 hours ago. The pain is sharp, tearing, and radiates to his back. He also feels light-headed and short of breath. There’s no history of trauma or physical exertion.</p>
                            <p><span class="font-semibold">Past Medical History:</span></p>
                            <ul class="list-disc list-inside">
                                <li>Hypertension for 10 years (poorly controlled)</li>
                                <li>Type 2 Diabetes Mellitus for 5 years</li>
                                <li>Hyperlipidemia</li>
                                <li>No history of smoking or alcohol use</li>
                            </ul>
                            <p class="mt-4"><span class="font-semibold">Physical Examination:</span></p>
                            <ul class="list-disc list-inside">
                                <li>Vitals: BP: 190/110 mmHg (right arm), 170/100 mmHg (left arm); HR: 100 bpm; RR: 22/min; Temp: 98.6°F</li>
                                <li>Cardiovascular: Diminished pulses in the left arm, diastolic murmur over the aortic area</li>
                            </ul>
                            <p class="mt-4"><span class="font-semibold">Investigations:</span></p>
                            <ul class="list-disc list-inside">
                                <li>ECG: Sinus tachycardia with nonspecific ST changes</li>
                                <li>Chest X-ray: Widened mediastinum</li>
                                <li>CT Angiography of the chest: Abnormal findings in the ascending aorta</li>
                            </ul>
                        </div>
                    </section> */}
                    <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-semibold">Question</h2>
                        <p class="mt-4">{question}</p>
                        <textarea class="w-full mt-4 p-4 bg-gray-50 border rounded-md h-40" placeholder="Write your answer here..."
                        value={userResponse}
                        onChange={(e) => setUserResponse(e.target.value)}
                        ></textarea>
                        <div class="flex justify-between items-center mt-4">
                            <div class="space-x-2">
                                <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
                                <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNextSkip}>Next</button>
                                <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNextSkip}>Skip</button>
                            </div>
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
                        </div>
                    </section>
                    <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                        {loading ? (
                            <LoadingSpinner />
                        ) : (
                        <div>
                            <p>{answer}</p>
                        </div>
                        )}
                    </section>
                    <section class="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-semibold">Evaluation</h2>
                        <p class="mt-4 font-semibold">Overall Score: 36/40</p>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <p><span class="font-semibold">Leadership:</span> 8/10 - The student demonstrates a proactive approach with a clear, structured plan. Slightly more emphasis on team coordination could enhance leadership.</p>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <p><span class="font-semibold">Clinical Knowledge:</span> 9/10 - Strong understanding of aortic dissection, diagnostic strategies, and management. Mentioning differential diagnoses could show even broader knowledge.</p>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <p><span class="font-semibold">Emotional Intelligence:</span> 8/10 - The response shows concern for patient comfort with pain management. Acknowledging patient and family communication could further elevate emotional intelligence.</p>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <p><span class="font-semibold">Decision-Making:</span> 9/10 - Logical, evidence-based decisions are made, prioritizing the patient's immediate needs. Briefly considering potential complications would strengthen this further.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CashSimulation;
