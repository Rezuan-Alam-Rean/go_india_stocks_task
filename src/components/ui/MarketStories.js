import React, { useEffect, useState } from 'react';
import data from '../../../public/stories.json';
import Post from './Post';
const MarketStories = () => {


    return (

        <div>

            <h1 className='text-3xl mt-5 mb-5 text-center font-bold text-red-900'>Market Stories</h1>
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