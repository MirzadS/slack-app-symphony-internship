export default class Helpers {
    static removeToken() {
        localStorage.removeItem('access_token');

        window.open('/login', '_self');
    }

    static setToken(name: string, data: string) {
        localStorage.setItem(name, data);
    }

    static getToken() {
        return localStorage.getItem('access_token');
    }

    static loginHandler() {
        const OAUTH_URL = `${process.env.REACT_APP_SLACK_WORKSPACE_NAME}.slack.com/oauth?client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&scope=&user_scope=openid%2Cemail%2Cprofile&state=&granular_bot_scope=1&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Flogin&install_redirect=&response_type=code&response_mode=&nonce=&openid_connect=1&single_channel=0&tracked=1`;

        if (
            localStorage.getItem('access_token') === 'undefined' ||
            localStorage.getItem('access_token') === null ||
            localStorage.getItem('access_token') === ''
        ) {
            window.open(OAUTH_URL, '_self');
        } else {
            window.open('/channels', '_self');
        }
    }
}
