import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import { useNavigate } from 'react-router-dom';

function Navbar({ query, setQuery }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("")

    const navigate = useNavigate();

    const goToHome = () => {
        setQuery("")
        navigate("/products");
    }
    const goToAuth = () => {
        navigate("/user/login");
    }
    const logout = async () => {
        localStorage.removeItem("token");
        navigate("/user/login")
    }
    const token = localStorage.getItem("token");

    const handleSearch = async (e) => {
        e.preventDefault();
        setQuery(search)
        navigate("/products")
    }

    return (
        <>
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold cursor-pointer" onClick={goToHome}>Shopify</h1>

                    <form
                        onSubmit={handleSearch}
                        className="flex items-center space-x-2 lg:w-full  max-w-sm mx-auto"
                    >
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            className=" flex-1 bg-white text-black px-3 h-9 text-sm rounded-full border border-gray-300 focus:outline-inherit "
                        />
                        <button
                            type="submit"
                            className="hidden sm:inline bg-red-500 h-9 px-3 text-sm text-white rounded-full hover:bg-red-600 transition cursor-pointer"
                        >
                            Search
                        </button>
                    </form>



                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-lg">
                        <li className="hover:text-gray-400 cursor-pointer" onClick={goToHome}>Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">About</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                        {token && <li className="hover:text-gray-400 cursor-pointer" onClick={logout}>Logout</li>}
                        {!token && <li className="hover:text-gray-400 cursor-pointer" onClick={goToAuth}>Login</li>}

                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
                        <li className="hover:text-gray-400 cursor-pointer" onClick={goToHome}>Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">About</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                        {token && <li className="hover:text-gray-400 cursor-pointer" onClick={logout}>Logout</li>}
                        {!token && <li className="hover:text-gray-400 cursor-pointer" onClick={goToAuth}>Login</li>}
                    </ul>
                )}
            </nav>
        </>
    )
}

export default Navbar