import { useState, useEffect } from "react";
import axios from 'axios';


export default function Dashboard() {

    const [location, setLocation] = useState({});
    const [userName, setUserName] = useState("");
    
    // location api
    useEffect(() => {
        if (localStorage.getItem("location") === '{}' || localStorage.getItem("location") === null){
            axios.get('https://ipapi.co/json/')
            .then((response) => {
                let data = response.data;
                console.log(data)
                localStorage.setItem('location', JSON.stringify({
                    countryName: data.country_name,
                    countryCapital: data.country_capital
                }));
                setLocation({
                    countryName: data.country_name,
                    countryCapital: data.country_capital
                });
            }).catch((error) => {
                console.log(error);
            });
        }
        else
            setLocation(JSON.parse(localStorage.getItem("location")));
    }, [])

    useEffect(() => {
        console.log(localStorage.getItem("username"))  
        if (localStorage.getItem("username") === null || localStorage.getItem("username") === "") {
            const user_id = localStorage.getItem("user_id")
            console.log(user_id)
            fetch(`http://3.110.175.181/get-full-name/1`,{
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

    return (
        <div className="bg-gray-100">
            <div className="flex min-h-screen">
                {/* <!-- Sidebar --> */}
                <div className="h-screen bg-white w-64 p-6 flex flex-col space-y-4 shadow-md">
                    {/* <!-- Logo and title --> */}
                    <div className="flex items-center space-x-2">
                        {/* <img src="" alt="Logo" className="w-8 h-8" /> */}
                            <span className="text-xl font-bold">NeuroLAB AI</span>
                    </div>
                    <hr />
                        {/* <!-- Navigation --> */}
                        <nav className="mt-6 flex-1">
                            <ul className="space-y-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <li><a href="#" className="flex items-center text-white-500 font-bold"><span
                                        className="mr-2">🏠</span>Dashboard</a>
                                    </li>
                                </button>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🔬</span>Diagnose</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💻</span>Clinical Case Simulation</a>
                                </li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💊</span>PharmacEASY</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🔍</span>Research</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">🛋️</span>Doctor's Lounge</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">📝</span>Contribute</a></li>
                                <li><a href="#" className="flex items-center"><span className="mr-2">💬</span>Expert Advice</a></li>
                            </ul>
                        </nav>
                        {/* <!-- User profile --> */}
                        <div className="mt-auto flex items-center space-x-2">
                            {/* <img src="Avatar.png" alt="User" className="w-10 h-10 rounded-full" /> */}
                                <div>
                                    <p className="font-semibold">Dr. {userName}</p>
                            <p className="text-sm text-gray-500">{location.countryCapital}, {location.countryName}</p>
                                </div>
                        </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8 space-y-8">

                    {/* <!-- Top navigation --> */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Hello Dr. {userName}, Welcome!</h1>
                            <p className="text-gray-600 mt-1">Ready to Elevate your Medical Journey?</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">Novice</span>
                            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">200</span>
                            <img src="/mnt/data/notification.png" alt="Notifications" className="w-6 h-6" />
                        </div>
                    </div>

                    {/* <!-- Input area with image upload and send button --> */}
                    <div className="bg-blue-100 p-6 rounded-lg space-y-2">
                        <p className="font-bold text-gray-700">What's on your mind?</p>
                        <p className="text-sm text-gray-500">Example: How do Proteosome Inhibitors function in the treatment of
                            Multiple Myeloma?</p>
                        <div className="flex items-center space-x-2 mt-4">
                            <input
                                id="userInput"
                                placeholder="Enter your question here"
                                className="w-full p-3 border border-gray-300 rounded-lg mt-2"/>
                            <input
                                type="file"
                                id="imageUpload"
                                className="hidden"/>
                                <label
                                    htmlFor="imageUpload"
                                className="cursor-pointer bg-white text-gray-600 py-2 px-4 rounded border border-gray-300">Upload Image</label>
                            <button
                                id="sendButton"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Send
                            </button>
                        </div>

                        <p className="text-xs text-red-500 mt-2">**We're refining image interpretation for optimal performance.</p>
                    </div>

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
        {/* < !--JavaScript -->
        <script>
            document.getElementById("userInput").addEventListener("keydown", function (event) {
                if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
            sendInput();
                } else if (event.key === "Enter" && event.shiftKey) {
                // Allow newline
            }
            });

            document.getElementById("sendButton").addEventListener("click", sendInput);

            function sendInput() {
                let userInput = document.getElementById("userInput").value;
            let imageUpload = document.getElementById("imageUpload").files[0];

            if (userInput.trim() === "" && !imageUpload) {
                alert("Please enter some text or upload an image.");
            return;
                }

            let formData = new FormData();
            formData.append("userInput", userInput);
            if (imageUpload) {
                formData.append("imageUpload", imageUpload);
                }

            // Replace with actual backend URL
            fetch("https://your-backend-url.com/submit", {
                method: "POST",
            body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                alert("Submitted successfully!");
            document.getElementById("userInput").value = "";
            document.getElementById("imageUpload").value = null;
                    })
                    .catch(error => {
                console.error("Error:", error);
                    });
            }
        </script> 
        

        # location api
        const [location, setLocation] = useState({});
	useEffect(() => {
		if (localStorage.getItem("location") === null)
			axios.get('https://ipapi.co/json/').then((response) => {
				let data = response.data;
				localStorage.setItem('location', JSON.stringify({
					countryName: data.country_name,
					countryCode: data.country_calling_code
				}));
				setLocation({
					countryName: data.country_name,
					countryCode: data.country_calling_code
				});
			}).catch((error) => {
				console.log(error);
			});
		else
			setLocation(JSON.parse(localStorage.getItem("location")));
	}, [])
        
        
        
        
        */}