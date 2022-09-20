import React from 'react';
import Links from '../Links/Links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Menu', link: '/menu' },
        { id: 3, name: 'Shop', link: '/shop' },
        { id: 4, name: 'Coupons', link: '/coupons' },
        { id: 5, name: 'Contact', link: '/contact' }
    ];
    return (
        <nav className='bg-cyan-500'>
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>

                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>}
            </div>

            <ul className={`md:flex justify-center py-3 absolute md:static bg-cyan-500 w-full ${open ? 'top-6' : 'top-[-230px]'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}> </Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;