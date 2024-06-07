import axiosClient from '../common/axiosClient';
import { UserDetails } from '../models/user-details-model';

export async function saveUser(req: any) {
  return axiosClient.post('/user/signup', req);
}

export async function getUsers(req: any) {
  return axiosClient.post('/security/login', req);
}

export async function allUsers() {
  return axiosClient.get('security/all');
}

export async function gethealth() {
  return axiosClient.get('/actuator/health');
}

export async function updateUser(user: UserDetails) {
  return axiosClient.post('/user/updateDetails', user);
}
