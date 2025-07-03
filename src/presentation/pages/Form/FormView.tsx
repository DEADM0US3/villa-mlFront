import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Field {
    id: string;
    label: string;
    type: 'input' | 'select';
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    options?: { value: string; label: string }[];
}

const fields: Field[] = [
    {
        id: 'age',
        label: '1. ¿Cuántos años tienes?',
        type: 'input',
        props: { type: 'number', min: 10, max: 100, placeholder: 'Ingresa tu edad', required: true },
    },
    {
        id: 'academic_level',
        label: '2. Nivel académico',
        type: 'select',
        options: [
            { value: '', label: 'Selecciona nivel académico' },
            { value: 'High School', label: 'Preparatoria' },
            { value: 'Undergraduate', label: 'Licenciatura' },
            { value: 'Graduate', label: 'Posgrado' },
        ],
    },
    {
        id: 'gender',
        label: '3. Género',
        type: 'select',
        options: [
            { value: '', label: 'Selecciona género' },
            { value: 'Female', label: 'Femenino' },
            { value: 'Male', label: 'Masculino' },
        ],
    },
    {
        id: 'usage_hours',
        label: '4. Horas promedio de uso diario',
        type: 'input',
        props: { type: 'number', step: 0.1, min: 0, max: 24, placeholder: 'Horas en promedio', required: true },
    },
    {
        id: 'most_used_platform',
        label: '5. Red social más usada',
        type: 'select',
        options: [
            { value: '', label: 'Selecciona red social' },
            { value: 'Instagram', label: 'Instagram' },
            { value: 'TikTok', label: 'TikTok' },
            { value: 'Facebook', label: 'Facebook' },
            { value: 'Twitter', label: 'Twitter' },
            { value: 'YouTube', label: 'YouTube' },
            { value: 'Snapchat', label: 'Snapchat' },
            { value: 'LinkedIn', label: 'LinkedIn' },
            { value: 'WhatsApp', label: 'WhatsApp' },
        ],
    },
    {
        id: 'sleep_hours',
        label: '6. Horas de sueño por noche',
        type: 'input',
        props: { type: 'number', step: 0.1, min: 0, max: 12, placeholder: 'Horas en promedio', required: true },
    },
    {
        id: 'academic_impact',
        label: '7. ¿Afecta tu rendimiento académico?',
        type: 'select',
        options: [
            { value: '', label: 'Selecciona opción' },
            { value: '1', label: 'Sí' },
            { value: '0', label: 'No' },
        ],
    },
    {
        id: 'conflicts_over_social_media',
        label: '8. Conflictos por redes sociales',
        type: 'input',
        props: { type: 'number', min: 0, placeholder: 'Veces', required: true },
    },
    {
        id: 'relationship_status',
        label: '9. Relación actual',
        type: 'select',
        options: [
            { value: '', label: 'Selecciona opción' },
            { value: '1', label: 'Sí' },
            { value: '0', label: 'No' },
        ],
    },
];

const SocialMediaSurveyPage: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, string>>(
        Object.fromEntries(fields.map(f => [f.id, ''])) as Record<string, string>
    );
    formData['country'] = 'Mexico';
    formData['model_name'] = 'formulario_redes';

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const API_URL = import.meta.env.VITE_API_URL as string;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);
        setErrorMessage(null);

        try {
            const form = new FormData();
            Object.entries(formData).forEach(([key, value]) => form.append(key, value));
            const res = await axios.post(`${API_URL}/form`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            localStorage.setItem('surveyResult', JSON.stringify(res.data));
            setResponseMessage('Formulario enviado correctamente.');
            navigate('/results');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.detail || 'Error enviando el formulario.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen  py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold mb-6 text-center text-green-700">
                    Encuesta de Redes Sociales
                </h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fields.map(({ id, label, type, props, options }) => (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow-sm p-4 flex flex-col space-y-1 border-b-4 border-transparent hover:border-green-300 transition"
                        >
                            <label htmlFor={id} className="text-sm font-medium text-green-600">
                                {label}
                            </label>
                            {type === 'input' ? (
                                <input
                                    id={id}
                                    name={id}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    {...props}
                                    className="bg-transparent border-none border-b-2 border-green-300 focus:border-green-600 focus:ring-0 text-gray-900 py-2 px-1"
                                />
                            ) : (
                                <select
                                    id={id}
                                    name={id}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-none border-b-2 border-green-300 focus:border-green-600 focus:ring-0 text-gray-900 py-2 px-1"
                                >
                                    {options!.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                    <div className="col-span-full flex justify-center mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-full shadow-md transition disabled:opacity-50"
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                    {responseMessage && <p className="col-span-full text-center text-green-600">{responseMessage}</p>}
                    {errorMessage && <p className="col-span-full text-center text-red-600">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default SocialMediaSurveyPage;
