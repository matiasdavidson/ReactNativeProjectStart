import api from '@config/api';

export const getSongsList = () =>
  api.get('/songs').then((response) => {
    if (response.ok) {
      return response.data;
    }
    return;
  });
