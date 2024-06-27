import axiosClient from '../common/axiosClient';

export async function getCurrentUser(token: any) {
  return axiosClient.get('/user/currentUser', { params: { token } });
}
