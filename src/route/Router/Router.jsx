import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../components/Home/Home";
import About from "./../../components/About/About";
import Signin from "../../components/Signin/Signin";
import SignUp from "../../components/SignUp/SignUp";
import Users from "../../components/Users/users";
import AddUser from "../../components/AddUser/AddUser";
import UserDetails from "../../components/UserDetails/UserDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        element: <Users></Users>
      },
      {
        path: "/add-user",
        element: <AddUser></AddUser>
      },
      {
        path: "/user-details/:id",
        loader: ({params})=> fetch(`https://simple-server-peach.vercel.app/users/${params.id}`),
        
        element: <UserDetails></UserDetails>
        

      },
   
      {
        path: "/sign-in",
        element: <Signin></Signin>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
