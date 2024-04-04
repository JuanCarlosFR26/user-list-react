import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../index.css'

export const Layout = () => {
  return (
    <>
        <nav className='bg-slate-500 text-white text-2xl'>
            <ul className='flex justify-center p-4'>
                <li>
                    <Link className='p-2 rounded-xl hover:bg-lime-900' to="/">Volver al Home</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout;
