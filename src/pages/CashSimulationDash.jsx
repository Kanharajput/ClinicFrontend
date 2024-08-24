import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import achievementImage from "../assests/img/dashboard/achievement.png"
import scoreImg from "../assests/img/dashboard/score.png"
import timelineImg from "../assests/img/dashboard/timeline.png"


const CashSimulationDash = () => {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate()

    // to select a subject
    const [selectedSubject, setselectedSubject] = useState(null);

    const subjects = [
        { label: 'Random', imgSrc: '' },
        { label: 'Anatomy', imgSrc: '' },
        { label: 'Physiology', imgSrc: '' },
        { label: 'Biochemistry', imgSrc: '' },
        { label: 'Pharmacology', imgSrc: '' },
        { label: 'Pathology', imgSrc: '' },
        { label: 'Microbiology', imgSrc: '' },
        { label: 'Immunology', imgSrc: '' },
    ]

    const handleOverClick = (index) => {
        setselectedSubject(index);
    };


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

    const handleClick = () =>{
        // navigate to Case Simulation
        navigate("/case-simulation")
    }


    return (
        <div className="bg-gray-100">
            <div className="flex min-h-screen">
                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Hello Dr. {userName}, Welcome!</h1>
                            <p className="text-gray-600 mt-1">Your patient needs you, Lets rush to the rescue</p>
                        </div>
                        {/* score section */}
                        <div className="flex">
                            <div className="flex items-center bg-blue-100 p-4 rounded-2xl">
                                <img src={achievementImage} />
                                <span className="ml-2">Earned the <strong>'Novice'</strong> badge.</span>
                                <div className="flex bg-blue-400 ml-6 rounded-full py-1 px-2">
                                    <img src={scoreImg} className="w-auto h-[20px]" />
                                    <span className="ml-2 text-white">200</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center ml-6 bg-blue-100 py-2 px-4 rounded-2xl">
                                <img src={timelineImg} />
                            </div>
                        </div>
                    </div>
                    {/* welcome section */}
                    <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-bold">Welcome to Clinical Case Simulator</h2>
                        <hr/>
                        <img src="#" alt="board img" className="my-4"></img>
                        <p className="mt-2 text-gray-600">This feature allows you to practice your clinical case skills. Choose from our list of unique patient scenarios and experience a realistic case simulation. Perform a patient interview followed by a questionnaire to test your clinical examination skills. We have a total of 9 cases right now and are continuously updating the library. Make sure to check back frequently!</p>
                    </section>
                    <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Choose the Subject You Want to Master:</h2>
                        <div className="flex flex-wrap mt-4 space-x-4">
                            {subjects.map((subject, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOverClick(index)}
                                    className={`flex-1 p-2 bg-white border scale-90 hover:scale-100 hover:bg-blue-100 text-blue-500 rounded-lg flex flex-col items-center ${selectedSubject === index ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                >
                                    <img src={subject.imgSrc} alt="img" className="mb-2" />
                                    {subject.label}
                                </button>
                            ))}
                        </div>
                        <button className="mt-4 w-full py-2 bg-blue-100 text-blue-400 rounded hover:bg-blue-600 hover:text-white" onClick={handleClick}>Start the Case Study</button>
                    </section>
                    <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Achievements</h2>
                        <hr />
                            <div className="flex items-center mt-4 space-x-4">
                                {/* <!-- Icons for Achievements (You can replace these with actual icons or images) --> */}
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            </div>
                    </section>
                    <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Completed Cases</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                                <h3 className="font-semibold">65 Year Old Man with Sudden Onset of Shortness of Breath</h3>
                                <p className="mt-2 text-gray-600">A 65 year old man presents to the emergency department complaining of four days of shortness of breath.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                                <h3 className="font-semibold">72 Year Old Woman with Worsening Shortness of Breath</h3>
                                <p className="mt-2 text-gray-600">A 72 year old woman presents to the outpatient clinic complaining of worsening shortness of breath over the past week.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                                <h3 className="font-semibold">78 Year Old Man with Progressive Shortness of Breath</h3>
                                <p className="mt-2 text-gray-600">A 78 year old man to the outpatient clinic complaining of progressive shortness of breath over the past few months.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CashSimulationDash;