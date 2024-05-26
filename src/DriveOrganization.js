import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

export default function DriveOrganization(props) {
   const navigate = useNavigate(); // Initialize the useNavigate hook
   const [formData, setFormData] = useState({
       startDate: '',
       endDate: '',
       description: '',
       goals: '',
       dropOffLocation: '',
       organizationName: '',
       moneyRaised: ''
   });
   const state = useLocation().state;
    const username = state ? state.username : "temp";


   const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
           ...formData,
           [name]: value
       });
   };


   const handleSubmit = (e) => {
       e.preventDefault();
       const docRef = addDoc(collection(db, 'drives'), {...formData, username: username}).then((docSnap) => {
            alert("Successfully created Drive");
       });
   };


   const goToHome = () => {
       navigate('/'); // Navigate to the home page
   };


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
                        <button onClick={() => navigate('/analyticsandinformation', { replace: false, state: { username: username }  })} className={`btn mr-4 text-lg`}>Analytics and Information</button>
                        <button onClick={() => navigate('/dashboard', { replace: false, state: { username: username }  })} className={`btn mr-4 text-lg cursor-pointer`}>Dashboard</button>
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
           <form onSubmit={handleSubmit} className={`p-10 mx-auto w-2/6`}>
                <div className={`flex flex-row justify-between w-full mb-2`}>
                    <div className={`flex flex-col w-[49%]`}>
                        <label className={`mb-1 text-left text-lg`}>Start Date:</label>
                        <input type="date" name='startDate' placeholder="Enter the start Date" value={formData.startDate} onChange={handleChange} required className="w-full input input-bordered input-primary" />
                    </div>
                    <div className={`flex flex-col w-[49%]`}>
                        <label className={`mb-1 text-left text-lg`}>End Date:</label>
                        <input type="date" name='endDate' placeholder="Enter the end Date" value={formData.endDate} onChange={handleChange} required className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div className={`w-full mb-2`}>
                    <label className={`mb-1 text-left text-lg`}>Organization Name</label>
                    <input type="text" name='organizationName' placeholder="Enter the organization Name" value={formData.organizationName} onChange={handleChange} required className="input input-bordered input-primary w-full" />
                </div>
                <div className={`w-full mb-2`}>
                    <label className={`mb-1 text-left text-lg`}>Money Raised</label>
                    <input type="text" name='moneyRaised' placeholder="Enter Amount of Money Raised" value={formData.moneyRaised} onChange={handleChange} required className="input input-bordered input-primary w-full" />
                </div>
               <div className={`w-full mb-2`}>
                   <label className={`text-lg w-[100%] mb-1`}>Description:</label>
                   <textarea className="textarea textarea-primary w-full text-lg" name='description' placeholder="Enter the end description" value={formData.description} onChange={handleChange} required></textarea>
               </div>
               <div className={`w-full mb-2`}>
                   <label className={`text-lg w-full mb-1`}>Goals:</label>
                   <input type="text" name="goals" placeholder="Enter your goals" value={formData.goals} onChange={handleChange} required className="input input-bordered input-primary w-full" />
               </div>
               <div className={`w-full mb-2`}>
                   <label className={`text-lg w-full mb-1`}>Drop-off Location:</label>
                   <input type="text" name="dropOffLocation" placeholder="Enter the drop off location" value={formData.dropOfflocatoin} onChange={handleChange} required className="input input-bordered input-primary w-full" />
               </div>
               <div className={`w-fit mx-auto`}>
                   <button   className={`btn btn-primary mr-4 text-lg py-1 px-4`} type="submit">Create Resource Drive</button>
               </div>
           </form>

        </div>
   );
}





