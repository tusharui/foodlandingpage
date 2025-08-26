"use client";
import { NavLinks } from '@/constants/constant';
import React ,{useEffect, useState} from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import Link from "next/link";
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props ={
    openNav :()=> void ;
}
const Navbar = ({openNav}:Props ) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(()=>{
        const handler  =()=>{
            if(window.scrollY>90) setNavBg(true);
               if(window.scrollY<90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);

        return()=> window.addEventListener("scroll", handler);
{

        }
    },[])


    return (
        <div className={`transition-all ${
            navBg ? "bg-white shadow-md" : 'fixed'} 
            duration-200 h-[12vh] z-[100] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-blue-950  rounded-full flex items-center justify-center flex-col'>
                <MdDeliveryDining className=' w-6 h-6 text-white  ' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-black font-bold'>Foodie</h1>
        </div>
        {/* Navlinks*/}
        <div className=' hidden lg:flex items-center space-x-10 ' >
            { NavLinks.map((link)=>{
                return <Link key ={link.id}  href={link.url} className="text-black hover:text-green-700 font-bold transiton-all duration-200">
                <p>{link.Label}</p>
                </Link>
            })}
        </div>
        {/* buttons */}
            <div className='flex items-center space-x-4'>
                {/*join now button */}
                <button className='bg-blue-950 px-4 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'>
                    Join Now 
                    </button>
                    {/* toggle button  */}
                    {/* menu icons  */}
                    <HiBars3BottomRight onClick={openNav}className="w-8 h-8 cursor-pointer text-blue-950 lg:hidden  "/>



            </div>
            
        </div>
        </div>
    )
}

export default Navbar