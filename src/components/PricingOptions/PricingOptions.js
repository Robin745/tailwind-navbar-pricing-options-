import React from 'react';
import Benifits from '../Benifits/Benifits';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


const PricingOptions = ({ item }) => {
    const { name, price, benifits } = item;
    console.log(benifits.length);
    return (
        <div className='p-4 bg-white rounded-lg'>
            <h1 className='text-2xl bg-teal-300 rounded-md py-2'>{name}</h1>
            <p>
                <span className='text-5xl'>{price}</span>
                <span className='text-xl text-gray-500'> /mo</span>
            </p>
            <p className='text-left'>Benifits: </p>

            <div className=' text-sm'>
                {
                    benifits.map(benifit => <Benifits benifit={benifit}></Benifits>)
                }
            </div>
            <button className='flex justify-center items-center bg-green-500 w-full mt-4 py-2 rounded-md text-white font-bold hover:text-green-700'>
                <p> Buy Now </p>
                <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOptions;