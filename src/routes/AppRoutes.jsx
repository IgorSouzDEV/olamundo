import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MaynLayout";
import Inicio from "../pages/Inicio";
import SobreMim from "../pages/SobreMim";
import Post from "../pages/Post";
import NotFound from "../pages/NaoEncontrada";

export const routes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/sobre-mim',
                element: <SobreMim />
            },
            {
                path: '/posts/:id',
                element: <Post />
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export const router = createBrowserRouter(routes);