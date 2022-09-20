import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benifits = ({ benifit }) => {
    return (
        <div>
            <div className='flex items-center text-left'>
                <CheckCircleIcon className='w-4 h-4 mr-1 text-green-500'></CheckCircleIcon>
                <p>{benifit}</p>
            </div>

        </div>
    );
};

export default Benifits;