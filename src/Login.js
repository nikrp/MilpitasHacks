
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import {reset} from './resetPassword'

const email = "hershvsaxena@gmail.com"
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCred) => {
      userCred.user.getIdToken().then((token) => {
        Cookies.set('acces_token', token);
        getDoc(doc(db, 'users', userCred.user.uid)).then((docSnap) => {
          const username = docSnap.data()['username']
          navigate('/dashboard', { replace: true, state: { username: username } });
        });
      })
    }).catch((e) => {
        alert("Incorect Email or Password");
        console.error("Error signing in:", e);
    });
    
  }

  return (
    <div className={'mainContainer flex justify-center items-center h-screen'}>
        
       
        <div className={`w-2/6 rounded-xl`}>
        <div className={'titleContainer'}>
            <h1 className={`text-5xl font-semibold text-center`}>Welcome Back</h1>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input value={email} placeholder="Enter your email here" onChange={(ev) => setEmail(ev.target.value)} type="email" className="w-full input input-bordered input-primary" />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input value={password} placeholder="Enter your password here" onChange={(ev) => setPassword(ev.target.value)} type="password" className="input input-bordered input-primary w-full" />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer mb-3'}>
            <button className={`btn text-lg btn-primary w-full`} onClick={onButtonClick}>Login</button>
            <button onClick={() => navigate('/', { replace: true })} className={`btn btn-primary mr-4 text-lg fixed top-5 left-8`}>Home</button>
        </div>
        <div className={`flex justify-between flex-row`}>
          <p>Dont Have an Account? <span className={`text-success cursor-pointer`} onClick={() => navigate('/signup', { replace: true })}>Sign Up Today!</span></p>
          <p><span className={`text-success cursor-pointer`} onClick={() => navigate('/signup', { replace: true })}>Forgot Password?</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login;
export { email }