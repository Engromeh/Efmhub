import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Homepage from "../Pages/Homepage/Homepage";
import ReferralContestPage from "../Pages/ReferralContestPage/ReferralContestPage";
import Login from "../Pages/Login/Login";


const Router =createBrowserRouter(

    createRoutesFromElements(
      <>
<Route  path='/' element={<Layout/>} >
<Route index element={<Homepage/>} />
<Route path="/ReferralContestPage" element={<ReferralContestPage/>} />
</Route>
<Route path='/Login' element={<Login/>} />


      </>  
    )

)

export default Router
