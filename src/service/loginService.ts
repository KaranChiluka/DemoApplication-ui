import axiosClient from '../common/axiosClient';

export async function saveUser(req: any) {
  return axiosClient.post('/security/signup', req);
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
