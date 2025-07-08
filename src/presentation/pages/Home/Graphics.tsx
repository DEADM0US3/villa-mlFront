import React from 'react';
import AcademicPerformanceBaseInAddiction from './components/AcademicPerformanceBaseInAddiction';
import AgeClusterAddiction from './components/AgeClusterAddiction';
import AgePredictionGraphic from './components/AgePredictionGraphic';
import AverageUseBaseInAddiction from './components/AverageUseBaseInAddiction';
import { useChartData } from './HomeView';
import AverageUseAgeCluster from './components/AvarageUseAgeCluster';
import AvgUseperAge_Gender from './components/AvgUseperAge_Gender';
import AvgAddperAge_Gender from './components/AvgAddperAge_Gender';
import AvgAddSleep from './components/AvgAddSleep.tsx';
import AvgMhUse from './components/AvgMhUse.tsx';
import AvgMhAge from './AvgMhAge.tsx';

const Graphics: React.FC = () => {
    const { data, loading } = useChartData();

    if (loading) {
        return (
            <div className="text-center p-10 text-green-700">
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
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Gráficas de adicción a redes sociales
                </h2>

                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Primera columna de gráficos */}
                    <div className="flex-1 space-y-8">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🎓 Rendimiento académico vs Nivel de adicción
                            </h3>
                            <AcademicPerformanceBaseInAddiction data={data.academic_vs_addiction} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🧠 Agrupación por edad y nivel de adicción
                            </h3>
                            <AgeClusterAddiction data={data.age_clusters} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Predicción de edad con base en uso
                            </h3>
                            <AgePredictionGraphic data={data.age_prediction} />
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Predicción de adicción con base en sueño
                            </h3>
                            <AvgAddSleep data={data.average_addiction_sleep} />
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Relacion entre uso diario y salud mental
                            </h3>
                            <AvgMhUse data={data.average_mh_use} />
                        </div>
                    </div>

                    {/* Segunda columna de gráficos */}
                    <div className="flex-1 space-y-8">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                📱 Uso promedio diario por nivel de adicción
                            </h3>
                            <AverageUseBaseInAddiction data={data.average_use} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Edad vs Uso promedio agrupado
                            </h3>
                            <AverageUseAgeCluster data={data.average_use_age_cluster} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Relacion entre uso y edad por genero
                            </h3>
                            <AvgUseperAge_Gender data={data.average_use_age_gender} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de adicción con base en edad por genero
                            </h3>
                            <AvgAddperAge_Gender data={data.average_addiction_age_gender} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de salud mental con base en edad
                            </h3>
                            <AvgMhAge data={data.average_mh_age} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Graphics;
