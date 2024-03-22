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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`transform top-0 left-0 w-64 bg-blue-950 text-white fixed h-full z-40 overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Profile and Notification */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {/* Profile Icon */}
                    <div className="flex items-center">
                        {/* Replace 'ProfileIcon' with the actual icon component */}
                        <IoPersonSharp size={24} />
                        <span className="ml-2">Hello, User</span>
                    </div>
                    {/* Notification Icon */}
                    {/* Replace 'NotificationIcon' with the actual icon component */}
                    <IoNotificationsSharp size={24} />
                </div>

                {/* Sidebar links */}
                <nav className="mt-10">
                    {/* Replace 'IconComponent' with the actual icon components */}
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <IoChatbox size={22} />
                        <span className="ml-2">Discussion Forum</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <IoFilterCircleSharp size={22} />
                        <span className="ml-2">Market Stories</span>
                    </a>
                    {/* Add more sidebar links with icons and text as needed */}



                    {/* New links */}
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">Sentiment</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">Market</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">Sector</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">Watchlist</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">Event</span>
                    </a>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        {/* <IconComponent size={20} /> */}
                        <span className="ml-2">News/Interview</span>
                    </a>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)}></div>
            )}

            {/* Content */}
            <div className={` hidden  md:flex gap-x-8 ${isOpen ? 'ml-72' : 'ml-32'} `}>


                <DiscussionForum />
                <MarketStories />
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed z-50 mt-60 text-white bg-blue-950 h-24 w-6 ${isOpen ? 'left-64' : 'left-0'} transition-all duration-300`}
            >
                {/* Icon */}
                <TiMediaPlay size={30} />
            </button>
        </div>
    );
};

export default Drawer;
