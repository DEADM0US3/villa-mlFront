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
                            to="/results"
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
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Brain className="h-6 w-6 text-emerald-400" />
                            <span className="text-xl font-bold">MentalSurvey</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Evaluaciones de salud mental impulsadas por IA para mejorar tu bienestar.
                        </p>
                    </div>
                    {[
                        { title: 'Producto', links: ['Cómo Funciona', 'Tecnología', 'Privacidad'] },
                        { title: 'Soporte', links: ['Centro de Ayuda', 'Contacto', 'FAQ'] },
                        { title: 'Legal', links: ['Términos de Uso', 'Política de Privacidad', 'Cookies'] },
                    ].map(section => (
                        <div key={section.title}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map(link => (
                                    <li key={link}>
                                        <Link to="#" className="hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MentalSurvey. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;