import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Landingpage from "./views/tailwind/Landingpage";
import DetailPage from './views/tailwind/DetailPage';
import HomePage from './views/tailwind/HomePage'

export default function Routes() {

  return useRoutes([
    { path: "/detail", element: <DetailPage /> },
     { path: "/home", element: <HomePage /> },
     { path: "/landing", element: <Landingpage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
