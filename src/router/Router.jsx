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
import Current from "../Component/DashBoard/Current/Current.JSX";
import Historysection from "../Component/DashBoard/Historysection/Historysection";
import NewOrder from "../Component/DashBoard/NewOrder/NewOrder";
import PrivacyPolicy from "../Component/DashBoard/PrivacyPolicy/PrivacyPolicy";
import UpgradeAccount from "../Component/DashBoard/Upgreedaccount/Upgreedaccount";
import AddFunds from "../Component/DashBoard/AddFunds/AddFunds";
import WithdrawFunds from "../Component/DashBoard/WithdrawFunds/WithdrawFunds";
import Tasks from "../Component/DashBoard/Task/Task";
import PersonalSettings from "../Component/DashBoard/PersonalSettings/PersonalSettings";
import CreateTicket from "../Component/DashBoard/CreateTicket/CreateTicket";
import Orders from "../Component/DashBoard/Order/Order";

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

<Route path="/ReferralContestPage" element={<ReferralContestPage/>} />
</Route>
<Route path='/Login' element={<Login/>} />
<Route path="/ForgetPassword" element={<ForgetPassword/>} />
<Route path="/SingUp" element={<SingUp/>} />

<Route path="/dashboard" element={<DashBoardLayout/>}>



</Route>
<Route path='/AddFunds' element={<AddFunds/>} /> 
 <Route path="/WithdrawFunds" element={<WithdrawFunds/>} />
<Route path="/Current" element={<Current/>} />
<Route path='/NewOrder' element={<NewOrder/>} />
<Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
<Route path="/Upgreedaccount" element={<UpgradeAccount/>} />
<Route path="/Historysection" element={<Historysection/>} />
<Route path="/task" element={<Tasks/>} />
<Route path="/PersonalSettings" element={<PersonalSettings/>} />
<Route path="/CreateTicket" element={<CreateTicket/>} />
<Route path="/Orders" element={<Orders/>} />


      </>  
    )

)

export default Router
