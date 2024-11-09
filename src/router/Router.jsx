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
import DashBoardLayout from "../Layout/DashBoardLayout";
import Aboutus from "../Component/Homepage/AboutUsSection/AboutUs";
import Membership from "../Component/Homepage/MembershipSection/Membership";
import Payment from "../Component/Homepage/PaymentSection/Payment";
import Faq from "../Component/Homepage/Faq/Faq";

const Router =createBrowserRouter(

    createRoutesFromElements(
      <>
<Route  path='/' element={<Layout/>} >
<Route index element={<Homepage/>} />
<Route path="/Aboutus" element={<Aboutus />} />
<Route path="/Membershib" element={<Membership />} />
<Route path="/offers" element={<Payment />} />
<Route path="/home" element={<Homepage/>} />
<Route path="/Faq" element={<Faq />} />
</Route>
<Route path='/Login' element={<Login/>} />
<Route path="/ForgetPassword" element={<ForgetPassword/>} />
<Route path="/SingUp" element={<SingUp/>} />

<Route path="/dashboard" element={<DashBoardLayout/>}>

</Route>
      </>  
    )

)

export default Router
