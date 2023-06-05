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

  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/get_player_resource?player_id=${pid}`
    )
    .then((res) => {
      // console.log(res.data);
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

  return resource_object;
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
  console.log("num", resource_num);

  return resource_num;
}

export async function updateResource(pid, rid, num) {
  const data = await axios
    .get(
      `http://3.36.7.233:3000/playerresource/update_player_resource?player_id=${pid}&resource_id=${rid}&num_to_add=${num}`
    )
    .then((res) => {
      return res.data;
    });

  const updated_resource_num = data.resource_num;
  // console.log("updated_resource_num", updated_resource_num);

  return updated_resource_num;
}
