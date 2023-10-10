import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import Services from "../pages/AllServices/Services";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('/services.json')
            }, 
            {
                path: '/home',
                element: <Home></Home>, 
                loader: () => fetch('/services.json')
            }, 
            {
                path: '/service/:id', 
                element: <PrivateRoute><Service></Service></PrivateRoute>, 
                loader: () => fetch('/services.json')
            },
            {
                path: '/services', 
                element: <PrivateRoute><Services></Services></PrivateRoute>, 
                loader: () => fetch('/services.json')
            },
            {
                path: '/contact', 
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }    
]);

export default router;