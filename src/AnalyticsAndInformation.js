import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom'
import { auth, db } from './firebase';
import { getDocs, collection, where, query } from 'firebase/firestore';


export default function AnalyticsAndInformation(props) {
    const navigate = useNavigate();
    const state = useLocation().state;
    const username = state ? state.username : "temp";
    const [drives, setDrives] = useState([]);


    function LogOut(){
        auth.signOut().then(() => {
            navigate('/', { replace: true });
        }).catch((e) => {
            console.error("Error signing out:", e);
        });
    }

    useEffect(() => {
      const fetchDrives = async () => {
        const q = query(collection(db, 'drives'), where('username', '==', username));
        const snapshot = await getDocs(q);
        const drivesData = snapshot.docs.map(doc => doc.data());
        setDrives(drivesData);
      };

      fetchDrives();
    }, []);
 return (   
     
<div>
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
                        <button onClick={() => navigate('/', { replace: true})} className={`btn mr-4 text-lg`}>Logout</button>
                        <button onClick={() => navigate('/dashboard', { replace: false, state: { username: username }  })} className={`btn mr-4 text-lg`}>Dashboard</button>
                        <button onClick={() => navigate('/driveorganization', { replace: false, state: { username: username }  })} className={`btn mr-4 text-lg cursor-pointer`}>Drive Organization</button>
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
     <div className="overflow-x-auto">
  <table className="table w-fit mx-auto table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className={`w-fit px-10 text-lg`}></th>
        <th className={`w-fit px-10 text-lg`}>Name</th>
        <th className={`w-fit px-10 text-lg`}>Description</th>
        <th className={`w-fit px-10 text-lg`}>Money Raised</th>
        <th className={`w-fit px-10 text-lg`}>Location</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {drives.map((drive, index) => {
        return (
          <tr key={index}>
            <td className={`px-10 text-lg`}>{index + 1}</td>
            <td className={`px-10 text-lg`}>{drive["organizationName"]}</td>
            <td className={`px-10 text-lg`}>{drive["description"]}</td>
            <td className={`px-10 text-lg`}>{drive["moneyRaised"]}</td>
            <td className={`w-fit px-10 text-lg`}>{drive["dropOffLocation"]}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
    </div>  

    
</div>
 );
    
}

