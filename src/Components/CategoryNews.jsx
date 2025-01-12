import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryNews = () => {
    const {data:news} =useLoaderData()
  
    return (
        <div>
            <h1 className='font-semibold '>Dragon News Home</h1>
            <div>
                {
news.map((item,idx)=><CategoryCard key={idx
   
    } item={item} ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;