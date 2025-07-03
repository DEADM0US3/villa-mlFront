import type { RouteObject } from "react-router-dom";
import FormView from "./FormView";

export const FormRoutes: RouteObject[] = [
    {
        path: "form",
        children: [
            {
                index: true,
                element: <FormView />
            }
        ]
    }
]