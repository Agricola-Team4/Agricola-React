import axios from "axios";
import { resource_R } from "../constants/resourceConstants";

export async function getBabyState() {
  return axios.get("http://localhost:3001/resource/1").then((res) => res.data);
}

export async function updateBabyState() {
  const state = await getBabyState();
  return axios.patch("http://localhost:3001/resource/1", { babyState: !state });
}

export async function getFarmBoard() {
  return axios.get("http://localhost:3001/farmBoard/1").then((res) => res.data);
}

export async function createLand(landId, landType) {
  return axios.patch(`http://localhost:3001/farmBoard/1/${landId}`, {
    type: landType,
  });
}

export async function updateField(landId, type, num) {
  return axios.patch(`http://localhost:3001/farmBoard/1/${landId}`, {
    object: {},
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
  console.log("api pid", pid);
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
    // console.log(resource_id, resource_name);

    resource_object[resource_name] = resource_num;
    // console.log("res", resource_object);
  });

  const data2 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_family_resource/?player_id=${pid}`
    )
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  resource_object["farmer"] = data2.adult;
  resource_object["baby"] = data2.baby;

  const data3 = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_agricultural_resource/?player_id=${pid}`
    )
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  resource_object["fence"] = data3.fence;
  resource_object["stable"] = data3.cowshed;

  // console.log("res_fin", resource_object);
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
  const turn = await axios
    .get("http://3.36.7.233:3000/gamestatus/get_turn/")
    .then((res) => {
      console.log("get_turn: ", res.data.turn);
      return res.data.turn;
    });

  console.log("??", pid, aid);
  return await axios
    .post("http://3.36.7.233:3000/familyposition/take_action/", {
      turn: turn,
      player_id: pid,
      action_id: aid,
    })
    .then((res) => {
      console.log("(turn:", turn, ") ", pid, "가 ", aid, "액션을 하였습니다.");
      return res.data;
    })
    .catch(() => {
      console.log("오류가났대요");
    });
}
