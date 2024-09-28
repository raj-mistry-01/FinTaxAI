import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(18);

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age }), // Send the form data
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Account created successfully!");
      } else {
        alert(`Signup error: ${data.error}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-sm flex flex-col p-4">
        <div className="w-full">
          <h1 className="mb-2 text-3xl font-bold text-black text-center">Sign up</h1>
          <p className="text-xs text-gray-600 text-center">
            Please fill in your details to create an account
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {/* Name Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Name</label>
            <input
              placeholder="Enter Full Name..."
              value={name}
              onChange={(e) => setName(e.target.value)} // Capture name
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Email</label>
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Capture email
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age Input */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Age</label>
            <input
              placeholder="Enter your age..."
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)} // Capture age
              className="w-full border border-gray-300 bg-white p-2 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup} // Bind form submission handler
            className="mt-3 w-full bg-blue-600 p-2 text-center font-bold text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
