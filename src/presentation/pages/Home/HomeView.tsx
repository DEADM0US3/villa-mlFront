import React, { useState, useEffect } from 'react';
import AcademicPerformanceBaseInAddiction from './components/AcademicPerformanceBaseInAddiction';
import AgeClusterAddiction from './components/AgeClusterAddiction';
import AgePredictionGraphic from './components/AgePredictionGraphic';
import AverageUseBaseInAddiction from './components/AverageUseBaseInAddiction';
import AverageUseAgeCluster from './components/AvarageUseAgeCluster';
import SocialMediaSurveyForm from './components/SocialMediaSurveyForm';
import axios from 'axios';
import FormResponseFromStorage from "./components/FormResponseFromStorage.tsx";


const API_URL = import.meta.env.VITE_API_URL as string;

export interface ChartData {
    academic_vs_addiction: { Academic_Level: string; addicted_score: number }[];
    age_clusters: { age_cluster: number; addicted_score: number }[];
    age_prediction: { Age: number; Predicted_Addiction: number }[];
    average_use: { Avg_Daily_Usage_Hours: number; addicted_score: number }[];
    average_use_age_cluster: { age_cluster: number; Avg_Daily_Usage_Hours: number }[];
    average_use_age_gender: { Age: number; Gender: string, Avg_Daily_Usage_Hours: number }[];
    average_addiction_age_gender: { Age: number; Gender: string, addicted_score: number }[];
    average_addiction_sleep: { addicted_score: number, Sleep_Hours_Per_Night: number }[];
    average_mh_age: { mental_health_score: number, Age: number }[];
    average_mh_use: { mental_health_score: number, Avg_Daily_Usage_Hours: number }[];
}

export const useChartData = () => {
    const [data, setData] = useState<ChartData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<ChartData>(`${API_URL}/data/chart`)
            .then((res) => setData(res.data))
            .catch((err) => console.error("Error fetching chart data", err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading };
};


const HomeView: React.FC = () => {

    const [showForm, setShowForm] = useState(false);
    const { data, loading } = useChartData();

    if (loading || !data) {
        return <div className="text-center p-10 text-gray-700">Cargando datos...</div>;
    }


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard de Adicción a Redes
                            Sociales</h1>
                        <p className="text-gray-600 text-lg">
                            Visualizaciones basadas en edad, rendimiento académico y uso promedio.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition"
                    >
                        {showForm ? 'Ocultar formulario' : 'Mostrar formulario'}
                    </button>

                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="grid grid-cols-2 gap-5 cols- space-y-8">

                        <section className="flex flex-col gap-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Gráficas de predicción en base al formulario
                            </h2>
                            <>
                                <FormResponseFromStorage />
                            </>
                        </section>

                        <section className="flex flex-col gap-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Gráficas de predicción y análisis de adicción a redes sociales (1942 datos)
                            </h2>

                            <div className="h-[80dvh] flex flex-col gap-8 overflow-y-auto">
                                <div className="bg-white rounded-2xl shadow p-6 ">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                                        🎓 Rendimiento académico vs Nivel de adicción
                                    </h2>
                                    <AcademicPerformanceBaseInAddiction data={data.academic_vs_addiction} />
                                </div>

                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                                        🧠 Agrupación por edad y nivel de adicción
                                    </h2>
                                    <AgeClusterAddiction data={data.age_clusters} />
                                </div>

                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                                        🔮 Predicción de edad con base en uso
                                    </h2>
                                    <AgePredictionGraphic data={data.age_prediction} />
                                </div>

                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                                        📱 Uso promedio diario por nivel de adicción
                                    </h2>
                                    <AverageUseBaseInAddiction data={data.average_use} />
                                </div>

                                <div className="bg-white rounded-2xl shadow p-6 md:col-span-2">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                                        👥 Edad vs Uso promedio agrupado por nivel de adicción
                                    </h2>
                                    <AverageUseAgeCluster data={data.average_use_age_cluster} />
                                </div>
                                
                            </div>

                        </section>

                    </div>

                    {showForm && (
                        <div className="bg-white rounded-2xl shadow p-6 fixed left-20 top-20">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">📝 Formulario de ingreso</h2>
                            <SocialMediaSurveyForm />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default HomeView;

