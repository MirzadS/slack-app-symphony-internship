import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    return localStorage.getItem('access_token') ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
