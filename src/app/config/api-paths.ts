const API_BASE = 'http://localhost:8888';

export const API_LOGIN = API_BASE + '/api/auth/login';
export const API_REGISTER_USER = API_BASE + '/api/employee/add';
export const API_VERIFY_ACCOUNT = API_BASE + '/api/employee/public/verify-account';
export const API_MY_PROFILE = API_BASE + '/api/employee/my-profile';
export const API_USER_PASSWORD_CHANGE = API_BASE + '/auth/change-password';
export const API_USER_GETALL = API_BASE + '/api/employee/getAll-by-params';

export const API_NEWS = API_BASE + '/api/news';
export const API_NEWS_ADD = API_BASE + '/api/news/add';
export const API_NEWS_GET_ALL = API_BASE + '/api/news/getall';
export const API_NEWS_DELETE = API_BASE + '/api/news/delete';
export const API_NEWS_GET_ID = API_BASE + '/api/news/getId';

export const API_ISSUES = API_BASE + '/api/issues';
export const API_ISSUES_ADD = API_BASE + '/api/issues/add';
export const API_ISSUES_GET_ALL = API_BASE + '/api/issues/getall';
export const API_ISSUES_DELETE = API_BASE + '/api/issues/delete';
export const API_ISSUES_GET_ID = API_BASE + '/api/issues/getId';
