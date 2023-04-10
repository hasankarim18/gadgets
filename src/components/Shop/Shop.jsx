import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const productsData = useLoaderData()

    console.log(productsData);

    return (
        <div>
            Shop
        </div>
    );
};

export default Shop;