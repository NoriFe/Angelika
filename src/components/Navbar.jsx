import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="Logo"/>
                    <span className="text-xl tracking-tight">School of Needs</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a hfre="#" className="py-2 px-3 border rounded-md">Login</a>
                    <a hfre="#" className="bg-gradient-to-r from-violet-500 to-violet-800 py-2 px-3 rounded-md">Create an Account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={handleToggle}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (}
        </div>
   </nav>
  )
}

export default Navbar
