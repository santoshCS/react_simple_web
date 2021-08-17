import axios from "axios";

const Url = 'http://localhost:3003/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}