import React, { useState } from "react";
import logo from "../../photo/dashpord.svg";
import photo from "../../photo/photo_2024-11-06_17-06-38-removebg-preview 1.png";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  );
  const [showPhotoDropdown, setShowPhotoDropdown] = useState(false);
  const [showMessagesDropdown, setShowMessagesDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 ${
          isSidebarOpen ? "left-64" : "left-0"
        } right-0 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6 py-4 shadow transition-all duration-300`}
      >
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <h1 className="text-2xl text-[#77808B] ml-4">Dashboard User EFM</h1>
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Toggle Theme Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* Messages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMessagesDropdown(!showMessagesDropdown)}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              title="Open Messages"
            >
              📧
            </button>
            {showMessagesDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                <p>Message 1</p>
                <p>Message 2</p>
                <p>Message 3</p>
                <button
                  onClick={() => setShowMessagesDropdown(false)}
                  className="mt-2 bg-gray-200 p-2 rounded w-full"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* User Photo Dropdown */}
          <div className="relative">
            <img
              className="w-8 h-8 rounded-full cursor-pointer"
              src={userPhoto}
              alt="User"
              onClick={() => setShowPhotoDropdown(!showPhotoDropdown)}
            />
            {showPhotoDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                <button
                  className="block w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => alert("Personal Settings")}
                >
                  Personal Settings
                </button>
                <button
                  className="block w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => alert("Logging out...")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 transition-transform duration-300 ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
      >
        {isSidebarOpen && (
          <div className="flex items-center justify-center p-4">
            <img src={logo} className="w-12 h-12" alt="Logo" />
          </div>
        )}
        <div className={`p-4 ${isSidebarOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4">
            <li className="bg-[#DFBC8A] p-2 rounded-lg text-white">Dashboard</li>
            <li>Upgrade Account</li>
            <li>New Order</li>
            <li>Add Funds</li>
            <li>Withdraw</li>
            <li>Tasks</li>
            <li>Orders</li>
            <li>Personal Settings</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-24 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
        style={{ minHeight: "100vh", backgroundColor: "#f8f8f8" }}
      >
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-[#77808B]">Current Balance</h2>
              <p className="text-3xl font-bold text-[#DFBC8A]">$155.339 EG</p>
            </div>
          </div>
        </div>

        {/* Footer Image */}
        <img
          src={photo}
          className="absolute bottom-4 right-4 w-32 h-32 sm:w-64 sm:h-64"
          alt="Mascot"
        />
      </main>
    </>
  );
};

export default DashBoardLayout;
