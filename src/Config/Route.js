import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'

const RouteApps = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/About" element={<About />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RouteApps
