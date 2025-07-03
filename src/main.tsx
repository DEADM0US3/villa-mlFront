import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "sonner";
import AppRoutes from "./presentation/AppRoutes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <BrowserRouter>
                <AppRoutes/>
                <Toaster duration={1000} />
            </BrowserRouter>
    </StrictMode>,
)
