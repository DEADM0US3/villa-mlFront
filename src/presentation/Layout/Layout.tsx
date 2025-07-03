import { Brain } from 'lucide-react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Layout principal con Navbar
const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo + Nombre */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Brain className="h-8 w-8 text-emerald-600" />
                        <span className="text-2xl font-bold text-gray-900">MentalSurvey</span>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/form"
                            className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                            Encuesta
                        </Link>
                        <Link
                            to="/graphics"
                            className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                            Graficas
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className="flex-grow ">
                {/* Outlet renderiza la ruta hija */}
                <Outlet />
            </main>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <Brain className="h-6 w-6 text-emerald-400" />
                        <span className="text-xl font-bold">MentalSurvey</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} MentalSurvey. Todos los derechos reservados.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Layout;