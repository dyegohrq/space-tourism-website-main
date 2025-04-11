import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";

const route = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/destination/:id',
                element: <Destination/>
            },
            {
                path: '/crew',
                element: <Crew/>
            }, 
            {
                path: '/technology',
                element: <Technology/>
            }
        ]
    }
])

export {route}