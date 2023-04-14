import React from 'react';
import Card from './Card';

export default function CardSlotBoard({img,col,row,close,}) {
    console.log(img);

    return (
        <>
        <div style={{top:"18%", left: "20%", height:"650px"}} className="absolute  w-7/12  p-6 bg-white">

                <div className="absolute right-2 top-2 w-8 text-center bg-cyan-400 rounded-full aspect-square" onClick={close}>X</div>

                <div className='flex flex-row flex-wrap w-full h-full box-border'>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                    <Card ratio="basis-1/5" bg="bg-majorWell"></Card>
                </div>

            </div>

        </>
    );
}

