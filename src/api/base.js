import axios from 'axios';
// import { ResponseWithError } from 'helpers/typesHelpers';
import config from './config';

const headers = {
  Accept: "'application/json', 'multipart/form-data'",
  'Content-Type': 'application/json'
};

const default_config = (url) => ({
  baseURL: url,
  headers
});

const timeout = 5000;

class ClientAPI {
  client;
  baseURL;
  token;
  errorListener;

  constructor(name, baseURL) {
    if (!baseURL) {
      // eslint-disable-next-line
      // throw `${name} baseURL can't be undefined`;
    }

    this.baseURL = baseURL;
    this.token = '';
    this.client = axios.create({
      ...default_config(baseURL),
      timeout,
      headers: {
        ...headers
      }
    });
    this.errorListener = () => { };
    this.addMiddleware()
  }

  onErrorListener(cb) {
    this.errorListener = cb;
  }

  setToken(token) {
    this.token = token;
    this.client = axios.create({
      ...default_config(this.baseURL),
      timeout,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers
      }
    });
    this.addMiddleware()
  }

  setBaseUrl(url) {
    this.baseURL = url;
    this.client = axios.create({
      ...default_config(url),
      timeout,
      headers: {
        ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        ...headers
      }
    });
    this.addMiddleware()
  }

  addMiddleware() {
    this.client.interceptors.response.use(
      response => {
        if (response.headers['content-length'] === 0 || !response.data) {
          return Promise.reject('Network Error');
        }

        return response;
      },
      error => {
        //update token
        if (
          error.response.status === 401 &&
          error.response.data &&
          error.response.data.message === 'Token Expired'
        ) {
          //set the new token
          this.errorListener();

          return axios.request(error.config);
        }

        return Promise.reject(error);
      }
    );
  }

  async makeRequest(
    method,
    ...params
  ) {
    if (!this.client) {
      // eslint-disable-next-line
      throw 'Client has not initialized';
    }

    const methods = {
      GET: this.client.get,
      PATCH: this.client.patch,
      POST: this.client.post,
      PUT: this.client.put,
      DELETE: this.client.delete
    };
    
    if (methods.hasOwnProperty(method)) {
      const fn = methods[method];

      try {
        const response = await fn(...params);
        if (
          response.status === 204 &&
          (response.data) === ''
        ) {
          return {
            success: true
          }
        }
        return response.data;
      } catch (error) {
        return error;
      }
    }

    return 'error';
  }

  async get(url, config) {
    return this.makeRequest('GET', url, config);
  }

  // async post(url, data, config) {
  //   return this.makeRequest(Methods.POST, url, data, config);
  // }

  // async put(url, data, config) {
  //   return this.makeRequest(Methods.PUT, url, data, config);
  // }

  // async patch(url, data, config) {
  //   return this.makeRequest(Methods.PATCH, url, data, config);
  // }

  // async delete(url, data, config) {
  //   return this.makeRequest(Methods.DELETE, url, data, config);
  // }
}
console.log(config);
const apiClient = new ClientAPI('API_CLIENT', config.API_URL);

export { apiClient };
