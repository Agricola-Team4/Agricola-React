import React from "react";
import sheep from "../assets/images/sheep_icon.png";
import cow from "../assets/images/cow_icon.png";
import reed from "../assets/images/reed_icon.png";
import boar from "../assets/images/boar_icon.png";
import grain from "../assets/images/grain_icon.png";
import soil from "../assets/images/soil_icon.png";
import stone from "../assets/images/stone_icon.png";
import vege from "../assets/images/vege_icon.png";
import wood from "../assets/images/wood_icon.png";

export default function SharedResourceBoard() {
  return (
    <>
      <div className="bg-orange-600 h-20 flex justify-center items-center">
        {/* 가로로 9개가 있다. 3 4 2 그룹 1/9씩 =  */}
        {/* 5 4 나누기     */}
        <div className="flex">
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={wood} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={soil} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={reed} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={stone} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={sheep} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={boar} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={cow} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>

          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={grain} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
          <div className="flex items-center flex-row mx-2"> 
            <img className="aspect-square" src={vege} alt="" style={{height:"50px"}}  />
            <p className='ml-2'>15</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
