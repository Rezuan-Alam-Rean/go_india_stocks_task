import React, { useEffect, useState } from 'react';
import data from '../../../public/stories.json';
import Post from './Post';
const MarketStories = () => {


    return (

        <div>

            <h1 className='text-3xl mt-5 mb-5 bg-slate-200 text-center p-1 font-bold text-red-900'>MARKET STORIES </h1>
            <div className=''>

                {data.map((item, index) => (
                    <Post
                        key={item.id}
                        item={item}

                    />
                ))}
            </div>

        </div>
    );
};

export default MarketStories;