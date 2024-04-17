import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from './../assets/img/logo.png';
import loginpageimage from './../assets/img/loginpageimage.jpg';

const Adopter_login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateInputs = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!email.trim()) {
            newErrors.email = "Adopter Email is required.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format. Please enter a valid email address.";
            valid = false;
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const loginUser = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        try {
            const res = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (res.ok) {
                const data = await res.json();
                window.alert("Login Successful");
                navigate("/Adopter_dashboard");
            } else {
                window.alert("Invalid Credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred, please try again later");
        }
    };

    return (
        <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex flex-col items-center">
                        <div
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-orange-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline" >
                            <div className="bg-white p-2 rounded-full">
                                <img src={logo} alt='Logo is not found' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1  ">
                        <a  href="/Ngo_login" >
     <button class="login_button flex_ic w-48  hover: ml-auto mr-auto" >NGO LOGIN
       </button>
       </a> 
                            <div className="my-5 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    ADOPTER LOGIN
                                </div>
                            </div>
                            <div className="mx-auto max-w-xs">
                                <form method="POST" id="Adopter-login">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`login_input ${errors.email && 'border-red-500'}`}
                                        placeholder="Adopter Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-base">{errors.email}</p>}
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={`login_input ${errors.password && 'border-red-500'}`}
                                        placeholder="Password"
                                    />
                                    {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
                                    <button
                                        className="login_button flex_ic  w-full  hover: ml-auto mr-auto "
                                        onClick={loginUser}
                                    >
                                        <span className="ml-">Log in</span>
                                    </button>
                                </form>
                                <a href="/" className="forget_password">
                                    Forget password
                                </a>
                                <span className=" border-b text-center block">
                                    <span
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">
                                        OR
                                    </span>
                                </span>
                                <a href="/Adopt_signup" className="forget_password create_new_account">
                                    Create new account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-orange-200 text-center hidden lg:flex ">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <img src={loginpageimage} alt="login page customimage not found" className="login_image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopter_login;
