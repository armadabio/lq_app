const { NODE_ENV } = process.env;
const DEV_BASE_URL = 'http://localhost:8888';

export const API_BASE_URL = NODE_ENV === 'production'
  ? ''
  : DEV_BASE_URL;

if (API_BASE_URL !== '' && NODE_ENV !== 'test') {
  console.log(`Http requests will be made to: ${API_BASE_URL}`);
}

export const LOGIN_URL = `${API_BASE_URL}/users/login`;
export const LOGOUT_URL = `${API_BASE_URL}/users/logout`;
export const MODULES_URL = `${API_BASE_URL}/modules`;
export const ENVIRONMENT_URL = `${API_BASE_URL}/environment`;
export const UPDATE_STATE_URL = `${API_BASE_URL}/updateState`;
