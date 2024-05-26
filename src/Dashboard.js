import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { auth, db } from './firebase';
import { getDocs, collection } from 'firebase/firestore';
import axios from 'axios';


export default function Dashboard(props) {
    const navigate = useNavigate();
    const state = useLocation().state;
    const username = state ? state.username : "temp";
    const key = "CdTqPh+WNqPRKkhWZ+akhg==qvuIFpUZ4CG77bqI";
    const url = "https://api.api-ninjas.com/v1/geocoding";
    const [drives, setDrives] = useState([]);
    const [loading, setLoading] = useState(false);

    function LogOut(){
        auth.signOut().then(() => {
            navigate('/', { replace: true });
        }).catch((e) => {
            console.error("Error signing out:", e);
        });
    }

    useEffect(() => {
        async function getData() {
            const snapshot = await getDocs(collection(db, 'drives'));
            const drivesData = snapshot.docs.map(doc => doc.data());
            setDrives(drivesData);
        }

        getData();
    }, []);

    useEffect(() => {
        console.log("DRIVES:", drives);
    }, [drives]);

    return (
        <div className={``}>
            <h1 className="text-center text-6xl font-bold mb-4">WeCommunity Drives</h1>
            <div class={`py-3 px-10 flex flex-row`}>
                <div className="navbar bg-base-100 w-4/6 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    <figure className='w-20 fixed top-5 left-8'>
                        <img src="https://lh5.googleusercontent.com/ePD66cF1nE66Vb4x_8pfR4DKjH163YPdoLbBs46QnxWh4rYYuSzzdE9-_IQYfLpV6op6E-xlcRzcq5kN8bP32qw=w16383" alt="WeCommunity Logo" />
                    </figure>
                    <div className="navbar-center hidden lg:flex">
                        <button onClick={() => navigate('/', { replace: true})} className={`btn btn-outline mr-4 text-lg`}>Logout</button>
                        <button onClick={() => navigate('/analyticsandinformation', { replace: false, state: { username: username }  })} className={`btn btn-outline mr-4 text-lg`}>Analytics and Information</button>
                        <button onClick={() => navigate('/driveorganization', { replace: false, state: { username: username }  })} className={`btn btn-outline mr-4 text-lg cursor-pointer`}>Drive Organization</button>
                    </div>
                    <div className="navbar-end">
                        <div className="avatar placeholder mr-3">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>{username.substring(0, 1).toUpperCase()}</span>
                            </div>
                        </div>
                        <p>{username}</p>
                    </div>
                </div>
            </div>
            <hr className={`my-3 border-t-4 border-gray-400`}></hr>
            <center>
                <big>Map Of Drive Locations</big>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LOrTDBIqUcr87fiVO5OyNtT91RYCVSo&ehbc=2E312F" width="640" height="480"></iframe>
              </center>

              <div className="overflow-x-auto">
    <table className="table table-zebra w-5/6 mx-auto mt-3">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Description</th>
        <th>Money Raised</th>
        <th>Goals</th>
      </tr>
    </thead>
    <tbody>
      {drives.map((drive, index) => {
        console.log("DRIVE", index + 1, drive);
        return (
            <tr key={index}>
                <td>{drive.organizationName}</td>
                <td>{drive.dropOffLocation}</td>
                <td>{drive.description}</td>
                <td>{drive.moneyRaised}</td>
                <td>{drive.goals}</td>
            </tr>
        )
      })}
    </tbody>
  </table>
</div>
</div>
    )
}

