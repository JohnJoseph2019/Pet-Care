import api from './apiConfig'


export const getAllAppointments = async (pet_id) => {
  const resp = await api.get(`/pets/${pet_id}/appointments`);
  return resp.data;
}

export const createAppointment = async (pet_id, appointmentData) => {
  const resp = await api.post(`/pets/${pet_id}/appointments`, { appointment: appointmentData });
  return resp.data;
}

export const deleteAppointment = async (pet_id, id) => {
  const resp = await api.delete(`/pets/${pet_id}/appointments/${id}`);
  return resp
}