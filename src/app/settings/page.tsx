"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("John Doe");
  const [userEmail, setUserEmail] = useState("john.doe@example.com");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const handleProfileSubmit = () => {
    alert(`Profile Updated:\nName: ${userName}\nEmail: ${userEmail}`);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Settings
        </h1>

        {/* Theme Settings Card */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-sm transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Theme Settings
          </h2>
          <p
            className={`mb-4 text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Choose your preferred theme for the application
          </p>
          <button
            onClick={toggleTheme}
            className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                : "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
            }`}
          >
            <span className="mr-2">{theme === "light" ? "🌙" : "☀️"}</span>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        {/* User Profile Card */}
        <div
          className={`p-6 rounded-lg shadow-sm transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            User Profile
          </h2>
          <p
            className={`mb-6 text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Update your personal information
          </p>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="userName"
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="userName"
                className={`w-full px-3 py-2 rounded-md border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                }`}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="userEmail"
                className={`w-full px-3 py-2 rounded-md border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                }`}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleProfileSubmit}
                className={`inline-flex items-center px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg"
                }`}
              >
                <span className="mr-2">💾</span>
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
