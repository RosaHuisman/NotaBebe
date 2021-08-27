

import api from '../middlewares/utils/api';

function handleResponse(response) {
  //console.log('handleResponse', response.data);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log('handleResponseData', data);
    return data;
  });
}

async function getById(id) {
  const tokenPresent = localStorage.getItem('MyToken');

  const requestOptions = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${tokenPresent}`,
    },
  };

  const response = await fetch(`${api.baseURL}/profile/parent/${id}`, requestOptions);
  return handleResponse(response);
}

const parentServices = () => ({
  getById,
});

export default parentServices;
