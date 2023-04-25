import React from "react";
import { Avatar } from "@material-tailwind/react";
import sheep from "../assets/images/sheep_icon.png";
import cow from "../assets/images/cow_icon.png";
import reed from "../assets/images/reed_icon.png";
import boar from "../assets/images/boar_icon.png";
import grain from "../assets/images/grain_icon.png";
import soil from "../assets/images/soil_icon.png";
import stone from "../assets/images/stone_icon.png";
import vege from "../assets/images/vege_icon.png";
import wood from "../assets/images/wood_icon.png";
import food from "../assets/images/food_icon.png";
import profile from "../assets/images/korea.png";
import farmer_red from "../assets/images/farmer_icon_red.png";
import fence_red from "../assets/images/fence_icon_red.png";
import stable_red from "../assets/images/stable_icon_red.png";

export default function PersonalResourceBoard() {
  return (
    <>
      <div className="basis-2/12 mb-1 flex flex-row justify-center bg-brown-100">
        <div className="basis-2/12 flex flex-col items-center pt-4 border-r-2">
          <Avatar src={profile} alt="avatar" size="md" variant="circular" />
          <p className="pt-2">이름</p>
        </div>

        <div className="basis-10/12 flex justify-center">
          <div className="basis-5/7 flex flex-col justify-center items-center border-r-2">
            <div className="flex flex-row pb-2">
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={wood}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={soil}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={stone}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={reed}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={food}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={sheep}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={boar}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={cow}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={grain}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/5 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={vege}
                  alt=""
                  style={{ height: "38px" }}
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
                  src={farmer_red}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={farmer_red}
                  alt="신생아"
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
            </div>
            <div className="flex">
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={fence_red}
                  alt=""
                  style={{ height: "38px" }}
                />
                <p className="">15</p>
              </div>
              <div className="basis-1/2 flex items-center justify-center flex-col mx-2">
                <img
                  className="aspect-square"
                  src={stable_red}
                  alt=""
                  style={{ height: "38px" }}
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
