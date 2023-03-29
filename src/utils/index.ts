import axios, { AxiosResponse } from 'axios';
import { BLOGII_AUTH_TOKEN_KEY } from '../constants';

export function saveToken(token: string) {
  localStorage.setItem(BLOGII_AUTH_TOKEN_KEY, token);
  return true;
}

export function getToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return token;
}

export function removeToken() {
  localStorage.removeItem(BLOGII_AUTH_TOKEN_KEY);
  return true;
}

export function isToken() {
  const token = localStorage.getItem(BLOGII_AUTH_TOKEN_KEY);
  return !!token;
}

export const uploadImage = async (image: File): Promise<AxiosResponse<any, any> | undefined> => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'todvchlu');

  try {
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dhayema8g/image/upload',
      formData
    );
    return response;
  } catch (error) {
    return undefined;
  }
};
