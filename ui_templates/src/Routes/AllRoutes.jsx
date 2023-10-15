import React from 'react'
import Profile from '../Components/Profile'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
function AllRoutes() {
    return (
        <>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes
