import axios from '../uitls/axios.js';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Authentication() {

    const [formState, setFormState] = useState(0); // 0 = Login, 1 = Signup
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');


    const navigate = useNavigate();

    const handleAuth = async (event) => {
        event.preventDefault();
        setError('');
        setMessage('');
        if (!username || !password) {
            setError("All fields are required")
            return
        }
        try {
            if (formState === 0) {
                const res = await axios.post("/user/login", { username, password })
                // console.log(res.data);
                localStorage.setItem("token", res.data.token);
                navigate("/products")
                // alert(res.data.message);

            } else {
                if (!fullname) {
                    setError("All fields are required")
                    return
                }
                const result = await axios.post("user/register", { fullname, username, password })

                // console.log(result);
                setMessage(result.data.message);
                setUsername('');
                setPassword('');
                setFullname('');
                setFormState(0);
            }
        } catch (err) {

            const msg = err.response?.data?.error || err.response?.data?.message || 'An error occurred';
            console.log(msg)
            setError(msg);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 flex items-center justify-center p-6">
                <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
                    {/* Image side */}
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src="/login.png"
                            alt="Login Visual"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Form side */}
                    <div className="w-full md:w-1/2 p-10">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                            {formState === 0 ? "Login" : "Sign Up"}
                        </h2>

                        {error && (
                            <div className="text-red-600 text-sm text-center mb-4">{error}</div>
                        )}
                        {message && (
                            <div className="text-green-600 text-sm text-center mb-4">
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleAuth} noValidate className="space-y-6">
                            {formState === 1 && (
                                <div>
                                    <label
                                        htmlFor="fullname"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        value={fullname}
                                        placeholder="Full Name"
                                        required
                                        onChange={(e) => setFullname(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    placeholder="Username"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    placeholder="••••••••"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md"
                            >
                                {formState === 0 ? "Sign In" : "Sign Up"}
                            </button>
                        </form>

                        <div className="text-center text-sm text-gray-600 mt-6">
                            {formState === 0 ? (
                                <>
                                    Don&apos;t have an account?{" "}
                                    <span
                                        className="text-indigo-600 hover:underline font-medium cursor-pointer"
                                        onClick={() => setFormState(1)}
                                    >
                                        Sign up
                                    </span>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <span
                                        className="text-indigo-600 hover:underline font-medium cursor-pointer"
                                        onClick={() => setFormState(0)}
                                    >
                                        Login
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication