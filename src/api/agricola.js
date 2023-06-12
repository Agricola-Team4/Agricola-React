import axios from 'axios';
import { resource_R } from '../constants/resourceConstants';
import { image_R, all_Images } from '../constants/imageContants';

export async function getFarmBoard(id) {
  return axios
    .post('http://3.36.7.233:3000/boardposition/get_all_position/', {
      player_id: id,
    })
    .then(res => {
      // console.log(res.data);
      return res.data;
    });
}

// BE api
export async function setFirstPlayer() {
  return axios
    .get('http://3.36.7.233:3000/player/choose_first_player')
    .then(res => res.data);
}

export async function whoseTurn() {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get('http://3.36.7.233:3000/gamestatus/get_turn/')
    .then(res => res.data);
}

export async function amITurn(pid) {
  // 턴이 홀수이면 선 플레이어의 턴, 짝수이면 다른 플레이어의 턴
  return axios
    .get(`http://3.36.7.233:3000/gamestatus/my_turn?player_id=${pid}`)
    .then(res => res.data);
}

// Resource 관련
export async function getAllResource(pid) {
  const resource_object = {};
  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}`
    )
    .then(res => {
      return res.data;
    });

  data.forEach(item => {
    const resource_id = item.resource_id;
    const resource_num = item.resource_num;

    const resource_name = resource_R[resource_id];

    resource_object[resource_name] = resource_num;
  });

  const data2 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_family_resource/?player_id=${pid}`
    )
    .then(res => {
      return res.data;
    });
  resource_object['farmer'] = data2.adult;
  resource_object['baby'] = data2.baby;

  const data3 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_agricultural_resource/?player_id=${pid}`
    )
    .then(res => {
      return res.data;
    });
  resource_object['fence'] = data3.fence;
  resource_object['stable'] = data3.cowshed;

  return resource_object;
}

export async function getResourceNumById(pid, rid) {
  return await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}&resource_id=${rid}`
    )
    .then(res => {
      return res.data.resource_num;
    });
}

export async function getUserResource(pid) {
  return await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}`
    )
    .then(res => {
      console.log(res.data);
      return res.data;
    });
}

export async function getResource(pid, rid) {
  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}&resource_id=${rid}`
    )
    .then(res => {
      return res.data[1];
    });

  const resource_num = data.resource_num;
  // console.log("num", resource_num);

  return resource_num;
}

export async function updateOneResource(pid, rid, num) {
  return await axios
    .put('http://3.36.7.233:3000/playerresource/update_player_resource/', {
      player_id: pid,
      resource_id: rid,
      num: num,
    })
    .then(res => {
      console.log('update !!!!!!!!!!!', pid, rid, num);
      return res.data;
    });

  // const updated_resource_num = data.resource_num;
  // // console.log("updated_resource_num", updated_resource_num);

  // return updated_resource_num;
}

export async function getMyturn(pid) {
  return await axios
    .get(`http://3.36.7.233:3000/gamestatus/my_turn?player_id=${pid}`)
    .then(res => {
      return res.data.my_turn;
    });
}

export async function getTurn() {
  return await axios
    .get('http://3.36.7.233:3000/gamestatus/get_turn/')
    .then(res => {
      console.log('현재 turn값은 : ', res.data.turn);
      return res.data.turn;
    });
}

// 💪🏻 Action Board - Take Action 💪🏻
// export async function takeAction(pid, aid, cid) {
//   console.log('action id는 ', aid, ' pid는 ', pid);
//   const turn = await getTurn();
//   console.log(turn, pid, aid, cid);
//   return await axios
//     .post('http://3.36.7.233:3000/familyposition/take_action/', {
//       turn: turn,
//       player_id: pid,
//       action_id: aid,
//       card_id: cid,
//     })
//     .then(res => {
//       console.log('(turn:', turn, ') ', pid, '가 ', aid, '액션을 하였습니다.');
//       console.log('res.data : ', res.data);
//       return res.data;
//     })
//     .catch(err => {
//       console.log('오류가났대요 : ', err.response.data);
//     });
// }

export async function takeAction(pid, aid, cid, socket) {
  const turn = await getTurn();
  return new Promise((resolve, reject) => {
    const message = {
      type: 'take_action',
      turn,
      player_id: pid,
      action_id: aid,
      card_id: cid,
    };
    socket.send(JSON.stringify(message));
    console.log('takeaction');
    socket.onmessage = e => {
      const receivedData = JSON.parse(e.data);
      console.log(receivedData);
      resolve(receivedData);
    };
    socket.onerror = error => {
      reject(error);
    };
  });
}

export async function getActionBoard() {
  return axios
    .get('http://3.36.7.233:3000/actionbox/get_actions_with_pid/')
    .then(res => res.data);
}

// login
export async function login({ id, pw }) {
  console.log('id', id, ' pw', pw);
  const login_result = await axios
    .post('http://3.36.7.233:3000/account/login/', {
      user_id: id,
      user_pw: pw,
    })
    .then(res => {
      console.log('login');
      return res.data.player_id;
    })
    .catch(err => {
      return console.log('err msg : ', err.response.data);
    });

  return login_result;

  // const updated_resource_num = data.resource_num;
  // // console.log("updated_resource_num", updated_resource_num);

  // return updated_resource_num;
}

export async function buildFence(id, arr) {
  const fence_arr = await axios
    .post('http://3.36.7.233:3000/fenceposition/build_fence/', {
      player_id: id,
      fence_array: arr,
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });

  return fence_arr.position_arr;
}

export async function getPlayerHaveCard() {
  const player1_cardSet = {};
  const player2_cardSet = {};
  return await axios.get('http://3.36.7.233:3000/playercard/').then(res => {
    const data = res.data;
    const notMajor = data.filter(
      item => !(29 <= item.card_id && item.card_id < 39)
    );
    // console.log("notmajor", notMajor);

    const player1CardArr = notMajor.filter(item => item.player_id === 1);
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

    const player2CardArr = notMajor.filter(item => item.player_id === 2);
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
  });
}

export async function getPlayerActCard() {
  // player 별로 activate 되어있는 카드만 가지고 온다.
  const player1_cardSet = {};
  const player2_cardSet = {};
  return await axios.get('http://3.36.7.233:3000/playercard/').then(res => {
    const data = res.data;
    const activated = data.filter(item => item.activate === 1);
    // console.log("notmajor", notMajor);
    if (activated.length === 0) {
      return 0;
      console.log('activated undefined');
    } else {
      const player1CardArr = activated.filter(item => item.player_id === 1);
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

      const player2CardArr = activated.filter(item => item.player_id === 2);
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

export async function getMajorCard() {
  const cardSet = {};

  return await axios
    .get('http://3.36.7.233:3000/mainfacilitycard/')
    .then(res => {
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
      });

      return cardSet;
    });
}

export async function raiseAnimal(pid, type, position) {
  return await axios
    .put('http://3.36.7.233:3000/playerboardstatus/raise_animal/', {
      player_id: pid,
      animal_type: type,
      position: position,
    })
    .then(res => res.data);
}

export async function constructLand(pid, land_num) {
  return await axios
    .put('http://3.36.7.233:3000/boardposition/construct_land/', {
      player_id: pid,
      land_num: land_num,
    })
    .then(res => res.data);
}
export async function constructRoom(pid, land_num) {
  return await axios
    .put('http://3.36.7.233:3000/boardposition/construct_room/', {
      player_id: pid,
      position: land_num,
    })
    .then(res => res.data);
}
export async function constructStable(pid, land_num) {
  return await axios
    .put('http://3.36.7.233:3000/boardposition/construct_cowshed/', {
      player_id: pid,
      position: land_num,
    })
    .then(res => res.data);
}

export async function getPlayerInfo() {
  return await axios
    .get('http://3.36.7.233:3000/player/')
    .then(res => res.data);
}

export async function isRoundEnd() {
  const infos = await getPlayerInfo();
  if (infos[0].remain_num === 0 && infos[1].remain_num === 0) return true;
  return false;
}

export async function roundEnd() {
  return await axios
    .get('http://3.36.7.233:3000/gameStatus/round_end/')
    .then(res => res.data);
}

export async function updatePenInFarmboard(pid, pos) {
  return await axios
    .patch(`http://3.36.7.233:3000/boardposition/${(pid - 1) * 15 + pos}/`, {
      position: pos,
      position_type: 3,
      is_fam: false,
      vege_type: 0,
      vege_num: 0,
      animal_num: 0,
      board_id: pid,
    })
    .then(res => res.data);
}

export async function createPenposition(pid, pos) {
  return await axios
    .post('http://3.36.7.233:3000/penposition/', {
      animal_type: 0,
      max_num: 2,
      current_num: 0,
      position_list: `[${pos}]`,
      board_id: pid,
    })
    .then(res => res.data);
}

export async function getAvailableSlot(pid, type) {
  return await axios
    .get(
      `http://3.36.7.233:3000/boardposition/get_available_slots/?player_id=${pid}&type=${type}`
    )
    .then(res => res.data.available);
}

export async function firstPlayerData(pid) {
  return await axios
    .get(`http://3.36.7.233:3000/player/${pid}/`)
    .then(res => res.data.fst_player);
}

export async function activateCard(pid, cid) {
  return await axios
    .put('http://3.36.7.233:3000/playercard/activate_card/', {
      activate: 1,
      player_id: pid,
      card_id: cid,
    })
    .then(res => res.data);
}
