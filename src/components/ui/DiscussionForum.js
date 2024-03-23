"use client";
import Image from 'next/image';
import React from 'react';
import { FaRegThumbsUp, FaRegCommentDots, FaRegEye, FaRegClock } from 'react-icons/fa';
import data from '../../../public/forum.json';
import Cards from './Cards';

const DiscussionForum = () => {



    return (
        <div>
            <h1 className='text-4xl mt-5 mb-5 bg-slate-200 text-center p-1 font-bold text-red-900'>DISCUSSION FORUM </h1>

            {/* Map the data and pass each item as props to the Drawer component */}
            {data.map((item, index) => (
                <Cards
                    key={item.id}
                    item={item}

                />
            ))}
        </div>


    );
};

export default DiscussionForum;








