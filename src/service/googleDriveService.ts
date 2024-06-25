import axiosClient from '../common/axiosClient';

export async function getVideosfiles() {
  return axiosClient.get('drive/folders');
}

export async function getVideos(courseId: any) {
  return axiosClient.get('/drive/allChildrenList', { params: { folderId: courseId } });
}
