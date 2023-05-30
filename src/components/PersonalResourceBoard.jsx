import React from 'react';
import { Avatar } from '@material-tailwind/react';
import sheep_img from '../assets/images/sheep_icon.png';
import cow_img from '../assets/images/cow_icon.png';
import reed_img from '../assets/images/reed_icon.png';
import boar_img from '../assets/images/boar_icon.png';
import grain_img from '../assets/images/grain_icon.png';
import soil_img from '../assets/images/soil_icon.png';
import stone_img from '../assets/images/stone_icon.png';
import vege_img from '../assets/images/vege_icon.png';
import wood_img from '../assets/images/wood_icon.png';
import food_img from '../assets/images/food_icon.png';
import profile_img from '../assets/images/korea.png';
import farmer_red_img from '../assets/images/farmer_icon_red.png';
import fence_red_img from '../assets/images/fence_icon_red.png';
import stable_red_img from '../assets/images/stable_icon_red.png';
import useResource from '../hooks/useResource';

export default function PersonalResourceBoard() {
  const {
    resourceQuery: {
      isLadoing,
      error,
      data: {
        sheep,
        cow,
        reed,
        boar,
        grain,
        soil,
        stone,
        vege,
        wood,
        food,
        profile,
        farmer_red,
        fence_red,
        stable_red,
      } = {},
    },
  } = useResource();

  return (
    <>
      <div className="basis-2/12 mb-1 flex flex-row justify-center bg-brown-100">
        <div className="basis-2/12 flex flex-col items-center pt-4 border-r-2">
          <Avatar src={profile_img} alt="avatar" size="md" variant="circular" />
          <p className="pt-2">이름</p>
        </div>

        <div className="basis-10/12 flex justify-center">
          <div className="basis-5/7 flex flex-col justify-center items-center border-r-2">
            <div className="flex flex-row pb-2">
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={wood_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">{wood}</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={soil_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={stone_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={reed_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={food_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={sheep_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={boar_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={cow_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={grain_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={vege_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
            </div>
          </div>

          <div className="basis-2/7 flex flex-col justify-center items-center">
            <div className="flex flex-row pb-2">
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={farmer_red_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={farmer_red_img}
                  alt="신생아"
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
            </div>
            <div className="flex">
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={fence_red_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={stable_red_img}
                  alt=""
                  style={{ height: '38px' }}
                />
                <p className="">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
