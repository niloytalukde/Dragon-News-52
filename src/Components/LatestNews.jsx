import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-300 p-3 rounded-md'>
            <p className='px-3 py-1 bg-[#D72050] text-base-200'>Latest</p>
            <Marquee className='gap-x-3'>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi?
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi?
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;