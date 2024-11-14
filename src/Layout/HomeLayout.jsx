import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftNavbar from '../Components/Layout-Components/LeftNavbar';
import RightNavbar from '../Components/Layout-Components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className=' font-poppings'>
            
            {/* Header  */}
            <Header></Header>
            <div className='w-11/12 mx-auto '>
            <LatestNews></LatestNews>
            </div>
           {/* Navbar  */}
           <div className='w-11/12 mx-auto py-3'>
            <NavBar></NavBar>
           </div>
            {/* main layout  */}
            <div className='grid md:grid-cols-12 gap-3 w-11/12 mx-auto pt-4 '>
               <aside className='col-span-3'>
                <LeftNavbar></LeftNavbar>
               </aside>
                <div className='col-span-6'>
                 <Outlet></Outlet>
                </div>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </div>
        </div>
    );
};

export default HomeLayout;