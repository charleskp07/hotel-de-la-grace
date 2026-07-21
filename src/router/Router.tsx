import { createBrowserRouter, RouterProvider } from "react-router";
import { LanguageProvider } from "../context/LanguageContext";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import NotFound from "../pages/Errors/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/List/Rooms";
import RoomShow from "../pages/Rooms/Show/Show";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/Legals/PrivacyPolicy/PrivacyPolicy";
import Terms from "../pages/Legals/Terms/Terms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "rooms",
                element: <Rooms />
            },
            {
                path: "rooms/:id",
                element: <RoomShow />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "politique-de-confidentialite",
                element: <PrivacyPolicy />
            },
            {
                path: "conditions-generales-utilisation",
                element: <Terms />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ],
    },
]);

export default function Router() {
    return (
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    );
}