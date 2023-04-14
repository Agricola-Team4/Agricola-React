import React from 'react';

export default function Card({ratio, bg}) {
    return (
        <>
        <div className={`${ratio} bg-contain ${bg} bg-no-repeat bg-center w-full h-1/2 my-1`}>
        </div>
        </>
    );
}

