import axios from '../../axiosInstance/axiosInstance';

class UserService {
    static async getUserInfo() {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/openid.connect.userInfo`);

        return response.data;
    }
}

export default UserService;
