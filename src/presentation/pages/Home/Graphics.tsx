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
import { useState } from 'react';

const Graphics: React.FC = () => {
    const { data, loading } = useChartData();

     const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);

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
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen1(!isOpen1)}
                                >
                                    {isOpen1 ? "▼" : "►"} Proyección del Nivel de Adicción considerando Edad y Género
                                </div>
                                {isOpen1 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                    La gráfica muestra cómo varía el nivel de adicción a lo largo del día en función de las horas de sueño. Se observa que la adicción tiende a aumentar en ciertos momentos del día, especialmente después de períodos de sueño reducidos, lo que indica una posible relación entre menos descanso y mayor dependencia a las redes sociales.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen2(!isOpen2)}
                                >
                                    {isOpen2 ? "▼" : "►"} Falta mapearlo
                                </div>
                                {isOpen2 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates dolores hic id cupiditate accusamus expedita laudantium, maxime voluptate, iste animi laborum exercitationem ipsam temporibus consectetur deserunt libero eius ratione.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Relacion entre uso diario y salud mental
                            </h3>
                            <AvgMhUse data={data.average_mh_use} />
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen3(!isOpen3)}
                                >
                                    {isOpen3 ? "▼" : "►"} Proyección entre uso diario y salud mental
                                </div>
                                {isOpen3 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                   Esta gráfica presenta la proyección de cómo el tiempo promedio de uso diario de redes sociales se relaciona con el bienestar mental de las personas. En el eje horizontal se muestra el uso diario en horas, mientras que en el eje vertical se representa un índice estimado de salud mental. La visualización permite identificar tendencias y posibles impactos del uso excesivo en el bienestar psicológico, evidenciando si existe alguna correlación significativa entre el tiempo de uso y la salud mental.                               </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen4(!isOpen4)}
                                >
                                    {isOpen4 ? "▼" : "►"} Falta mapearlo
                                </div>
                                {isOpen4 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates dolores hic id cupiditate accusamus expedita laudantium, maxime voluptate, iste animi laborum exercitationem ipsam temporibus consectetur deserunt libero eius ratione.
                                    </p>
                                )}
                            </div>
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
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen5(!isOpen5)}
                                >
                                    {isOpen5 ? "▼" : "►"} Proyección del Nivel de Adicción considerando Edad y Género
                                </div>
                                {isOpen5 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                    Esta gráfica muestra la predicción del nivel de adicción a redes sociales basada en la edad y el género de los individuos. En el eje horizontal se representan los diferentes rangos de edad, mientras que el eje vertical indica las horas diarias de uso. La visualización permite comparar cómo varía la propensión a la adicción entre hombres y mujeres a lo largo de las distintas etapas de la vida. Se observan patrones diferenciados por género, que pueden ayudar a identificar grupos de riesgo específicos para diseñar intervenciones más efectivas.                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen6(!isOpen6)}
                                >
                                    {isOpen6 ? "▼" : "►"} Falta mapearlo
                                </div>
                                {isOpen6 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates dolores hic id cupiditate accusamus expedita laudantium, maxime voluptate, iste animi laborum exercitationem ipsam temporibus consectetur deserunt libero eius ratione.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de adicción con base en edad por genero
                            </h3>
                            <AvgAddperAge_Gender data={data.average_addiction_age_gender} />
                              <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen7(!isOpen7)}
                                >
                                    {isOpen7 ? "▼" : "►"} Proyección del Nivel de Adicción considerando Edad y Género
                                </div>
                                {isOpen7 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                    Esta gráfica muestra la predicción del nivel de adicción a redes sociales basada en la edad y el género de los individuos. En el eje horizontal se representan los diferentes rangos de edad, mientras que el eje vertical indica el nivel estimado de adicción. La visualización permite comparar cómo varía la propensión a la adicción entre hombres y mujeres a lo largo de las distintas etapas de la vida. Se observan patrones diferenciados por género, que pueden ayudar a identificar grupos de riesgo específicos para diseñar intervenciones más efectivas.                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen8(!isOpen8)}
                                >
                                    {isOpen8 ? "▼" : "►"} Falta mapearlo
                                </div>
                                {isOpen8 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates dolores hic id cupiditate accusamus expedita laudantium, maxime voluptate, iste animi laborum exercitationem ipsam temporibus consectetur deserunt libero eius ratione.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de salud mental con base en edad
                            </h3>
                            <AvgMhAge data={data.average_mh_age} />
                            <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen9(!isOpen9)}
                                >
                                    {isOpen9 ? "▼" : "►"} Proyección del Bienestar Mental en Distintas Etapas de la Vida
                                </div>
                                {isOpen9 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        La gráfica muestra la predicción del nivel de salud mental en función de la edad. En el eje horizontal se representa la edad de las personas (de 1 a 100 años), mientras que en el eje vertical se muestra el nivel estimado de salud mental (de 0 a 100). Se observa que los niveles de salud mental se mantienen generalmente altos a lo largo de todas las edades, con algunas caídas puntuales en ciertos rangos de edad.
                                    </p>
                                )}
                            </div>
                              <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen10(!isOpen10)}
                                >
                                    {isOpen10 ? "▼" : "►"} Falta mapearlo
                                </div>
                                {isOpen10 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates dolores hic id cupiditate accusamus expedita laudantium, maxime voluptate, iste animi laborum exercitationem ipsam temporibus consectetur deserunt libero eius ratione.
                                    </p>
                                )}
                            </div>
                        </div>
                        </div>                      
                        </div>
                
            </section>
        </div>
    );
};

export default Graphics;
