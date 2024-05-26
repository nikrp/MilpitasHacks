import { useNavigate } from 'react-router-dom'
// import DonationWidget from './donationwidget'

export default function Home() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/signup', { replace: true });
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-full px-12 py-8">
                <center>
                    <figure className='w-20 fixed top-5 left-8'>
                        <img src="https://lh5.googleusercontent.com/ePD66cF1nE66Vb4x_8pfR4DKjH163YPdoLbBs46QnxWh4rYYuSzzdE9-_IQYfLpV6op6E-xlcRzcq5kN8bP32qw=w16383" alt="WeCommunity Logo" />
                    </figure>
                </center>    
                <h1 className="text-center text-6xl font-bold mb-4">WeCommunity</h1>
                <p className="text-center text-xl font-semibold tracking-widest mb-5">Streamlining the donation process.</p>
                <div className="w-fit mx-auto mb-10">
                    <button onClick={() => navigate('/signup', { replace: true })} className="btn btn-primary mr-4 text-lg">Sign Up Today</button>
                    <button onClick={() => navigate('/login', { replace: true })} className="btn btn-outline btn-primary text-lg">Login</button>
                </div>
                <div className="divider divider-info w-4/6 mx-auto my-4"></div>
                <div className="w-4/6 mx-auto flex flex-row">
                    <div className="card w-96 bg-base-100 shadow-xl mr-4">
                        <figure>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYybC81XydjBD8xiq-LB-6EE6nuPU18ffLzmx9KKJTOA&s" alt="Food Drive" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Our Mission</h2>
                            <p>We aim to create an intuitive platform for resource drive organizers and donors to connect. To explore this opportunity, sign up today!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={onButtonClick}>Sign up!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="https://i.imgur.com/tKXhxBL.png" alt="Code" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">How it works</h2>
                            <p>Simply create an account and publish a drive with some information, and others will be able to find your donation opportunities! You can also view analytics for each drive to understand your impact.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={onButtonClick}>Get started!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}