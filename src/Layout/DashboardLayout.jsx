import React, { useState } from "react";
import logo from "../../photo/dashpord.svg";
import themeIcon from "../../photo/Frame 9.png";
import mailIcon from "../../photo/mail.png";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userPhoto, setUserPhoto] = useState(
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle photo change in the navbar
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

        <div className="flex items-center space-x-4">
          <img src={themeIcon} alt="Theme" className="w-6 h-6" />
          <img src={mailIcon} alt="Mail" className="w-6 h-6" />

          {/* User Photo */}
          <div className="relative">
            <img
              className="w-8 h-8 rounded-full cursor-pointer"
              src={userPhoto}
              alt="User"
            />
            {/* Input to change photo */}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              title="Change Profile Picture"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 transition-transform duration-300 ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
      >
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-[#77808B]">Advertiser Stats</h2>
              <ul className="space-y-2 mt-4">
                <li>Ad Credits: 0</li>
                <li>Video Ads Credits: 0</li>
                <li>Banner Credits: 0</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-[#77808B]">Referral Stats</h2>
              <p>Direct Referrals: 0</p>
              <p>Earned so far: 0 EGP</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashBoardLayout;
