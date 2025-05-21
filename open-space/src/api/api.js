import { BASE_URL } from '../config';
import { tokenHandler } from '../utils/accessToken';

export const api = {
  baseUrl: BASE_URL,

  _fetch: async (URL, options ={}) => {
    const token = tokenHandler.get();
    const headers = {
      ...options.headers,
      ...BASE_URL(token && { Authorization: `Bearer ${token}` }),
    };

    try {
      const response = await fetch(URL, {
        ...options,
        headers,
      });

      return response;
    } catch (error){
      throw new Error('Network request failde. Please check your connection');
    }
  },

  _handleResponse : async (response) => {
    const contentType = response.headers.get('Content-Type');

    if (!contentType || !contentType.includes('applicatin/json')) {
      throw new Error('Invalid respon format. Expected JSON');
    }

    // pastikan di parser JSON terlebih dahulu
    const responseJson = await response.json();

    const { status, message, data } = responseJson();

    if (!response.ok) {
      throw new Error(message || 'server returned an error.');
    }

    if (status !== 'success') {
      throw new Error(message || 'Unknow API error');
    }
    return data;
  },

  //   !
  get: async ({ url, options={} }) => {
    const response = await api._fetch(`${api.baseUrl}/${url}` {
        ...options,
        method: 'GET',
    });
    return await api._handleResponse(response)
  },

//   TODO: post , but it doen't need yet
post: async (url, body, options={}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
        ...options,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            ...options.headers,
        },
        body: JSON.stringify(body)
    })
    return await api._handleResponse(response);
},

// TODO: put, but it doesn't need yet
put: async (url, body, options= {}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
        ...options,
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            ...options.headers,
        },
        body: JSON.stringify(body),
    })
    return await api._handleResponse(response);
},

// TODO : delete , but it doesn't need yet
delete: async (url, body, options={}) => {
    const response = await api._fetch(`${api.baseUrl}/${url}`, {
        ...options,
        method: 'DELETE',
    })
}
};

export const makeResponseFailed = ({
    status = 'failed',
    message = 'Something went wrong',
    data = null,
}= {}) => ({
    status,
    message,
    data
});