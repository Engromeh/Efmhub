import { AnimatePresence , motion} from "framer-motion";
import { useEffect, useState } from "react";
import SideBar from "../Component/Dashbord/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import NavberDashboard from "../Component/Dashbord/NavberDashbord/NavberDashbord";

const Dashbordlayout = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {isLoading ? (
  <div style={spinnerContainerStyle}>
    <div style={dotStyle}></div>
    <div style={{ ...dotStyle, animationDelay: "0.3s" }}></div>
    <div style={{ ...dotStyle, animationDelay: "0.6s" }}></div>
  </div>
) : (
  <AnimatePresence>
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
<NavberDashboard />
      <Outlet />
      <SideBar />
      
    </motion.div>
  </AnimatePresence>
)};

    </>
  )
}
const spinnerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };
  
  const dotStyle = {
    width: "12px",
    height: "12px",
    margin: "0 6px",
    backgroundColor: "#333",
    borderRadius: "50%",
    animation: "move 0.8s infinite ease-in-out",
  };
  
  const globalStyles = `
  @keyframes move {
    0%, 60%, 100% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(15px);
      opacity: 0.3;
    }
  }
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);

export default Dashbordlayout
