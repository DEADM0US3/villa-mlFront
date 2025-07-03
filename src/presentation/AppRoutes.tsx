import React from 'react';
import {Navigate, type RouteObject, useRoutes} from 'react-router-dom';
import {HomeRoutes} from "./pages/Home/HomeRoutes.tsx";

const AppRoutes: React.FC = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            children:[
                ...HomeRoutes
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