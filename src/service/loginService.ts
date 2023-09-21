import axiosClient from '../common/axiosClient';

export async function getUsers() {
  return axiosClient.get('/post');
}
