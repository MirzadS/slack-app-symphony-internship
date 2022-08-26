import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import LoginPage from '../components/Login/Login';
import Channels from '../components/Channels/Channels';
import ChannelInfo from '../components/ChannelInfo/ChannelInfo';
import { LOGIN, CHANNELS, CHANNEL_INFO, OTHERS, INITIAL_ROUTE } from './constants/constants';
import ErrorPage from '../components/ErrorPage/ErrorPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path={INITIAL_ROUTE} element={<Navigate to={LOGIN} replace />} />
            <Route path={LOGIN} element={<LoginPage />} />

            <Route element={<PrivateRoutes />}>
                <Route path={CHANNELS} element={<Channels />} />
                <Route path={CHANNEL_INFO} element={<ChannelInfo />} />
            </Route>

            <Route path={OTHERS} element={<ErrorPage bgImage="error_404.png" />} />
        </Routes>
    );
}

export default AppRoutes;
