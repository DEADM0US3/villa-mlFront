import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, BarChart3, Users, CheckCircle, ArrowRight, Heart, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
            {/* Hero Section */}
            <section className="flex-grow flex flex-col justify-center items-center px-4 py-16 md:py-24">
                <div className="text-center max-w-4xl">
                    <div className="inline-block mb-4 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        Tecnología de Machine Learning
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Evalúa tu <span className="text-emerald-600">Salud Mental</span> con Inteligencia Artificial
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Herramienta innovadora que utiliza ML para analizar tu bienestar mental a través de 10 preguntas diseñadas con datos científicos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/form"
                            className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition"
                        >
                            Comenzar Evaluación
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                        {['100% Confidencial', 'Basado en Ciencia', 'Resultados Instantáneos'].map(text => (
                            <div key={text} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cómo Funciona */}
            <section id="como-funciona" className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
                    <p className="text-lg text-gray-600">
                        Nuestro proceso es simple, rápido y completamente privado
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    {[
                        { icon: Heart, title: '1. Responde 10 Preguntas', desc: 'Completa el cuestionario en 3-5 minutos.' },
                        { icon: Zap, title: '2. Análisis IA', desc: 'Modelos entrenados con 2,000+ casos analizan tus respuestas.' },
                        { icon: BarChart3, title: '3. Recibe Resultados', desc: 'Análisis detallado y recomendaciones personalizadas.' },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Características */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegir MentalSurvey?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Combinamos tecnología avanzada con el cuidado humano que mereces
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {[
                        { icon: Shield, title: 'Privacidad Total', desc: 'Tus datos están protegidos y nunca compartidos.' },
                        { icon: Brain, title: 'IA Avanzada', desc: 'Modelo preciso entrenado con datos reales.' },
                        { icon: Users, title: 'Validado Científicamente', desc: 'Respaldado por investigación psicológica.' },
                        { icon: BarChart3, title: 'Resultados Claros', desc: 'Informes fáciles de entender.' },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center">
                            <Icon className="h-10 w-10 text-emerald-600 mb-4 mx-auto" />
                            <h4 className="text-lg font-semibold mb-2">{title}</h4>
                            <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tecnología */}
            <section id="tecnologia" className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h2>
                        <p className="text-lg text-gray-600">Enfoque científico que garantiza resultados confiables</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            {[
                                { title: 'Dataset Robusto', desc: 'Entrenado con más de 2,000 casos reales.' },
                                { title: 'Algoritmos Avanzados', desc: 'Clasificación optimizada para salud mental.' },
                                { title: 'Validación Continua', desc: 'Modelos actualizados para mayor precisión.' },
                            ].map(item => (
                                <div key={item.title} className="flex items-start space-x-3 mb-4">
                                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">2,000+</div>
                            <div className="text-gray-600 mb-4">Casos de Entrenamiento</div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">10</div>
                            <div className="text-gray-600 mb-4">Preguntas Optimizadas</div>
                            <div className="text-4xl font-bold text-emerald-600 mb-2">
                                {'<'}5
                            </div>
                            <div className="text-gray-600">Minutos de Evaluación</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 bg-emerald-600 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comienza tu Evaluación Hoy</h2>
                <p className="text-xl text-emerald-100 mb-8 mx-auto max-w-2xl">
                    Da el primer paso hacia un mejor entendimiento de tu salud mental. Es gratuito, rápido y confidencial.
                </p>
                <Link
                    to="/survey"
                    className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition"
                >
                    Iniciar Evaluación Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </section>


        </div>
    );
};

export default LandingPage;
