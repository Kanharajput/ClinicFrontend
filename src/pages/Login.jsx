import { Link } from "react-router-dom";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        // Reset errors
        setEmailError("");
        setPasswordError("");

        // Validate email
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        }

        // Validate password
        if (password.trim() === "") {
            setPasswordError("Password cannot be empty.");
            isValid = false;
        }

        if (isValid) {
          fetch('http://3.110.175.181/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: email,
                  password: password
              }),
          })
              .then(response => {
                  if (response.status == 404) {
                      setEmailError("Email not found")
                  }

                if (response.status == 401) {
                  setPasswordError("Wrong Password")
                }

                  if (response.status == 200) {
                      return response.json()
                  }
              })

              .then(data => {
                  console.log(data);      // Handle the parsed JSON data
                  localStorage.setItem("access_token", data.access_token)
                  localStorage.setItem("refresh_token", data.refresh_token)
                  localStorage.setItem("user_id", data.user_id)
              })

              // if any then fails it catch it here
              .catch(error => {
                  console.error('Error:', error);
              });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Welcome</h2>
                <p className="text-gray-600 text-center mb-6">Sign in to NeuroLAB AI to Enter the Dashboard</p>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline w-full"
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-center mb-6">
                        <hr className="border-gray-300 w-[40%]" />
                    </div>
                    <div className="mb-4">
                        <button
                            type="button"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-bold rounded border-2 border-gray-100 py-2 px-4 rounded inline-flex items-center justify-center w-full"
                        >
                            <img src="img/Google.png" className="h-5 w-5 text-gray-400 mr-2" alt="Google Logo" />
                            Continue with Google
                        </button>
                    </div>
                    <div className="mb-4">
                        <button
                            type="button"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-bold rounded border-2 border-gray-100 py-2 px-4 rounded inline-flex items-center justify-center w-full"
                        >
                            <img src="img/Apple.png" className="h-5 w-5 text-gray-400 mr-2" alt="Apple Logo" />
                            Continue with Apple
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm font-medium">Don't have an account <a href="/" className="text-blue-500 hover:text-blue-700">Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
