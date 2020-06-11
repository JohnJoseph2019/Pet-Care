import api from './apiConfig';

export const getAllPets = async () => {
  const resp = await api.get('/pets');
  return resp.data;
}

export const getOnePet = async (id) => {
  const resp = await api.get(`/pets/${id}`);
  return resp.data;
}

export const createPet = async (petData) => {
  const resp = await api.post('/pets', { pet: petData });
  return resp.data;
}

export const updatePet = async (id, petData) => {
  const resp = await api.put(`/pets/${id}`, { pet: petData });
  return resp.data;
}

export const deletePet = async (id) => {
  const resp = await api.delete(`/pets/${id}`);
  return resp
}
