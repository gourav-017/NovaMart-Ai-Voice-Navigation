import React, { useContext, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name, image, id, price}) {
    let {currency} = useContext(shopDataContext)
    let navigate = useNavigate()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
    }

    return (
        <div 
            className='w-[300px] max-w-[90%] h-[400px] bg-white/10 backdrop-blur-lg rounded-lg cursor-pointer border border-white/30 overflow-hidden transition-all duration-300 ease-out preserve-3d'
            onClick={() => navigate(`/productdetail/${id}`)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isHovered 
                    ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px) scale(1.05)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
                transformStyle: 'preserve-3d',
                boxShadow: isHovered 
                    ? `0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), ${mousePosition.x * 2}px ${mousePosition.y * 2}px 20px rgba(0, 0, 0, 0.2)`
                    : '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* 3D Inner Container */}
            <div 
                className='w-full h-full flex items-start justify-start flex-col p-[10px] relative'
                style={{
                    transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                }}
            >
                {/* Animated Background Layers */}
                <div 
                    className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 rounded-lg transition-all duration-500'
                    style={{
                        transform: isHovered 
                            ? `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px) translateZ(-5px)`
                            : 'translateZ(-5px)',
                        opacity: isHovered ? 0.8 : 0.3
                    }}
                />
                
                {/* Image Container with 3D Effects */}
                <div 
                    className='relative w-full h-[80%] rounded-sm overflow-hidden'
                    style={{
                        transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    <img 
                        src={image} 
                        alt={name}
                        className='w-full h-full object-cover transition-all duration-500'
                        style={{
                            transform: isHovered 
                                ? `scale(1.1) translateX(${mousePosition.x * -1}px) translateY(${mousePosition.y * -1}px)`
                                : 'scale(1)',
                            filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
                        }}
                    />
                    
                    {/* 3D Reflection Effect */}
                    <div 
                        className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none transition-all duration-300'
                        style={{
                            transform: isHovered 
                                ? `translateX(${mousePosition.x * 2}px) translateY(${mousePosition.y * 2}px)`
                                : 'translateX(-100px) translateY(-100px)',
                            opacity: isHovered ? 1 : 0
                        }}
                    />
                </div>

                {/* Product Name with 3D Text Effect */}
                <div 
                    className='text-slate-100 text-[18px] py-[10px] transition-all duration-300 font-medium'
                    style={{
                        transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
                        textShadow: isHovered 
                            ? `${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px 10px rgba(0, 0, 0, 0.3)`
                            : 'none',
                        color: isHovered ? '#ffffff' : '#c3f6fa'
                    }}
                >
                    {name}
                </div>

                {/* Price with 3D Glow Effect */}
                <div 
                    className='text-[#f3fafa] text-[14px] font-semibold transition-all duration-300'
                    style={{
                        transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
                        textShadow: isHovered 
                            ? `0 0 20px rgba(59, 130, 246, 0.6), ${mousePosition.x * 0.3}px ${mousePosition.y * 0.3}px 5px rgba(0, 0, 0, 0.3)`
                            : 'none',
                        color: isHovered ? '#60a5fa' : '#f3fafa'
                    }}
                >
                    {currency} {price}
                </div>

                {/* 3D Floating Elements */}
                {isHovered && (
                    <>
                        <div 
                            className='absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-70'
                            style={{
                                transform: `translateZ(30px) translateX(${mousePosition.x * -2}px) translateY(${mousePosition.y * -2}px)`,
                                animation: 'float 3s ease-in-out infinite'
                            }}
                        />
                        <div 
                            className='absolute bottom-20 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60'
                            style={{
                                transform: `translateZ(25px) translateX(${mousePosition.x * 1.5}px) translateY(${mousePosition.y * 1.5}px)`,
                                animation: 'float 2s ease-in-out infinite 0.5s'
                            }}
                        />
                        <div 
                            className='absolute top-1/2 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50'
                            style={{
                                transform: `translateZ(35px) translateX(${mousePosition.x * -1}px) translateY(${mousePosition.y * -1}px)`,
                                animation: 'float 4s ease-in-out infinite 1s'
                            }}
                        />
                    </>
                )}

                {/* 3D Border Highlight */}
                <div 
                    className='absolute inset-0 rounded-lg pointer-events-none transition-all duration-300'
                    style={{
                        border: isHovered ? '2px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(128, 128, 128, 0.29)',
                        transform: isHovered ? 'translateZ(5px)' : 'translateZ(0px)',
                        boxShadow: isHovered 
                            ? `inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)`
                            : 'none'
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateZ(30px); }
                    50% { transform: translateY(-10px) translateZ(40px); }
                }
                
                .preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    )
}

export default Card