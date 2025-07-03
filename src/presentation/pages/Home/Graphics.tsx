import React from 'react';
import AcademicPerformanceBaseInAddiction from './components/AcademicPerformanceBaseInAddiction';
import AgeClusterAddiction from './components/AgeClusterAddiction';
import AgePredictionGraphic from './components/AgePredictionGraphic';
import AverageUseBaseInAddiction from './components/AverageUseBaseInAddiction';
import AverageUseAgeCluster from './components/AvarageUseAgeCluster';
import { useChartData } from './HomeView';

const Graphics: React.FC = () => {
    const { data, loading } = useChartData();

    if (loading) {
        return (
            <div className="text-center p-10 text-gray-700">
                Cargando datos...
            </div>
        );
    }

    if (!data) {
        return (
            <div className="text-center p-10 text-red-600">
                No se pudieron cargar los datos.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Gráficas de adicción a redes sociales
                </h2>

                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Primera columna de gráficos */}
                    <div className="flex-1 space-y-8">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                🎓 Rendimiento académico vs Nivel de adicción
                            </h3>
                            <AcademicPerformanceBaseInAddiction data={data.academic_vs_addiction} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                🧠 Agrupación por edad y nivel de adicción
                            </h3>
                            <AgeClusterAddiction data={data.age_clusters} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                🔮 Predicción de edad con base en uso
                            </h3>
                            <AgePredictionGraphic data={data.age_prediction} />
                        </div>
                    </div>

                    {/* Segunda columna de gráficos */}
                    <div className="flex-1 space-y-8">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                📱 Uso promedio diario por nivel de adicción
                            </h3>
                            <AverageUseBaseInAddiction data={data.average_use} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                👥 Edad vs Uso promedio agrupado
                            </h3>
                            <AverageUseAgeCluster data={data.average_use_age_cluster} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Graphics;
