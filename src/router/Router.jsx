import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Homepage from "../Pages/Homepage/Homepage";
import ReferralContestPage from "../Pages/ReferralContestPage/ReferralContestPage";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import SingUp from "../Pages/SingUp/SingUp";
import Dashbordlayout from "../Layout/Dashbordlayout";
import Dashbord from "../Pages/Dashbord/Dashbord";


const Router =createBrowserRouter(

    createRoutesFromElements(
      <>
<Route  path='/' element={<Layout/>} >
<Route index element={<Homepage/>} />
<Route path="/ReferralContestPage" element={<ReferralContestPage/>} />
</Route>
<Route path='/Login' element={<Login/>} />
<Route path="/ForgetPassword" element={<ForgetPassword/>} />
<Route path="/SingUp" element={<SingUp/>} />

<Route path="/Dashbord" element={<Dashbordlayout/>} >
<Route index element={<Dashbord/>} />

  
</Route>
      </>  
    )

)

export default Router
