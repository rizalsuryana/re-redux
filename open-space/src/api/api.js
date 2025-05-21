import { BASE_URL } from '../config';
import { tokenHandler } from '../utils/accessToken';

export const api = {
  baseUrl: BASE_URL,

  _fetch: async (url, options = {}) => {
    const token = tokenHandler.get();

    const headers = {
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      return response;
    } catch (error) {
      throw new Error('Network request failed. Please check your connection.');
    }
  },

  _handleResponse: async (response) => {
    const contentType = response.headers.get('Content-Type');

    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid response format. Expected JSON.');
    }

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (!response.ok) {
      throw new Error(message || 'Server returned an error.');
    }

    if (status !== 'success') {
      throw new Error(message || 'Unknown API error.');
    }

    return data;
  },

  get: async ({ url, options = {} }) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
      ...options,
      method: 'GET',
    });
    return await api._handleResponse(response);
  },

  post: async (url, body, options = {}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
    return await api._handleResponse(response);
  },

  put: async (url, body, options = {}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
    return await api._handleResponse(response);
  },

  delete: async (url, options = {}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
      ...options,
      method: 'DELETE',
      headers: {
        ...options.headers,
      },
    });
    return await api._handleResponse(response);
  },
};

export const makeResponseFailed = ({
  status = 'failed',
  message = 'Something went wrong',
  data = null,
} = {}) => ({
  status,
  message,
  data,
});
