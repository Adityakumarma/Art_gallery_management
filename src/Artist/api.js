import axios from "axios";

const API = "http://localhost:5000/artworks";

export const getArtworks = () => axios.get(API);
export const addArtwork = (data) => axios.post(API, data);
export const getArtwork = (id) => axios.get(`${API}/${id}`);
export const updateArtwork = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteArtwork = (id) => axios.delete(`${API}/${id}`);
