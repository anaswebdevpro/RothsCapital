import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Accounts from "../Pages/Accounts/Accounts";
import Company from "../Pages/Company/Company";
import Market from "../Pages/Market/Market";
import Partnership from "../Pages/Partnership/Partnership";
import Platforms from "../Pages/Platforms/Platforms";
import Tools from "../Pages/Tools/Tools";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "markets",
                element: <Market />,
            },
            {
                path: "accounts",
                element: <Accounts />,
            },
            {
                path: "tools",
                element: <Tools />,
            },
            {
                path: "company",
                element: <Company />,
            },
            {
                path: "partnership",
                element: <Partnership />,
            },
            {
                path: "platforms",
                element: <Platforms />,
            }
        ],
    },
]);