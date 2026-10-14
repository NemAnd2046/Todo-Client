import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const login = async ({ username, password }) => {
	const response = await axios.post(baseURL + "/login", { username, password });

	return response.data;
};
