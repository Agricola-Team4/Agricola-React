import React from "react";
import sheep_img from "../assets/images/sheep_icon.png";
import cow_img from "../assets/images/cow_icon.png";
import reed_img from "../assets/images/reed_icon.png";
import boar_img from "../assets/images/boar_icon.png";
import grain_img from "../assets/images/grain_icon.png";
import soil_img from "../assets/images/soil_icon.png";
import stone_img from "../assets/images/stone_icon.png";
import vege_img from "../assets/images/vege_icon.png";
import wood_img from "../assets/images/wood_icon.png";
import food_img from "../assets/images/food_icon.png";
import profile_img1 from "../assets/images/example.jpg";
import profile_img2 from "../assets/images/baby.JPG";
import farmer_red_img from "../assets/images/farmer_icon_red.png";
import fence_red_img from "../assets/images/fence_icon_red.png";
import stable_red_img from "../assets/images/stable_icon_red.png";
import farmer_blue_img from "../assets/images/farmer_icon_blue.png";
import fence_blue_img from "../assets/images/fence_icon_blue.png";
import stable_blue_img from "../assets/images/stable_icon_blue.png";
import first from "../assets/images/first_icon.png";
import useResource from "../hooks/useResource";
import ResourceInfo from "./ResourceInfo";
import Profile from "./Profile";

export default function PersonalResourceBoard({ pid }) {
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
        beg,
        farmer,
        baby,
        fence,
        stable,
      } = {},
    },
    getFirstPlayer: { data: fp },
  } = useResource(pid);
  // console.log("what is ", pid, " fp ? : ", fp);
  return (
    <>
      <div className="flex flex-row justify-center bg-brown-100 mb-1 rounded-lg p-1">
        <div className="basis-2/12 flex flex-col items-center pt-3 justify-center border-r-2">
          {/* // 테스트 필요 */}
          {fp && <img className="w-4 absolute top-1 z-10" src={first} alt="" />}
          <Profile
            img={pid === 1 ? profile_img1 : profile_img2}
            name={pid === 1 ? `dongree ${pid}` : `hyeseon ${pid}`}
          />
        </div>

        <div className="basis-10/12 flex justify-center">
          <div className="basis-5/7 flex flex-col justify-center items-center border-r-2">
            <div className="flex flex-row pb-2">
              <ResourceInfo
                img={wood_img}
                num={wood}
                alt="wood"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={soil_img}
                num={soil}
                alt="soil"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={stone_img}
                num={stone}
                alt="stone"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={reed_img}
                num={reed}
                alt="reed"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={food_img}
                num={food}
                alt="food"
                basis="basis-1/5"
              />
            </div>
            <div className="flex flex-row">
              <ResourceInfo
                img={sheep_img}
                num={sheep}
                alt="sheep"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={boar_img}
                num={boar}
                alt="boar"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={cow_img}
                num={cow}
                alt="cow"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={grain_img}
                num={grain}
                alt="grain"
                basis="basis-1/5"
              />
              <ResourceInfo
                img={vege_img}
                num={vege}
                alt="vege"
                basis="basis-1/5"
              />
            </div>
          </div>

          <div className="basis-2/7 flex flex-col justify-center items-center">
            <div className="flex flex-row pb-2">
              <ResourceInfo
                img={pid % 2 ? farmer_red_img : farmer_blue_img}
                num={farmer}
                alt="farmer_red"
                basis="basis-1/2"
              />
              <ResourceInfo
                img={pid % 2 ? farmer_red_img : farmer_blue_img}
                num={baby}
                alt="baby"
                basis="basis-1/2"
              />
            </div>
            <div className="flex">
              <ResourceInfo
                img={pid % 2 ? fence_red_img : fence_blue_img}
                num={fence}
                alt="fence_red"
                basis="basis-1/2"
              />
              <ResourceInfo
                img={pid % 2 ? stable_red_img : stable_blue_img}
                num={stable}
                alt="stable_red"
                basis="basis-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
