import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricing = [
        {
            id: 1, name: 'Free', price: 0, benifits: [
                'Everything on free', 'unlimited deals', 'get 24/7 service', 'get extra freeStorage', 'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 59.9, benifits: [
                'Everything on regular', 'unlimited deals', 'get 24/7 service', 'get extra freeStorage', 'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 99.9, benifits: [
                'Everything on premium', 'unlimited deals', 'get 24/7 service', 'get extra freeStorage', 'crazy deals'
            ]
        }
    ];
    return (
        <div className='px-10 py-4 grid md:grid-cols-3 gap-4 bg-teal-300'>
            {
                pricing.map(item => <PricingOptions
                    key={item.id}
                    item={item}
                ></PricingOptions>)
            }
        </div>
    );
};

export default Pricing;