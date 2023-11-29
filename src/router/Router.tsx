import {createBrowserRouter} from "react-router-dom";
import {ClothingPage, ElectronicsPage, FoodPage, MainPage} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/food",
        element: <FoodPage />
    },
    {
        path: "/clothing",
        element: <ClothingPage />
    },
    {
        path: "/electronics",
        element: <ElectronicsPage />
    },
]);