import React from 'react';

const Links = ({ route }) => {
    const { name, link } = route;
    return (
        <div className='text-white mr-6 text-xl'>
            <a href={link}> {name}</a>
        </div>
    );
};

export default Links;