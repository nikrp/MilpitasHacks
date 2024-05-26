import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AnalyticsAndInformation from "./AnalyticsAndInformation";
import Login from "./Login";
import SignUp from "./SignUp";
import DriveOrganization from "./DriveOrganization";
import Dashboard from "./Dashboard";
import './output.css'
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Cookies from 'js-cookie';
import { useEffect } from "react";

export default function App() {

    useEffect(() => {
        const token = Cookies.get('access_token');
        console.log(token);
    }, [auth.currentUser]);

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/info" element={<AnalyticsAndInformation/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/driveorganization" element={<DriveOrganization/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/analyticsandinformation" element={<AnalyticsAndInformation/>} />
        </Routes>
    )
}