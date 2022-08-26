import axios from 'axios';

class AuthService {
    static async getToken(searchParams: URLSearchParams) {
        const URL = `${process.env.REACT_APP_BASE_URL}/openid.connect.token?client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&client_secret=${process.env.REACT_APP_SLACK_CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=https://localhost:3000/login&code=`;

        const response = await axios.get(URL + searchParams.get('code'));

        return response?.data?.access_token;
    }
}

export default AuthService;
