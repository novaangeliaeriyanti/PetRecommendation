import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
//import HomePage from './views/tailwind/HomePage'
import DetailPage from './views/tailwind/DetailPage'
//import CarouselPage from './views/carousel/CarouselPage'

export default function Routes() {

  return useRoutes([
    // { path: "/home", element: <HomePage /> },
     { path: "/page", element: <DetailPage /> },
    // { path: "/carousel", element: <CarouselPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
