// import { StrictMode, useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
// import "./index.css";
//
// const RootComponent = () => {
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//
//     return () => clearTimeout(timer);
//   }, []);
//
//   return (
//       <StrictMode>
//         {loading ? 'Loading...' : <RouterProvider router={router} />}
//       </StrictMode>
//   );
// };
//
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
//
// createRoot(document.getElementById("root")!).render(
//     <RootComponent />
// );


import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SinglePage from "./dianamic/page.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
        path: '/:id',
        element: <SinglePage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
