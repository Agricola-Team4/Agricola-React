import React from 'react';

export default function Card({ratio, bg}) {
    return (
        <>
        <div className={`${bg} basis-${ratio} bg-contain bg-no-repeat bg-center`}>
        </div>
        </>
    );
}

