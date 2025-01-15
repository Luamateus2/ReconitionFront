import axios from 'axios';

const API_URL = 'http://localhost:5000/upload';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar a imagem: ' + error.message);
  }
};
