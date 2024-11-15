import { createBrowserRouter, Navigate } from "react-router-dom"
import Auth from "./pages/Auth/Auth";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/chat",
        element: <Chat />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "*",
        element: <Navigate to="/auth" />
    },
])

export default router;