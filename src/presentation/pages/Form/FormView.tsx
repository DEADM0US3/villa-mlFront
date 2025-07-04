import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, User, Clock, BarChart3, Check } from "lucide-react";

interface Field {
    id: string;
    label: string;
    type: "input" | "select";
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    options?: { value: string; label: string }[];
}

// Campos originales
const fields: Field[] = [
    { id: "age", label: "¿Cuántos años tienes?", type: "input", props: { type: "number", min: 10, max: 100, placeholder: "Ingresa tu edad", required: true } },
    { id: "academic_level", label: "Nivel académico", type: "select", options: [{ value: "", label: "Selecciona nivel académico" }, { value: "High School", label: "Preparatoria" }, { value: "Undergraduate", label: "Licenciatura" }, { value: "Graduate", label: "Posgrado" }] },
    { id: "gender", label: "Género", type: "select", options: [{ value: "", label: "Selecciona género" }, { value: "Female", label: "Femenino" }, { value: "Male", label: "Masculino" }] },
    { id: "usage_hours", label: "Horas promedio de uso diario", type: "input", props: { type: "number", step: 0.1, min: 0, max: 24, placeholder: "Horas en promedio", required: true } },
    { id: "most_used_platform", label: "Red social más usada", type: "select", options: [{ value: "", label: "Selecciona red social" }, { value: "Instagram", label: "Instagram" }, { value: "TikTok", label: "TikTok" }, { value: "Facebook", label: "Facebook" }, { value: "Twitter", label: "Twitter" }, { value: "YouTube", label: "YouTube" }, { value: "Snapchat", label: "Snapchat" }, { value: "LinkedIn", label: "LinkedIn" }, { value: "WhatsApp", label: "WhatsApp" }] },
    { id: "sleep_hours", label: "Horas de sueño por noche", type: "input", props: { type: "number", step: 0.1, min: 0, max: 12, placeholder: "Horas en promedio", required: true } },
    { id: "academic_impact", label: "¿Afecta tu rendimiento académico?", type: "select", options: [{ value: "", label: "Selecciona opción" }, { value: "1", label: "Sí" }, { value: "0", label: "No" }] },
    { id: "conflicts_over_social_media", label: "Conflictos por redes sociales", type: "input", props: { type: "number", min: 0, placeholder: "Número de veces", required: true } },
    { id: "relationship_status", label: "Relación actual", type: "select", options: [{ value: "", label: "Selecciona opción" }, { value: "1", label: "Sí" }, { value: "0", label: "No" }] },
];

const SocialMediaSurveyPage: React.FC = () => {
    const navigate = useNavigate();
    const steps = [
        { title: "Datos Básicos", description: "Información personal básica", fields: ["age", "academic_level", "gender"], icon: User },
        { title: "Uso Diario", description: "Patrones de uso de redes sociales", fields: ["usage_hours", "most_used_platform", "sleep_hours"], icon: Clock },
        { title: "Impacto", description: "Efectos en tu vida diaria", fields: ["academic_impact", "conflicts_over_social_media", "relationship_status"], icon: BarChart3 },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, string>>(Object.fromEntries(fields.map((f) => [f.id, ""])) as Record<string, string>);
    formData["country"] = "Mexico";
    formData["model_name"] = "formulario_redes";

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (steps[currentStep].fields.every((id) => formData[id]?.trim())) {
            setErrorMessage(null);
            setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
        } else {
            setErrorMessage("Por favor completa todos los campos antes de continuar.");
        }
    };

    const handleBack = () => {
        setErrorMessage(null);
        setCurrentStep((s) => Math.max(s - 1, 0));
    };

    const API_URL = import.meta.env.VITE_API_URL as string;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (steps[currentStep].fields.every((id) => formData[id]?.trim())) {
            setLoading(true);
            setErrorMessage(null);
            try {
                const form = new FormData();
                Object.entries(formData).forEach(([k, v]) => form.append(k, v));
                const res = await axios.post(`${API_URL}/form`, form);
                console.log("Form submitted:", res.data);
                navigate('/results');
            } catch (err: any) {
                setErrorMessage(err.response?.data?.detail || 'Error enviando formulario');
            } finally {
                setLoading(false);
            }
        } else {
            setErrorMessage("Por favor completa todos los campos antes de enviar.");
        }
    };

    const isStepComplete = (index: number) => steps[index].fields.every((id) => formData[id]?.trim());
    const currentFields = fields.filter((f) => steps[currentStep].fields.includes(f.id));

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Encuesta de Redes Sociales</h1>
                    <p className="text-gray-600">Ayúdanos a entender el impacto de las redes sociales</p>
                </header>

                <div className="text-center my-6">
                    <p className="text-xl text-gray-500">Paso {currentStep + 1} de {steps.length}</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6">
                        <h2 className="text-2xl font-bold text-white">{steps[currentStep].title}</h2>
                        <p className="text-emerald-100 mt-1">{steps[currentStep].description}</p>
                    </div>

                    <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="p-8 space-y-6">
                        {currentFields.map((field) => (
                            <div key={field.id} className="flex flex-col">
                                <label htmlFor={field.id} className="mb-1 text-green-600 font-medium">
                                    {field.label}
                                </label>
                                {field.type === 'input' ? (
                                    <input
                                        id={field.id}
                                        name={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        {...field.props}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
                                    />
                                ) : (
                                    <select
                                        id={field.id}
                                        name={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
                                    >
                                        {field.options!.map((o) => (
                                            <option key={o.value} value={o.value}>
                                                {o.label}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        ))}

                        {errorMessage && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-red-600 text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                            <button
                                type="button"
                                onClick={handleBack}
                                disabled={currentStep === 0 || loading}
                                className="flex items-center px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 transition-all"
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" /> Anterior
                            </button>

                            <div className="flex space-x-2">
                                {steps.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block w-2 h-2 rounded-full transition-colors ${i === currentStep ? 'bg-emerald-500 w-6' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={(currentStep < steps.length - 1 && !isStepComplete(currentStep)) || loading}
                                className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 transition-all transform hover:scale-105"
                            >
                                {currentStep === steps.length - 1 ? (
                                    loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Encuesta <Check className="w-4 h-4 ml-2" />
                                        </>
                                    )
                                ) : (
                                    <>
                                        Siguiente <ChevronRight className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default SocialMediaSurveyPage;