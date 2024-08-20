import { useState, useEffect } from "react";
import axios from 'axios';
import LoadingSpinner from "../components/LoadingSpinner";


export default function Dashboard() {
    const [userName, setUserName] = useState("");
    const [queryOutput, setQueryOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [imageUpload, setImageUpload] = useState(null);


    // get the user full name
    useEffect(() => {
        if (localStorage.getItem("username") === null || localStorage.getItem("username") === "") {
            const user_id = localStorage.getItem("user_id")
            fetch(`http://3.110.175.181:8080/get-full-name/${user_id}`,{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(
                response => {
                    if (response.status == 200){
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
        else{
            const username = localStorage.getItem("username")
            setUserName(username)
        }
    }, [])


    // below code is for query api
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendInput();
        }
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevents the default action
        sendInput();
    };


    const sendInput = () => {
        if (userInput.trim() === '' && !imageUpload) {
            alert('Please enter some text or upload an image.');
            return;
        }
        console.log(userInput)

        // this formData will be helpfull in with image
        // const formData = new FormData();
        // formData.append('userInput', userInput);
        // if (imageUpload) {
        //     formData.append('imageUpload', imageUpload);
        // }

        
        // start the loader
        setLoading(true);

        // fetch the data
        fetch(`http://3.110.175.181:8080/query/${userInput}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status === 200){
                return response.json()
            }
        })
        .then((data) => {
            const queryResponse = data.response
            // Remove the ```html block
            const cleanResponse = queryResponse.replace(/```html/g, '').replace(/```/g, '');
            setQueryOutput(cleanResponse)
            console.log(cleanResponse)
            setLoading(false);
            setUserInput('');
            setImageUpload(null);
        })
        .catch((error) => {
            setLoading(false);
            console.error('Error:', error);
        });
    };

    return (
        <div className="bg-gray-100">
            <div className="flex min-h-screen">

                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8 space-y-8">

                    {/* <!-- Top navigation --> */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Hello Dr. {userName}, Welcome!</h1>
                            <p className="text-gray-600 mt-1">Ready to Elevate your Medical Journey?</p>
                        </div>
                        {/* score section will create it later */}
                        {/* <div className="flex items-center space-x-4">
                            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">Novice</span>
                            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">200</span>
                            <img src="/mnt/data/notification.png" alt="Notifications" className="w-6 h-6" />
                        </div> */}
                    </div>

                    {/* <!-- Input area with image upload and send button --> */}
                    <div className="bg-blue-100 p-8 rounded-lg space-y-2 text-center">
                        <p className="text-xl font-bold text-gray-700">What's on your mind?</p>
                        <p className="text-sm text-gray-500">Example: How do Proteosome Inhibitors function in the treatment of
                            Multiple Myeloma?</p>

                        {/* <!-- Container for input and buttons --> */}
                        <div className="relative flex justify-center pt-8">
                            {/* <!-- Input Field --> */}
                            <input id="userInput" placeholder="Enter your question here"
                                className="w-[70%] p-3 border border-gray-300 rounded-lg"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}/>

                                {/* <!-- Image Upload Button --> */}
                            <input type="file" id="imageUpload" className="hidden" 
                                onChange={(e) => setImageUpload(e.target.files[0])} />
                            <label for="imageUpload"
                                className="absolute right-[12rem] top-[68%] transform -translate-y-1/2 cursor-pointer">
                                <img src="#" className="w-6 h-6" />
                            </label>

                            {/* <!-- Mic Button --> */}
                            <button id="micButton" className="absolute right-[8.5rem] top-[68%] transform -translate-y-1/2">
                                <img src="#" />
                            </button>
                        </div>
                        <p className="text-xs text-red-500 mt-2 absolute right-[12rem] top-[48%] transform -translate-y-1/2">**We're refining image interpretation for optimal performance.</p>
                    </div>

                    {/* output the query api */}
                    {loading ? (
                        <LoadingSpinner />
                    ) : ( queryOutput && 
                            <div className="bg-blue-100 p-6 rounded-lg space-y-2 dashboard-output">
                            {/* <p>{queryOutput}</p> */}
                            <div dangerouslySetInnerHTML={{ __html: queryOutput }} />
                        </div>
                    )}

                    {/* <!-- Cards area --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* <!-- Differential Diagnosis --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                            <div>
                                <h2 className="text-xl font-bold">Differential Diagnosis</h2>
                                <p className="text-gray-500">Explore every diagnostic possibility with our state-of-the-art
                                    differential generator.</p>
                            </div>
                            <img src="Frame 30.png" alt="Differential Diagnosis" className="w-12 h-12" />
                        </div>
                        {/* <!-- Research --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold">Research</h2>
                            <p className="text-gray-500">Delve into Discovery.</p>
                        </div>
                    </div>
                    {/* <!-- Case Of The Day --> */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold">Case Of The Day</h2>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Diam elementum sed etiam ultrices
                                aliquet eu.</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Case</button>
                            <img src="Frame 1261156360.png" alt="Differential Diagnosis" className="float-right w-40 h-100" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* <!-- Clinical Case Simulator --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold">Clinical Case Simulator</h2>
                            <p className="text-gray-500">Step into Real Clinical Scenarios.</p>
                        </div>
                        {/* <!-- PharmacEASY --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold">PharmacEASY</h2>
                            <p className="text-gray-500">Master Pharmacology the Smarter Way.</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Get Started Today!!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}