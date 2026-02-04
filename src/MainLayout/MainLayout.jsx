import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-secondary">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout