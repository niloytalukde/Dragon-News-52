import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categorys,setcategorys]=useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setcategorys(data.data.news_category))
            .catch(error => console.log('Error:', error));
    }, []);
    
    return (
        <div>
           <h2>All Caterogy</h2> 
           <div className='flex flex-col mt-3 gap-3'>
{
    categorys.map(category=><NavLink to={`/category/${category.category_id}`} className='btn ' key={category.category_id}>{category.category_name}</NavLink>)
}
           </div>
        </div>
    );
};

export default LeftNavbar;

