import axios from 'axios';

export async function getResource() {
  return axios.get('http://localhost:3001/resource/1').then(res => res.data);
}

export async function updateWood() {
  return axios.patch('http://localhost:3001/resource/1', { wood: 10 });
}
