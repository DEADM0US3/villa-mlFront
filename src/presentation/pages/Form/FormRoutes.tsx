import type {RouteObject} from "react-router-dom";
import FormView from "@/presentation/pages/Form/FormView.tsx";

export const FormRoutes: RouteObject[] = [
    {
        path: "users",
        children:[
            {
                index: true,
                element: <FormView/>
            }
        ]
    }
]