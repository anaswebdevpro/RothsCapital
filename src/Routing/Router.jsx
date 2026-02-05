
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

// Markets
import Forex from "../Pages/Markets/Forex";
import Stocks from "../Pages/Markets/Stocks";
import Metals from "../Pages/Markets/Metals";
import Indices from "../Pages/Markets/Indices";
import Crypto from "../Pages/Markets/Crypto";

// Accounts

import Standard from "../Pages/Accounts/Standard";
import Prime from "../Pages/Accounts/Prime";
import ECN from "../Pages/Accounts/ECN";

// Platforms

import MT5 from "../Pages/Platforms/MT5";
// Company

import About from "../Pages/Company/About";
import FAQ from "../Pages/Company/FAQ";
import Contact from "../Pages/Company/Contact";

// Tools

import Calendar from "../Pages/Tools/Calendar";
import PipCalc from "../Pages/Tools/PipCalc";

// Partnership

import IBProgram from "../Pages/Partnership/IBProgram";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // Markets
            {
                path: "markets",
                children: [

                    { path: "forex", element: <Forex /> },
                    { path: "stocks", element: <Stocks /> },
                    { path: "metals", element: <Metals /> },
                    { path: "indices", element: <Indices /> },
                    { path: "crypto", element: <Crypto /> },
                ]
            },
            // Accounts
            {
                path: "accounts",
                children: [

                    { path: "standard", element: <Standard /> },
                    { path: "prime", element: <Prime /> },
                    { path: "ecn", element: <ECN /> },
                ]
            },
            // Tools
            {
                path: "tools",
                children: [

                    { path: "calendar", element: <Calendar /> },
                    { path: "pip-calc", element: <PipCalc /> },
                ]
            },
            // Company
            {
                path: "company",
                children: [

                    { path: "about-us", element: <About /> },
                    { path: "faqs", element: <FAQ /> },
                    { path: "contact-us", element: <Contact /> },
                ]
            },
            // Partnership
            {
                path: "partnership",
                children: [

                    { path: "ib-program", element: <IBProgram /> },
                ]
            },
            // Platforms
            {
                path: "platforms",
                children: [

                    { path: "mt5", element: <MT5 /> },
                ]
            }
        ],
    },
]);