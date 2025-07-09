import React from 'react';
import AcademicPerformanceBaseInAddiction from './components/AcademicPerformanceBaseInAddiction';
import AgeClusterAddiction from './components/AgeClusterAddiction';
import AgePredictionGraphic from './components/AgePredictionGraphic';
import AverageUseBaseInAddiction from './components/AverageUseBaseInAddiction';
import { useChartData, useFullSurveyData } from './HomeView';
import AverageUseAgeCluster from './components/AvarageUseAgeCluster';
import AvgUseperAge_Gender from './components/AvgUseperAge_Gender';
import AvgAddperAge_Gender from './components/AvgAddperAge_Gender';
import AvgAddSleep from './components/AvgAddSleep.tsx';
import AvgMhUse from './components/AvgMhUse.tsx';
import AvgMhAge from './AvgMhAge.tsx';
import { useState } from 'react';

const Graphics: React.FC = () => {
    const { data, loading: loadingChart } = useChartData();

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
    const [isOpen11, setIsOpen11] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen13, setIsOpen13] = useState(false);
    const [isOpen14, setIsOpen14] = useState(false);
    const [isOpen15, setIsOpen15] = useState(false);
    const [isOpen16, setIsOpen16] = useState(false);
    const [isOpen17, setIsOpen17] = useState(false);
    const [isOpen18, setIsOpen18] = useState(false);
    const [isOpen19, setIsOpen19] = useState(false);
    const [isOpen20, setIsOpen20] = useState(false);

    const {
        academicVsAddiction,
        ageClusters,
        agePrediction,
        averageUse,
        averageUseAgeCluster,
        averageUseAgeGender,
        averageAddictionAgeGender,
        averageAddictionSleep,
        averageMhAge,
        averageMhUse,
        loading: loadingSurvey,
        error,
    } = useFullSurveyData();

    if (loadingChart) {
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
                            <AcademicPerformanceBaseInAddiction data={data.academic_vs_addiction} user={academicVsAddiction}/>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen11(!isOpen11)}
                                >
                                    {isOpen11 ? "▼" : "►"} Proyección del rendimiento academico vs el Nivel de adicción
                                </div>
                                {isOpen11 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        La gráfica muestra la predicción del rendimiento academico vs el nivel de adicción. En el eje horizontal se representa los grados academicos de las personas, mientras que en el eje vertical se muestra el nivel estimado de adicción. Se observa que los niveles de adicción de high school se mantienen generalmente altos a lo largo de todos los grados mencionados.
                                    </p>
                                )}
                                 <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen12(!isOpen12)}
                                >
                                    {isOpen12 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen12 && (
                                    academicVsAddiction?.description ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {academicVsAddiction.description}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🧠 Agrupación por edad y nivel de adicción
                            </h3>
                            <AgeClusterAddiction data={data.age_clusters} user={ageClusters}/>
                            <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen13(!isOpen13)}
                                >
                                    {isOpen13 ? "▼" : "►"} Proyección por edad y nivel de adicción
                                </div>
                                {isOpen13 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        La gráfica muestra la adicción por edad de las personas, en el eje horizontal, se encuentran los grupos de edades: (10-18),(19-25) y (26-100), mientras que en el eje vertical,es el nivel de adicción, que en su mayoria, las personas con que tienen más adicción, tienen la edad entre 10 a 18 años.                         
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen14(!isOpen14)}
                                >
                                    {isOpen14 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen14 && (
                                    ageClusters?.comparison ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {ageClusters.comparison}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Predicción de edad con base en uso
                            </h3>
                            <AgePredictionGraphic data={data.age_prediction} user={agePrediction}/>
                            <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen15(!isOpen15)}
                                >
                                    {isOpen15 ? "▼" : "►"} Proyección del edad con base a su uso.
                                </div>
                                {isOpen15 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        La gráfica muestra, la predicción de edad con base en uso, En el eje horizontal se representan las edades de las personas, mientras que en el eje vertical se indica el nivel de adicción estimado. Se observa que la mayor predicción de adicción se concentra en el grupo de personas con edades entre 96 y 100 años, con niveles de adicción que oscilan entre 60 y 70.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen16(!isOpen16)}
                                >
                                    {isOpen16 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen16 && (
                                    agePrediction?.note ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {agePrediction.note}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Predicción de adicción con base en sueño
                            </h3>
                            <AvgAddSleep data={data.average_addiction_sleep} user={averageAddictionSleep}/>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen1(!isOpen1)}
                                >
                                    {isOpen1 ? "▼" : "►"} Proyección del Nivel de Adicción con base al sueño
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
                                    {isOpen2 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen2 && (
                                    averageAddictionSleep?.note ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageAddictionSleep.note}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                🔮 Relacion entre uso diario y salud mental
                            </h3>
                            <AvgMhUse data={data.average_mh_use} user={averageMhUse}/>
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
                                    {isOpen4 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen4 && (
                                    averageMhUse?.note ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageMhUse.note}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
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
                            <AverageUseBaseInAddiction data={data.average_use} user={averageUse}/>
                                <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen17(!isOpen17)}
                                >
                                    {isOpen17 ? "▼" : "►"} Proyección del uso diario por nivel de adicción
                                </div>
                                {isOpen17 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                    La gráfica presenta la relación entre el uso diario y el nivel de adicción. En el eje horizontal se representan las horas de uso diario, mientras que en el eje vertical se muestra el nivel de adicción correspondiente. A medida que aumentan las horas de uso, también se incrementa el nivel de adicción, lo que sugiere una fuerte correlación entre ambos factores.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen18(!isOpen18)}
                                >
                                    {isOpen18 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen18 && (
                                    averageUse?.note ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageUse.note}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Edad vs Uso promedio agrupado
                            </h3>
                            <AverageUseAgeCluster data={data.average_use_age_cluster} user={averageUseAgeCluster}/>
                                <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen19(!isOpen19)}
                                >
                                    {isOpen19 ? "▼" : "►"} Proyección de la edad vs el uso promedio agrupado
                                </div>
                                {isOpen19 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        La gráfica muestra la predicción del uso promedio en relación con distintos rangos de edad. En el eje horizontal se encuentran tres grupos etarios: 10-18, 19-25 y 26-100 años. En el eje vertical se representan las horas promedio de uso. Esta visualización permite comparar cómo varía el tiempo de uso entre los diferentes grupos de edad, destacando posibles tendencias o comportamientos asociados a cada etapa de la vida.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen20(!isOpen20)}
                                >
                                    {isOpen20 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen20 && (
                                    averageUseAgeCluster?.comparison ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageUseAgeCluster.comparison}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Relacion entre uso y edad por genero
                            </h3>
                            <AvgUseperAge_Gender data={data.average_use_age_gender} user={averageUseAgeGender}/>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700  hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen5(!isOpen5)}
                                >
                                    {isOpen5 ? "▼" : "►"} Proyección del Nivel de Adicción considerando entre uso y  Edad por Género
                                </div>
                                {isOpen5 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        Esta visualización muestra el promedio de horas diarias dedicadas a redes sociales, según la edad y el género de los usuarios. Los rangos de edad se distribuyen en el eje horizontal, y el eje vertical indica el tiempo estimado de uso. Se aprecian contrastes importantes entre hombres y mujeres a lo largo de las edades, lo que puede orientar el desarrollo de estrategias diferenciadas en función de los hábitos observados.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen6(!isOpen6)}
                                >
                                    {isOpen6 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen6 && (
                                    <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                {isOpen8 && (
                                    averageUseAgeGender?.comparison ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageUseAgeGender.comparison}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de adicción con base en edad por genero
                            </h3>
                            <AvgAddperAge_Gender data={data.average_addiction_age_gender} user={averageAddictionAgeGender}/>
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
                                        La gráfica ilustra cómo varía el nivel estimado de adicción a redes sociales según la edad y el género. En el eje horizontal se ubican los rangos de edad, mientras que en el eje vertical se refleja la intensidad del nivel de adicción. Esta representación facilita la identificación de diferencias significativas entre hombres y mujeres en distintas etapas de la vida, lo cual resulta útil para detectar perfiles de riesgo y enfocar acciones preventivas.
                                    </p>
                                )}
                            </div>
                               <div className="text-xs w-full text-justify mt-4">
                                <div
                                    className="font-bold text-green-700 hover:text-green-500 cursor-pointer transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setIsOpen8(!isOpen8)}
                                >
                                    {isOpen8 ? "▼" : "►"} Interpretación personal
                                </div>
                                {isOpen8 && (
                                    averageAddictionAgeGender?.comparison ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageAddictionAgeGender.comparison}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">
                                👥 Predicción de salud mental con base en edad
                            </h3>
                            <AvgMhAge data={data.average_mh_age} user={averageMhAge}/>
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
                                    {isOpen10 ? "▼" : "►"} Interpretación personal
                                </div>
                                    {isOpen10 && (
                                    averageMhAge?.note ? (
                                        <p className="text-gray-500 mt-2 transition-all duration-300 ease-in-out">
                                        {averageMhAge.note}
                                        </p>
                                    ) : 'Para comparar tu situación, contesta la encuesta'
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
