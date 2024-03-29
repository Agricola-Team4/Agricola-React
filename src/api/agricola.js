import axios from "axios";
import { resource_R } from "../constants/resourceConstants";
import { image_R, all_Images } from "../constants/imageContants";

// export async function getFarmBoard(id, socket) {
//   return new Promise((resolve, reject) => {
//     const message = {
//       type: 'get_all_position',
//       player_id: id,
//     };
//     socket.send(JSON.stringify(message));
//     socket.onmessage = e => {
//       const receivedData = JSON.parse(e.data);
//       resolve(receivedData);
//     };
//     socket.onerror = error => {
//       reject(error);
//     };
//   });
// }
export function getFarmBoard(id) {
  return axios
    .post(`${process.env.REACT_APP_URL}/boardposition/get_all_position/`, {
      player_id: id,
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
}

// BE api
export function setFirstPlayer() {
  return axios
    .get(`${process.env.REACT_APP_URL}/player/choose_first_player`)
    .then((res) => res.data);
}

export function whoseTurn() {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get(`${process.env.REACT_APP_URL}/gamestatus/get_turn/`)
    .then((res) => res.data);
}

export function amITurn(pid) {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get(`${process.env.REACT_APP_URL}/gamestatus/my_turn?player_id=${pid}`)
    .then((res) => res.data);
}

// Resource 관련    --  test해보자!
export async function getAllResource(pid) {
  const resource_object = {};
  const [data1, data2, data3] = await Promise.all([
    axios
      .get(
        `${process.env.REACT_APP_URL}/playerresource/get_player_resource?player_id=${pid}`
      )
      .then((res) => {
        return res.data;
      }),
    axios
      .get(
        `${process.env.REACT_APP_URL}/playerresource/get_family_resource/?player_id=${pid}`
      )
      .then((res) => {
        return res.data;
      }),
    axios
      .get(
        `${process.env.REACT_APP_URL}/playerresource/get_agricultural_resource/?player_id=${pid}`
      )
      .then((res) => {
        return res.data;
      }),
  ]);

  // const data = await axios
  //   .get(
  //     `${process.env.REACT_APP_URL}/playerresource/get_player_resource?player_id=${pid}`
  //   )
  //   .then(res => {
  //     return res.data;
  //   });

  data1.forEach((item) => {
    const resource_id = item.resource_id;
    const resource_num = item.resource_num;

    const resource_name = resource_R[resource_id];

    resource_object[resource_name] = resource_num;
  });

  // const data2 = await axios
  //   .get(
  //     `${process.env.REACT_APP_URL}/playerresource/get_family_resource/?player_id=${pid}`
  //   )
  //   .then(res => {
  //     return res.data;
  //   });
  resource_object["farmer"] = data2.adult;
  resource_object["baby"] = data2.baby;

  // const data3 = await axios
  //   .get(
  //     `${process.env.REACT_APP_URL}/playerresource/get_agricultural_resource/?player_id=${pid}`
  //   )
  //   .then(res => {
  //     return res.data;
  //   });
  resource_object["fence"] = data3.fence;
  resource_object["stable"] = data3.cowshed;

  return resource_object;
}

// * awiat 없어도 될듯? *
export function getResourceNumById(pid, rid) {
  return axios
    .get(
      `${process.env.REACT_APP_URL}/playerresource/get_player_resource?player_id=${pid}&resource_id=${rid}`
    )
    .then((res) => {
      return res.data.resource_num;
    });
}

export function getUserResource(pid) {
  return axios
    .get(
      `${process.env.REACT_APP_URL}/playerresource/get_player_resource?player_id=${pid}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

// test 해보자!
export function getResource(pid, rid) {
  return axios
    .get(
      `${process.env.REACT_APP_URL}/playerresource/get_player_resource?player_id=${pid}&resource_id=${rid}`
    )
    .then((res) => {
      return res.data[1].resource_num;
    });
}

// async 키워드 제거
export function updateOneResource(pid, rid, num, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "update_player_resource",
      player_id: pid,
      resource_id: rid,
      num: num,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getMyturn(pid) {
  return axios
    .get(`${process.env.REACT_APP_URL}/gamestatus/my_turn?player_id=${pid}`)
    .then((res) => {
      return res.data.my_turn;
    });
}

export function getTurn() {
  return axios
    .get(`${process.env.REACT_APP_URL}/gamestatus/get_turn/`)
    .then((res) => {
      console.log("현재 turn값은 : ", res.data.turn);
      return res.data.turn;
    });
}

export async function takeAction(pid, aid, cid, socket, queryClient) {
  const turn = await getTurn();
  return new Promise((resolve, reject) => {
    const message = {
      type: "take_action",
      turn,
      player_id: pid,
      action_id: aid,
      card_id: cid,
    };
    console.log(socket);
    socket.send(JSON.stringify(message));
    console.log("takeaction");
    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
      queryClient.invalidateQueries(["actionBoard"]);
      queryClient.invalidateQueries(["farmBoard"]);
      queryClient.invalidateQueries(["resource"]);
      queryClient.invalidateQueries(["haveCardData"]);
      queryClient.invalidateQueries(["majorCardData"]);
      queryClient.invalidateQueries(["actCardData"]);
      queryClient.invalidateQueries(["firstPlayer"]);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getActionBoard() {
  return axios
    .get(`${process.env.REACT_APP_URL}/actionbox/get_actions_with_pid/`)
    .then((res) => res.data);
}

// login
export function login({ id, pw }) {
  return axios
    .post(`${process.env.REACT_APP_URL}/account/login/`, {
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
}

// export async function login({ id, pw }, socket) {
//   return new Promise((resolve, reject) => {
//     const message = {
//       type: 'login',
//       user_id: id,
//       user_pw: pw,
//     };
//     socket.send(JSON.stringify(message));

//     socket.onmessage = e => {
//       const receivedData = JSON.parse(e.data);

//       if (receivedData.action === 'login_response') {
//         resolve(receivedData.data);
//       }
//     };
//     socket.onerror = error => {
//       reject(error);
//     };
//   });
// }

export function buildFence(id, arr, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "build_fence",
      player_id: id,
      fence_array: JSON.stringify(arr),
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getPlayerHaveCard() {
  const player1_cardSet = {};
  const player2_cardSet = {};
  return axios.get(`${process.env.REACT_APP_URL}/playercard/`).then((res) => {
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
      player1_cardSet[image_key] = {
        id: item.card_id,
        path: imagePath,
        activated: item.activate,
      };
      return 0;
    });
    // console.log("arr1", player1_cardSet);

    const player2CardArr = notMajor.filter((item) => item.player_id === 2);
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
      return 0;
    });
    // console.log("arr2", player2_cardSet);

    return { p1: player1_cardSet, p2: player2_cardSet };
  });
}

export function getPlayerActCard() {
  // player 별로 activate 되어있는 카드만 가지고 온다.
  const player1_cardSet = {};
  const player2_cardSet = {};
  return axios.get(`${process.env.REACT_APP_URL}/playercard/`).then((res) => {
    const data = res.data;
    const activated = data.filter((item) => item.activate === 1);
    // console.log("notmajor", notMajor);
    if (activated.length === 0) {
      return 0;
      // console.log('activated undefined');
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
        return 0;
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
        return 0;
      });
      // console.log("arr2", player2_cardSet);

      return { p1: player1_cardSet, p2: player2_cardSet };
    }
  });
}

export function getMajorCard() {
  const cardSet = {};

  return axios
    .get(`${process.env.REACT_APP_URL}/mainfacilitycard/`)
    .then((res) => {
      const major = res.data;

      major.map((item, index) => {
        const image_key = image_R[item.card_id];
        const imagePath = all_Images[image_key];
        // player_id가 1,2이면 activated 1
        // player_id가 0이면 activated 0
        let activated;
        if ((item.player_id === 1) | (item.player_id === 2)) {
          activated = 1;
        } else {
          activated = 0;
        }
        // console.log(index, " ?? ", image_key, " ?? ", imagePath);
        cardSet[image_key] = {
          id: item.card_id,
          path: imagePath,
          activated: activated,
        };
        return 0;
      });

      return cardSet;
    });
}

export function raiseAnimal(pid, type, position, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "raise_animal",
      player_id: pid,
      animal_type: type,
      position: position,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e.data);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function constructLand(pid, land_num, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "construct_land",
      player_id: pid,
      land_num: land_num,
    };
    console.log(socket);
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);
      resolve(receivedData.data);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function constructRoom(pid, land_num, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "construct_room",
      player_id: pid,
      position: land_num,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);

      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}
export function constructStable(pid, land_num, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "construct_cowshed",
      player_id: pid,
      position: land_num,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getPlayerInfo() {
  return axios
    .get(`${process.env.REACT_APP_URL}/player/`)
    .then((res) => res.data);
}

export async function isRoundEnd() {
  const infos = await getPlayerInfo();
  if (infos[0].remain_num === 0 && infos[1].remain_num === 0) return true;
  return false;
}

// export async function roundEnd() {
//   console.log('round_end');
//   return await axios
//     .get(`${process.env.REACT_APP_URL}/gamestatus/round_end/`)
//     .then(res => res.data);
// }

export function roundEnd(socket, queryClient) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "round_end",
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
      queryClient.invalidateQueries(["farmBoard"]);
      queryClient.invalidateQueries(["actionBoard"]);
      queryClient.invalidateQueries(["roundArray"]);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getCalculateScore(pid, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "get_calculate_score",
      player_id: pid,
    };
    console.log("hello");
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

// export async function getCalculateScore(pid) {
//   return await axios
//     .get(
//       `${process.env.REACT_APP_URL}/playerboardstatus/calculate_score/?player_id=${pid}/`
//     )
//     .then(res => res.data);
// }

export function getRoundArray() {
  return axios
    .get(`${process.env.REACT_APP_URL}/fstplayer/get_round_array/`)
    .then((res) => res.data);
}

export function periodEnd(socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "period_end",
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getCaclulateScore(pid, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "calculate_score",
      player_id: pid,
    };
    console.log("adsfasdf");
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getCurrentRound() {
  return axios
    .get(`${process.env.REACT_APP_URL}/gamestatus/`)
    .then((res) => res.data);
}

export function updatePenInFarmboard(pid, pos, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "patch_boardposition",
      id: `${(pid - 1) * 15 + pos}`,
      position: pos,
      position_type: 3,
      is_fam: false,
      vege_type: 0,
      vege_num: 0,
      animal_num: 0,
      board_id: pid,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);

      resolve(receivedData.data);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function createPenposition(
  pid,
  pos,
  socket,
  updateFenceposition,
  fencePosition,
  setFencePosition
) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "post_penposition",
      animal_type: 0,
      max_num: 2,
      current_num: 0,
      position_list: `[${pos}]`,
      board_id: pid,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      console.log(e);
      const receivedData = JSON.parse(e.data);
      resolve(receivedData.data);
      updateFenceposition(pos, fencePosition, setFencePosition);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function getAvailableSlot(pid, type) {
  return axios
    .get(
      `${process.env.REACT_APP_URL}/boardposition/get_available_slots/?player_id=${pid}&slot_type=${type}`
    )
    .then((res) => res.data.available);
}

export function firstPlayerData(pid) {
  return axios
    .get(`${process.env.REACT_APP_URL}/player/${pid}/`)
    .then((res) => res.data.fst_player);
}

export function activateCard(pid, cid, socket) {
  return new Promise((resolve, reject) => {
    const message = {
      type: "activate_card",
      activate: 1,
      player_id: pid,
      card_id: cid,
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = (e) => {
      const receivedData = JSON.parse(e.data);
      resolve(receivedData.data);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}
