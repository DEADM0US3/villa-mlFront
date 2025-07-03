import React from 'react';
import FormResponseFromStorage from './components/FormResponseFromStorage';

const ResultsPage: React.FC = () => {
    return (
        <div className="min-h-screen  py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Encabezado extendido */}
                <header className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-green-800 mb-2">
                        Resultados de la Encuesta
                    </h1>
                    <p className="text-lg text-green-700">
                        Predicciones basadas en tus respuestas, procesadas con nuestro modelo de Machine Learning.
                    </p>
                </header>

                {/* Contenido de las gráficas centrado */}
                <main className="grid grid-cols-1 gap-8 justify-items-center">
                    {/* Cada gráfica o componente de resultados */}
                    <div className="w-full md:w-auto bg-white rounded-lg shadow p-6">
                        <FormResponseFromStorage />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ResultsPage;
