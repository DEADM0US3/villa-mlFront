import type { RouteObject } from "react-router-dom";
import ResultsPage from "./ResultsPage.tsx";
import LandingPage from "./Landing.tsx";
import Graphics from "./Graphics.tsx";

export const HomeRoutes: RouteObject[] = [
    {
        path: "",
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "results",
                element: <ResultsPage />
            },
            {
                path: "Graphics",
                element: <Graphics />
            }
        ]
    }
]