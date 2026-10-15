import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const login = async ({ username, password }) => {
	const response = await axios.post(baseURL + "/login", { username, password });

	return response.data;
};

export const readTodos = async () => {
	const response = await axios.get(baseURL);

	return response.data;
};

export const addTodo = async ({ task }) => {
	const response = await axios.post(baseURL, { task });

	return response.data;
};

export const deleteTodo = async ({ id }) => {
	const response = await axios.delete(baseURL + `/${id}`);

	return response.data;
};

export const patchTodo = async ({ id }) => {
	const response = await axios.patch(baseURL + `/${id}`);

	return response.data;
};
