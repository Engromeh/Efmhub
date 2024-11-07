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
import DashboardLayout from "../Layout/DashBoardLayout";
import { ChakraProvider } from "@chakra-ui/react";


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


<Route path="/dashboard" element={<ChakraProvider>
  <DashboardLayout/>
</ChakraProvider>}>

</Route>
      </>  
    )

)

export default Router
