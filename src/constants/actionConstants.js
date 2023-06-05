export const action = [
  {
    title: '농장 확장',
    childTags: (
      <div className="flex flex-col items-center h-full">
        <div className="basis-3/6">
          <div className="flex items-center basis-1/3 justify-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-1/10" src="/img/wood_icon.png" alt="wood" />
            <p className=" font-bold ml-1 mr-0.5">2</p>
            <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img
              className="w-1/5"
              src="/img/woodRoom_icon.png"
              alt="woodRoom"
            />
          </div>
          <div className="flex items-center basis-1/3 justify-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-1/10" src="/img/soil_icon.png" alt="soil" />
            <p className=" font-bold ml-1 mr-0.5">2</p>
            <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img
              className="w-1/5"
              src="/img/soilRoom_icon.png"
              alt="soilRoom"
            />
          </div>
          <div className="flex items-center basis-1/3 justify-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-1/10" src="/img/stone_icon.png" alt="stone" />
            <p className=" font-bold ml-1 mr-0.5">2</p>
            <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img
              className="w-1/5"
              src="/img/stoneRoom_icon.png"
              alt="ustoneRoom"
            />
          </div>
        </div>
        <p className="mx-1 font-bold my-1 basis-1/6">and/or</p>
        <div className="flex items-center justify-center basis-2/6">
          <p className=" font-bold ml-1 mr-0.5">2</p>
          <img className="w-1/6" src="/img/wood_icon.png" alt="wood" />
          <p className="mx-1 font-bold text-xs">→</p>
          <img className="w-1/6" src="/img/stable_icon_red.png" alt="stable" />
        </div>
      </div>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '회합 장소',
    childTags: (
      <>
        <img className="w-1/6" src="/img/first_icon.png" alt="first" />
        <p className="mx-1 font-bold">and/or</p>
        <>
          <p className="font-bold mr-0.5">1</p>
          <img
            className="w-1/4"
            src="/img/subEqCard_icon.png"
            alt="subEqCard"
          />
        </>
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '곡식 종자',
    childTags: (
      <>
        <p className="font-bold mr-0.5">+1</p>
        <img className="w-1/4" src="/img/grain_icon.png" alt="grain" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '숲',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">3</p>
        <img className="w-1/3" src="/img/wood_icon.png" alt="wood" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '농지',
    childTags: (
      <img className="w-1/3" src="/img/farmland_icon.png" alt="farmland" />
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '흙 채굴장🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/4" src="/img/soil_icon.png" alt="soil" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '교습',
    childTags: (
      <div className="flex flex-col">
        <p className="font-bold">직업당</p>
        <div className="flex items-center justify-center">
          <>
            <p className="font-bold mr-0.5">1</p>
            <img className="w-1/4" src="/img/food_icon.png" alt="food" />
          </>
          <p className="mx-1 text-lg">→</p>
          <>
            <p className="font-bold mr-0.5">1</p>
            <img className="w-1/4" src="/img/jobCard_icon.png" alt="jobCard" />
          </>
        </div>
      </div>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '갈대밭🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '납품팔이',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">+2</p>
        <img className="w-1/4" src="/img/food_icon.png" alt="food" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '낚시🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/4" src="/img/food_icon.png" alt="food" />
      </>
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '양시장🔻',
    childTags: (
      <>
        <p className=" text-xl font-bold mr-0.5">1</p>
        <img className="w-1/3" src="/img/sheep_icon.png" alt="sheep" />
      </>
    ),
    onClick: () => {
      console.log('hello1 !!!!!');
    },
  },
  {
    title: '울타리',
    childTags: (
      <div className="flex items-center justify-center">
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
        <p className="mx-1 text-2xl font-bold">→</p>
        <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
      </div>
    ),
    onClick: () => {
      console.log('hello2 !!!!!');
    },
  },
  {
    title: '주요설비',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img
          className="w-1/4"
          src="/img/mainEqCard_icon.png"
          alt="mainEqCard"
        />
        <p className="mx-1 text-lg font-bold">or</p>
        <img className="w-1/4" src="/img/subEqCard_icon.png" alt="subEqCard" />
      </>
    ),
    onClick: () => {
      console.log('hello3 !!!!!');
    },
  },
  {
    title: '곡식활용',
    childTags: (
      <>
        <img className="w-1/4" src="/img/grainVege_icon.png" alt="grainVege" />
        <p className="mx-1 font-bold">and/or</p>
        <img className="w-1/4" src="/img/bread_icon.png" alt="bread" />
      </>
    ),
    onClick: () => {
      console.log('hello4 !!!!!');
    },
  },
  {
    title: '서부 채석장🔻',
    childTags: (
      <>
        <p className=" text-xl font-bold mr-0.5">1</p>
        <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
      </>
    ),
    onClick: () => {
      console.log('hello5 !!!!!');
    },
  },
  {
    title: '기본 가족 늘리기',
    childTags: (
      <>
        <img className="w-1/4" src="/img/addPerson_icon.png" alt="addPerson" />
        <p className="mx-1 font-bold text-xs">한 후에</p>
        <p className="mr-0.5 text-lg font-bold">1</p>
        <img className="w-1/4" src="/img/subEqCard_icon.png" alt="subEqCard" />
      </>
    ),
    onClick: () => {
      console.log('hello6 !!!!!');
    },
  },

  {
    title: '집개조',
    childTags: (
      <div className="flex flex-col items-center h-full">
        <div className="flex items-center justify-center basis-2/5">
          <p className=" font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
          <p className="mx-1 font-bold text-lg">+</p>
          <img
            className="w-1/2"
            src="/img/upgradeRoom_icon.png"
            alt="upgradeRoom"
          />
        </div>
        <p className="font-bold text-xs basis-1/5 flex items-center">한 후에</p>
        <div className="flex items-center justify-center basis-2/5">
          <p className=" font-bold mr-0.5">1</p>
          <img
            className="w-1/4"
            src="/img/mainEqCard_icon.png"
            alt="mainEqCard"
          />
          <p className="mx-1  font-bold">or</p>
          <img
            className="w-1/4"
            src="/img/subEqCard_icon.png"
            alt="subEqCard"
          />
        </div>
      </div>
    ),
    onClick: () => {
      console.log('hello7 !!!!!');
    },
  },
  {
    title: '채소 종자',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">+1</p>
        <img className="w-1/3" src="/img/vege_icon.png" alt="vegetable" />
      </>
    ),
    onClick: () => {
      console.log('hello8 !!!!!');
    },
  },
  {
    title: '돼지 시장🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/3" src="/img/boar_icon.png" alt="boar" />
      </>
    ),
    onClick: () => {
      console.log('hello9 !!!!!');
    },
  },
  {
    title: '소 시장🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/3" src="/img/cow_icon.png" alt="cow" />
      </>
    ),
    onClick: () => {
      console.log('hello10 !!!!!');
    },
  },
  {
    title: '동부 채석장🔻',
    childTags: (
      <>
        <p className=" text-lg font-bold mr-0.5">1</p>
        <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
      </>
    ),
    onClick: () => {
      console.log('hello11 !!!!!');
    },
  },
  {
    title: '급한 가족 늘리기',
    childTags: (
      <img className="w-1/3" src="/img/addPerson2_icon.png" alt="addPerson2" />
    ),
    onClick: () => {
      console.log('hello12 !!!!!');
    },
  },
  {
    title: '밭 농사',
    childTags: (
      <div className="flex flex-col items-center h-full py-1">
        <div className="w-1/3 basis-2/5 flex items-center">
          <img src="/img/farmland_icon.png" alt="farmland" />
        </div>
        <p className="font-bold basis-1/5">and/or</p>
        <div className="w-1/3 basis-2/5 flex items-center">
          <img src="/img/grainVege_icon.png" alt="grainVege" />
        </div>
      </div>
    ),
    onClick: () => {
      console.log('hello13 !!!!!');
    },
  },
  {
    title: '농장 개조',
    childTags: (
      <div className="flex flex-col items-center h-full">
        <div className="flex items-center justify-center basis-2/5">
          <p className="font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
          <p className="mx-1 font-bold text-lg">+</p>
          <img
            className="w-1/2"
            src="/img/upgradeRoom_icon.png"
            alt="upgradeRoom"
          />
        </div>
        <p className="mx-1 font-bold text-xs basis-1/5 flex items-center">
          한 후에
        </p>
        <div className="flex items-center justify-center basis-2/5">
          <p className="font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
          <p className="mx-1 text-lg">→</p>
          <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
        </div>
      </div>
    ),
    onClick: () => {
      console.log('hello13 !!!!!');
    },
  },
];
