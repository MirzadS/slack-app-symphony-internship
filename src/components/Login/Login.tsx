import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Container, Main, Title } from './styles';
import AuthService from '../../services/AuthService/AuthService';
import AuthHelpers from '../../utils/AuthHelpers';
import { LOGIN, CHANNELS } from '../../routes/constants/constants';

function LoginPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const tokenVerification = async () => {
        const token = await AuthService.getToken(searchParams);

        if (token === undefined) {
            navigate(LOGIN);
        } else {
            AuthHelpers.setToken('access_token', token);
            navigate(CHANNELS);
        }
    };

    useEffect(() => {
        if (searchParams.get('code') !== null) {
            tokenVerification();
        }
    }, []);

    return (
        <Container>
            <Main>
                <Title>MS Informant</Title>
                <button
                    type="button"
                    onClick={AuthHelpers.loginHandler}
                    style={{
                        alignItems: 'center',
                        color: '#000',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #DDDDDD',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '600',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        width: '256px',
                        height: '48px',
                        marginTop: '20px',
                        cursor: 'pointer',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            height: '20px',
                            width: '20px',
                            marginRight: '12px',
                        }}
                        viewBox="0 0 122.8 122.8"
                    >
                        <path
                            d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                            fill="#e01e5a"
                        />
                        <path
                            d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                            fill="#36c5f0"
                        />
                        <path
                            d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                            fill="#2eb67d"
                        />
                        <path
                            d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                            fill="#ecb22e"
                        />
                    </svg>
                    Sign in with Slack
                </button>
            </Main>
        </Container>
    );
}

export default LoginPage;
