import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser, FaStar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { FiLogOut, FiUser, FiInfo } from "react-icons/fi";
import { BsLightningFill } from "react-icons/bs";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';

function Nav() {
    let {getCurrentUser , userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    let [showProfile,setShowProfile] = useState(false)
    let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    let [isNavHovered, setIsNavHovered] = useState(false)
    let navigate = useNavigate()

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5
        setMousePosition({ x, y })
    }

    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
            console.log(result.data)
            getCurrentUser(null);
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div 
                className='w-full h-[70px] bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95 backdrop-blur-xl z-10 fixed top-0 flex items-center justify-between px-4 md:px-8 shadow-2xl border-b border-slate-200/30 transition-all duration-300'
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => {setIsNavHovered(false); setMousePosition({ x: 0, y: 0 })}}
                style={{
                    transform: isNavHovered 
                        ? `perspective(1000px) rotateX(${-mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(5px)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                    transformStyle: 'preserve-3d',
                    boxShadow: isNavHovered 
                        ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)'
                        : '0 10px 20px rgba(0, 0, 0, 0.08)'
                }}
            >
                {/* 3D Background Layers */}
                <div 
                    className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-sm transition-all duration-500'
                    style={{
                        transform: isNavHovered 
                            ? `translateX(${mousePosition.x * -1}px) translateY(${mousePosition.y * -1}px) translateZ(-2px)`
                            : 'translateZ(-2px)',
                        opacity: isNavHovered ? 0.6 : 0.2
                    }}
                />
                
                {/* Logo Section with 3D Effect */}
                <div 
                    className='flex items-center justify-start gap-3 min-w-fit relative'
                    style={{
                        transform: isNavHovered ? 'translateZ(10px)' : 'translateZ(0px)',
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    <div 
                        className='w-12 h-12 rounded-xl flex items-center justify-center  transition-all duration-300 relative overflow-hidden'
                        
                    >
                        <img src={logo} alt="OneCart" className='w-6 h-6 object-contain relative z-10' />
                        <div 
                            className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 transition-all duration-300'
                        />
                    </div>
                    <h1 
                        className='text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hidden sm:block transition-all duration-300'
                        
                    >
                        NovaMart
                    </h1>
                </div>

                {/* Desktop Navigation with 3D Buttons */}
                <nav 
                    className='hidden md:flex'
                    style={{
                        transform: isNavHovered ? 'translateZ(8px)' : 'translateZ(0px)',
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    <ul className='flex items-center gap-2'>
                        {[
                            { label: 'HOME', path: '/' },
                            { label: 'COLLECTIONS', path: '/collection' },
                            { label: 'ABOUT', path: '/about' },
                            { label: 'CONTACT', path: '/contact' }
                        ].map((item, index) => (
                            <li key={item.label}>
                                <button 
                                    className='text-sm font-medium text-slate-700 hover:text-white px-6 py-2.5 rounded-full hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-900 transition-all duration-300 hover:shadow-xl relative group overflow-hidden'
                                    onClick={() => navigate(item.path)}
                                    style={{
                                        transform: isNavHovered 
                                            ? `translateZ(${5 + index * 2}px) rotateX(${-mousePosition.y * 0.2}deg)`
                                            : 'translateZ(0px) rotateX(0deg)',
                                        transformStyle: 'preserve-3d'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform += ' scale(1.05)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = e.currentTarget.style.transform.replace(' scale(1.05)', '')
                                    }}
                                >
                                    {item.label}
                                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Action Icons with 3D Effects */}
                <div 
                    className='flex items-center gap-4'
                    style={{
                        transform: isNavHovered ? 'translateZ(12px)' : 'translateZ(0px)',
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    {/* Search Icon */}
                    <button 
                        className='relative p-2 rounded-full hover:bg-slate-100 transition-all duration-300 group overflow-hidden'
                        onClick={() => {setShowSearch(prev => !prev); navigate("/collection")}}
                        style={{
                            transform: isNavHovered 
                                ? `rotateY(${mousePosition.x * 1.5}deg) rotateX(${-mousePosition.y * 1.5}deg)`
                                : 'rotateY(0deg) rotateX(0deg)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {!showSearch ? (
                            <IoSearchCircleOutline className='w-8 h-8 text-slate-700 group-hover:text-black transition-all duration-300 group-hover:scale-110' />
                        ) : (
                            <>
                                <IoSearchCircleSharp className='w-8 h-8 text-black animate-pulse' />
                                <div className='absolute inset-0 bg-blue-500/20 rounded-full animate-ping' />
                            </>
                        )}
                    </button>

                    {/* Profile Icon */}
                    <div className='relative'>
                        <button 
                            className='p-2 rounded-full hover:bg-slate-100 transition-all duration-300 group'
                            onClick={() => setShowProfile(prev => !prev)}
                            style={{
                                transform: isNavHovered 
                                    ? `rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
                                    : 'rotateY(0deg) rotateX(0deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {!userData ? (
                                <FaCircleUser className='w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110' />
                            ) : (
                                <div 
                                    className='w-8 h-8 bg-gradient-to-br from-black to-purple-700 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-110 relative overflow-hidden'
                                    style={{
                                        transform: 'translateZ(5px)'
                                    }}
                                >
                                    {userData?.name.slice(0,1).toUpperCase()}
                                    <div className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500' />
                                </div>
                            )}
                        </button>
                    </div>

                    {/* Cart Icon - Desktop Only */}
                    <div className='relative hidden md:block'>
                        <button 
                            className='p-2 rounded-full hover:bg-slate-100 transition-all duration-300 group'
                            onClick={() => navigate("/cart")}
                            style={{
                                transform: isNavHovered 
                                    ? `rotateY(${mousePosition.x * 1.5}deg) rotateX(${-mousePosition.y * 1.5}deg)`
                                    : 'rotateY(0deg) rotateX(0deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <MdOutlineShoppingCart className='w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110' />
                            {getCartCount() > 0 && (
                                <span 
                                    className='absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-all duration-300'
                                    style={{
                                        transform: isNavHovered ? 'translateZ(8px) scale(1.1)' : 'translateZ(0px) scale(1)',
                                        animation: getCartCount() > 0 ? 'bounce 2s infinite' : 'none'
                                    }}
                                >
                                    {getCartCount()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3D Search Bar Dropdown */}
            {showSearch && (
                <div 
                    className='fixed w-full h-20 bg-white/95 backdrop-blur-xl top-[70px] left-0 flex items-center justify-center shadow-2xl border-b border-slate-200/30 z-10'
                    style={{
                        transform: 'perspective(1000px) rotateX(-2deg) translateZ(10px)',
                        animation: 'slideDown 0.3s ease-out'
                    }}
                >
                    <div className='relative w-full max-w-2xl mx-4'>
                        <input 
                            type="text" 
                            className='w-full h-12 bg-slate-100/80 backdrop-blur-sm rounded-full px-6 pr-12 placeholder:text-slate-500 text-slate-800 text-base border-2 border-transparent focus:border-blue-500 focus:bg-white focus:shadow-2xl transition-all duration-300 outline-none'
                            placeholder='Search for products...' 
                            onChange={(e) => setSearch(e.target.value)} 
                            value={search}
                            autoFocus
                            style={{
                                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <IoSearchCircleSharp className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400' />
                        <BsLightningFill className='absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500 animate-pulse' />
                    </div>
                </div>
            )}

            {/* 3D Profile Dropdown */}
            {showProfile && (
                <div 
                    className='fixed w-56 bg-white/95 backdrop-blur-xl top-[85px] right-4 rounded-2xl shadow-2xl border border-slate-200/30 overflow-hidden z-20'
                    style={{
                        transform: 'perspective(800px) rotateX(-5deg) rotateY(5deg) translateZ(15px)',
                        animation: 'dropDown 0.3s ease-out'
                    }}
                >
                    <div className='p-2'>
                        {[
                            { 
                                label: userData ? 'Logout' : 'Login', 
                                action: userData ? handleLogout : () => navigate("/login"),
                                icon: userData ? FiLogOut : FiUser
                            },
                            { label: 'Orders', action: () => navigate("/order"), icon: FaStar },
                            { label: 'About', action: () => navigate("/about"), icon: FiInfo }
                        ].map((item, index) => (
                            <button
                                key={index}
                                className='w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium flex items-center gap-3 group relative overflow-hidden'
                                onClick={() => {
                                    item.action();
                                    setShowProfile(false);
                                }}
                                style={{
                                    transform: `translateZ(${index * 2}px)`,
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-200' />
                                {item.label}
                                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500' />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* 3D Mobile Bottom Navigation */}
            <div 
                className='fixed bottom-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-xl border-t border-slate-200/30 md:hidden z-10'
                style={{
                    transform: 'perspective(1000px) rotateX(2deg)',
                    boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.1)'
                }}
            >
                <div className='flex items-center justify-around h-full px-4'>
                    {[
                        { icon: IoMdHome, label: 'Home', path: '/' },
                        { icon: HiOutlineCollection, label: 'Collections', path: '/collection' },
                        { icon: MdContacts, label: 'Contact', path: '/contact' },
                        { icon: MdOutlineShoppingCart, label: 'Cart', path: '/cart', badge: getCartCount() }
                    ].map((item, index) => (
                        <button
                            key={item.label}
                            className='flex flex-col items-center gap-1 py-2 px-3 rounded-xl hover:bg-slate-100 transition-all duration-300 relative group active:scale-95'
                            onClick={() => navigate(item.path)}
                            style={{
                                transform: `translateZ(${index * 2}px)`,
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <item.icon className='w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110' />
                            <span className='text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors duration-200'>
                                {item.label}
                            </span>
                            {item.badge > 0 && (
                                <span 
                                    className='absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg'
                                    style={{
                                        transform: 'translateZ(10px)',
                                        animation: 'bounce 2s infinite'
                                    }}
                                >
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideDown {
                    from { transform: perspective(1000px) rotateX(-20deg) translateZ(10px) translateY(-20px); opacity: 0; }
                    to { transform: perspective(1000px) rotateX(-2deg) translateZ(10px) translateY(0); opacity: 1; }
                }
                
                @keyframes dropDown {
                    from { transform: perspective(800px) rotateX(-20deg) rotateY(10deg) translateZ(15px) translateY(-10px); opacity: 0; }
                    to { transform: perspective(800px) rotateX(-5deg) rotateY(5deg) translateZ(15px) translateY(0); opacity: 1; }
                }
                
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% { transform: translateZ(10px) scale(1); }
                    40%, 43% { transform: translateZ(15px) scale(1.1); }
                }
            `}</style>
        </>
    )
}

export default Nav