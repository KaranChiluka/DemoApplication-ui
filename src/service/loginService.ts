import axiosClient from '../common/axiosClient';

export async function getUsers(req: any) {
  return axiosClient.post('/security/login', req);
}
