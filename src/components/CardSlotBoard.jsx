import React from 'react';
import Card from './Card';

export default function divSlotBoard({img,col,row,close,}) {
    console.log(img);

    return (
        <>
        <div className="absolute inset-32 bg-contain bg-no-repeat bg-center bg-major">
            <div className="static">
                <div className="absolute right-0 top-0 w-8 text-center bg-cyan-400 rounded-full aspect-square" onClick={close}>X</div>

                <div className='flex flex-row'>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                </div>
                <div className='flex flex-row'>
                </div>
            </div>
        </div>
        </>
    );
}

