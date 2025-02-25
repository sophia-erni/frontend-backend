import axios from "axios";

const API_URL = "https://localhost:5127/api";

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response;
    }
    catch(error)
    {
        console.error('This is Get error Login from Api:',error)
    }
};

export const getUsersById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response;
    }
    catch(error)
    {
        console.error('This is GetUsersById error Login from Api:',error)
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/users`,user);
        return response;
    }
    catch(error)
    {
        console.error('This is Create error Login from Api:',error)
    }
};

export const updateUser = async (id,user) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`);
        return response;
    }
    catch(error)
    {
        console.error('This is UpdateUser error Login from Api:',error)
    }
};
export const deleteUser = async (id) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`);
        return response;
    }
    catch(error)
    {
        console.error('This is deleteUser error Login from Api:',error)
    }
};