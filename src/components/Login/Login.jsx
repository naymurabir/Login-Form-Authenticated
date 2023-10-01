import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';



const Login = () => {

    const [loginError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState('')

    const emailRef = useRef()

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        setSuccess('')
        setLoginError('')

        if (!password) {
            setLoginError("Please input password to login")
            return;
        }

        else if (password.length < 6) {
            setLoginError("Password must be 6 characters long.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError("Password must have at least one Uppercase letter.")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("LogIn Successful", result.user);

                if (result.user.emailVerified) {
                    setSuccess("Login Successful");
                    toast("Login Successful.")
                }
                else {
                    setLoginError("Please verify your email address")
                }
            })
            .catch(error => {
                console.log("Error:", error);
                setLoginError("Wrong password!!")
            })
    }

    const handleForgotPassword = () => {
        console.log("Provide your email address", emailRef.current.value);
        const email = emailRef.current.value

        if (!email) {
            setLoginError("You must provide an email address.")
            return;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            setLoginError("Please prove a valid email address.")
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess("Password reset email sent!")
                toast("Password reset email sent!")
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    return (

        <div className="hero h-[580px] rounded bg-rose-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-[300px] max-w-sm shadow-2xl h-[550px] bg-base-100">
                    <div className="card-body">

                        <h2 className="text-xl font-bold text-center">Sign In</h2>

                        <form onSubmit={handleLogIn}>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    name="email"
                                    placeholder="Email..." className="input input-bordered" />
                            </div>

                            <div className="form-control relative">

                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password" placeholder="Password..."
                                    className="input input-bordered" />

                                <span className="text-lg absolute top-[52px] left-52" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>} </span>

                            </div>

                            <div className="flex items-center mt-2">
                                <input type="checkbox" name="remember" id="remember" />
                                <label className="ml-2 text-xs font-bold" htmlFor="remember">Remember me</label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="bg-rose-500 text-white font-semibold px-2 py-1 rounded-md">Sign In</button>
                            </div>

                            <div className="flex justify-center">
                                <label className="label">
                                    <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </form>

                        <div className="text-center">
                            {
                                success && <p className="text-base text-green-500 font-semibold">{success}</p>
                            }
                        </div>

                        <div className="text-center">
                            {
                                loginError && <p className="text-base text-red-500 font-semibold">{loginError}</p>
                            }
                        </div>

                        <div className="mt-24 text-center underline ">
                            <Link to="/register"><p className="text-sm font-semibold">Do not have an Account? Sign Up</p></Link>
                        </div>

                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;