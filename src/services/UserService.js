import BaseApi from './BaseApi'

class UserService {
    static getUsers = () => BaseApi.get('/users');
    static getUser = (id) => BaseApi.get(`/users?id=${id}`);
    static getTasksByUser = (userId) => BaseApi.get(`/todos?userId=${userId}`)
}

export default UserService