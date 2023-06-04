import axios from 'axios';

export async function getResource(id) {
  return axios.get(`http://localhost:3001/resource/1`).then(res => res.data);
}

export async function updateWood() {
  return axios.patch('http://localhost:3001/resource/1', { wood: 10 });
}

export async function getBabyState() {
  return axios.get('http://localhost:3001/resource/1').then(res => res.data);
}

export async function updateBabyState() {
  const state = await getBabyState();
  return axios.patch('http://localhost:3001/resource/1', { babyState: !state });
}

export async function getFarmBoard() {
  return axios.get('http://localhost:3001/farmBoard/1').then(res => res.data);
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

// updatePen

// updateRoom

// {
//   landId:1,
//   type:'field',
//   object: {
//     type:
//     num:
//   }
// }
