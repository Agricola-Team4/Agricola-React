import axios from "axios";
import { resource_R } from "../constants/resourceConstants";
import { image_R, all_Images } from "../constants/imageContants";

export async function getFarmBoard(id) {
  return axios
    .post("http://3.36.7.233:3000/boardposition/get_all_position/", {
      player_id: 1,
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
}

// BE api
export async function setFirstPlayer() {
  return axios
    .get("http://3.36.7.233:3000/player/choose_first_player")
    .then((res) => res.data);
}

export async function whoseTurn() {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get("http://3.36.7.233:3000/gamestatus/get_turn/")
    .then((res) => res.data);
}

export async function amITurn(pid) {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get(`http://3.36.7.233:3000/gamestatus/my_turn?player_id=${pid}`)
    .then((res) => res.data);
}

// Resource 관련
export async function getAllResource(pid) {
  const resource_object = {};
  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}`
    )
    .then((res) => {
      return res.data;
    });

  data.forEach((item) => {
    const resource_id = item.resource_id;
    const resource_num = item.resource_num;

    const resource_name = resource_R[resource_id];

    resource_object[resource_name] = resource_num;
  });

  const data2 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_family_resource/?player_id=${pid}`
    )
    .then((res) => {
      return res.data;
    });
  resource_object["farmer"] = data2.adult;
  resource_object["baby"] = data2.baby;

  const data3 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_agricultural_resource/?player_id=${pid}`
    )
    .then((res) => {
      return res.data;
    });
  resource_object["fence"] = data3.fence;
  resource_object["stable"] = data3.cowshed;

  return resource_object;
}

export async function getUserResource(pid) {
  return await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export async function getResource(pid, rid) {
  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}&resource_id=${rid}`
    )
    .then((res) => {
      return res.data[1];
    });

  const resource_num = data.resource_num;
  // console.log("num", resource_num);

  return resource_num;
}

export async function updateOneResource(pid, rid, num) {
  return await axios
    .put("http://3.36.7.233:3000/playerresource/update_player_resource/", {
      player_id: pid,
      resource_id: rid,
      num: num,
    })
    .then((res) => {
      console.log("update !!!!!!!!!!!", pid, rid, num);
      return res.data;
    });

  // const updated_resource_num = data.resource_num;
  // // console.log("updated_resource_num", updated_resource_num);

  // return updated_resource_num;
}

// 💪🏻 Action Board - Take Action 💪🏻
export async function takeAction({ pid, aid }) {
  console.log("action id는 ", aid, " pid는 ", pid);
  const isYourTurn = await axios
    .get(`http://3.36.7.233:3000/gamestatus/my_turn?player_id=${pid}`)
    .then((res) => {
      return res.data.my_turn;
    });

  if (isYourTurn) {
    console.log(pid, "턴이니? : ", isYourTurn);
    // take action을 하려는 플레이어가 지금 자기 차례이다.
    const turn = await axios
      .get("http://3.36.7.233:3000/gamestatus/get_turn/")
      .then((res) => {
        console.log("현재 turn값은 : ", res.data.turn);
        return res.data.turn;
      });

    return await axios
      .post("http://3.36.7.233:3000/familyposition/take_action/", {
        turn: turn,
        player_id: pid,
        action_id: aid,
      })
      .then((res) => {
        console.log(
          "(turn:",
          turn,
          ") ",
          pid,
          "가 ",
          aid,
          "액션을 하였습니다."
        );
        console.log("res.data : ", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("오류가났대요 : ", err.response.data);
      });
  } else {
    // prompt에 지금은 player __의 차례가 아닙니다.
    // 또는 소켓 사용시 특정 player의 프롬프트에만 보내줄 수 있으면 그렇게 하기
    return console.log("지금은 ", pid, "의 차례가 아닙니다.");
  }
}

export async function getActionBoard() {
  return axios.get("http://3.36.7.233:3000/actionbox").then((res) => res.data);
}

// login
export async function login({ id, pw }) {
  console.log("id", id, " pw", pw);
  const login_result = await axios
    .post("http://3.36.7.233:3000/account/login/", {
      user_id: id,
      user_pw: pw,
    })
    .then((res) => {
      console.log("login");
      return res.data.player_id;
    })
    .catch((err) => {
      return console.log("err msg : ", err.response.data);
    });

  return login_result;

  // const updated_resource_num = data.resource_num;
  // // console.log("updated_resource_num", updated_resource_num);

  // return updated_resource_num;
}

export async function buildFence(id, arr) {
  const fence_arr = await axios
    .post("http://3.36.7.233:3000/fenceposition/build_fence/", {
      player_id: id,
      fence_array: arr,
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  return fence_arr.position_arr;
}

export async function getPlayerHaveCard() {
  const player1_cardSet = {};
  const player2_cardSet = {};
  return await axios.get("http://3.36.7.233:3000/playercard/").then((res) => {
    const data = res.data;
    const notMajor = data.filter(
      (item) => !(29 <= item.card_id && item.card_id < 39)
    );
    // console.log("notmajor", notMajor);

    const player1CardArr = notMajor.filter((item) => item.player_id === 1);
    // console.log("arr", player1CardArr);
    player1CardArr.map((item, index) => {
      const image_key = image_R[item.card_id];
      const imagePath = all_Images[image_key];
      // console.log(index, " ?? ", image_key, " ?? ", imagePath);
      player1_cardSet[image_key] = { id: item.card_id, path: imagePath };
    });
    // console.log("arr1", player1_cardSet);

    const player2CardArr = notMajor.filter((item) => item.player_id === 2);
    player2CardArr.map((item, index) => {
      const image_key = image_R[item.card_id];
      const imagePath = all_Images[image_key];
      // console.log(index, " ??? ", image_key, " ??? ", imagePath);
      // player2_cardSet.push({ image_key: image_key, path: imagePath });
      player2_cardSet[image_key] = { id: item.card_id, path: imagePath };
    });
    // console.log("arr2", player2_cardSet);

    return { p1: player1_cardSet, p2: player2_cardSet };
  });
}

export async function getPlayerActCard() {
  // player 별로 activate 되어있는 카드만 가지고 온다.
  const player1_cardSet = {};
  const player2_cardSet = {};
  return await axios.get("http://3.36.7.233:3000/playercard/").then((res) => {
    const data = res.data;
    const activated = data.filter((item) => item.activate === 1);
    // console.log("notmajor", notMajor);
    if (activated.length === 0) {
      return 0;
      console.log("activated undefined");
    } else {
      const player1CardArr = activated.filter((item) => item.player_id === 1);
      // console.log("arr", player1CardArr);
      player1CardArr.map((item, index) => {
        const image_key = image_R[item.card_id];
        const imagePath = all_Images[image_key];
        // console.log(index, " ?? ", image_key, " ?? ", imagePath);
        player1_cardSet[image_key] = {
          id: item.card_id,
          path: imagePath,
          activated: item.activate,
        };
      });
      // console.log("arr1", player1_cardSet);

      const player2CardArr = activated.filter((item) => item.player_id === 2);
      player2CardArr.map((item, index) => {
        const image_key = image_R[item.card_id];
        const imagePath = all_Images[image_key];
        // console.log(index, " ??? ", image_key, " ??? ", imagePath);
        // player2_cardSet.push({ image_key: image_key, path: imagePath });
        player2_cardSet[image_key] = {
          id: item.card_id,
          path: imagePath,
          activated: item.activate,
        };
      });
      // console.log("arr2", player2_cardSet);

      return { p1: player1_cardSet, p2: player2_cardSet };
    }
  });
}
