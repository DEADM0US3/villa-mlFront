import React from 'react';
import { Navigate, type RouteObject, useRoutes } from 'react-router-dom';
import { HomeRoutes } from "./pages/Home/HomeRoutes.tsx";
import { FormRoutes } from './pages/Form/FormRoutes.tsx';
import Layout from './Layout/Layout.tsx';


const AppRoutes: React.FC = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <Layout />,
            children: [
                ...HomeRoutes,
                ...FormRoutes
            ]
        },
        {
            path: 'not-found',
            element: <h1>No hay nada</h1>,
        },
        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        },
    ];

    return useRoutes(routes);
};

export default AppRoutes;