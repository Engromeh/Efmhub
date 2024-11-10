import React, { useState } from "react";
import logo from "../../photo/dashpord.svg";
import themeIcon from "../../photo/Frame 9.png";
import mailIcon from "../../photo/mail.png";
import iconname from "../../photo/Icon.png";
import photo from "../../photo/photo_2024-11-06_17-06-38-removebg-preview 1.png";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 py-3 shadow">
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
          <h1 className="text-xl sm:text-2xl text-[#77808B] ml-2">Dashboard User EFM</h1>
        </div>

        <div className="flex items-center space-x-4">
          <img src={themeIcon} alt="Theme" className="w-6 h-6" />
          <img src={mailIcon} alt="Mail" className="w-6 h-6" />
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="User"
          />
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0  w-64 h-full bg-white border-r border-gray-200 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start p-4">
          <img src={logo} className="w-10 h-10" alt="Logo" />
        </div>

        <div className="p-4">
          <ul className="space-y-4">
            <li className="bg-[#DFBC8A] p-2 rounded-lg text-white">
              Dashboard
            </li>
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

      <main
        className={`pt-24 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        style={{ minHeight: "100vh", backgroundColor: "#f8f8f8" }}
      >
        <div className="p-4">
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
