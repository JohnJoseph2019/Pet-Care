import api from "./apiConfig";

export const getAllPets = async () => {
  try {
    const resp = await api.get("/pets");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getOnePet = async (id) => {
  try {
    const resp = await api.get(`/pets/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createPet = async (petData) => {
  try {
    const resp = await api.post("/pets", { pet: petData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updatePet = async (id, petData) => {
  try {
    const resp = await api.put(`/pets/${id}`, { pet: petData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deletePet = async (id) => {
  try {
    const resp = await api.delete(`/pets/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};
