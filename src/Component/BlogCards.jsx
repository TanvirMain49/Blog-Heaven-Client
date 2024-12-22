import React from 'react';
import Card from './Card';

const BlogCards = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto mt-20 grid grid-cols-3 gap-4'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    );
};

export default BlogCards;