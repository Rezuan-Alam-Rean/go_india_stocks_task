"use client";
import React, { useState } from 'react';
import { TiMediaPlay } from "react-icons/ti";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoFilterCircleSharp } from "react-icons/io5";
import DiscussionForum from '../ui/DiscussionForum';
import MarketStories from '../ui/MarketStories';



const Drawer = () => {
    // State for managing the open/close status of the sidebar
    const [isOpen, setIsOpen] = useState(false);

    // State for managing the active tab in the small device navbar
    const [activeTab, setActiveTab] = useState('DiscussionForum');

    return (
        <div>
            {/* Sidebar for all devices */}
            <div className="flex">
                <div className={`transform top-0 left-0 w-64 bg-blue-950 text-white fixed h-full z-40 overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <IoPersonSharp size={24} />
                            <span className="ml-2">Hello, User</span>
                        </div>
                        <IoNotificationsSharp size={24} />

                        
                    </div>
                    <nav className="mt-10">
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <IoChatbox size={22} />
                            <span className="ml-2">Discussion Forum</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <IoFilterCircleSharp size={22} />
                            <span className="ml-2">Market Stories</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">Sentiment</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">Market</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">Sector</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">Watchlist</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">Event</span>
                        </a>
                        <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <span className="ml-2">News/Interview</span>
                        </a>
                    </nav>
                </div>

                {/* Top Navbar for small devices */}
                <div className="md:hidden">
                    <nav className="flex justify-around items-center bg-black py-5">
                        <button onClick={() => setActiveTab('DiscussionForum')} className="transition text-white text-lg duration-200 hover:bg-blue-700 hover:text-white">
                            Discussion Forum
                        </button>
                        <button onClick={() => setActiveTab('MarketStories')} className="transition text-white text-lg duration-200 hover:bg-blue-700 hover:text-white">
                            Market Stories
                        </button>
                    </nav>
                    {activeTab === 'DiscussionForum' && <DiscussionForum />}
                    {activeTab === 'MarketStories' && <MarketStories />}
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)}></div>
                )}

                {/* Content for medium and large devices */}
                <div className={`hidden md:flex gap-x-8 ${isOpen ? 'ml-72' : 'ml-32'} `}>
                    <DiscussionForum />
                    <MarketStories />
                </div>

                {/* Sidebar open/close button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`fixed z-50 mt-60 text-white bg-blue-950 h-24 w-6 ${isOpen ? 'left-64' : 'left-0'} transition-all duration-300`}
                >
                    <TiMediaPlay size={30} />
                </button>
            </div>
        </div>
    );
};

export default Drawer;




