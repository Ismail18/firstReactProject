import React from 'react'
import { FaBeer } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='bg-green-800 py -4 md:py-8 text-white '>
        <div className='flex justify-between container mx-auto items-center'>
            <h3>React Practice</h3>

            {/* Mobile screen
            <div>
                <button><FaBeer/></button>
            </div> */}

            <ul className='hidden md:flex space-x-4 md:space-x-6'>
                <li>Home</li>
                <li>Products</li>
                <li>Blogs</li>
            </ul>

            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar