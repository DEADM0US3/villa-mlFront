import React, { useState } from 'react';
import axios from "axios";

const SocialMediaSurveyForm: React.FC = () => {
    const [formData, setFormData] = useState({
        age: '',
        academic_level: '',
        gender: '',
        usage_hours: '',
        most_used_platform: '',
        sleep_hours: '',
        academic_impact: '',
        conflicts_over_social_media: '',
        relationship_status: '',
        country: 'Mexico',
        model_name: 'formulario_redes',
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const API_URL = import.meta.env.VITE_API_URL as string;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);
        setErrorMessage(null);


        try {
            const form = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value);
            });
            const res = await axios.post(`${API_URL}/form`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Guardar resultado en localStorage (como string JSON)
            localStorage.setItem('surveyResult', JSON.stringify(res.data));

            setResponseMessage('Formulario enviado correctamente.');
        } catch (error: any) {
            setErrorMessage(
                error.response?.data?.detail || 'Error enviando el formulario.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mx-auto p-8 bg-gray-50 rounded-xl space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <input type="hidden" name="country" value="Mexico" />

            {/* Campo genérico */}
            {[
                {
                    id: "age",
                    label: "1. ¿Cuántos años tienes?",
                    type: "number",
                    props: { min: 10, max: 100, placeholder: "Ingresa tu edad" },
                },
                {
                    id: "usage_hours",
                    label: "4. Horas promedio de uso diario",
                    type: "number",
                    props: { step: 0.1, min: 0, max: 24, placeholder: "Horas en promedio" },
                },
                {
                    id: "sleep_hours",
                    label: "6. Horas de sueño por noche",
                    type: "number",
                    props: { step: 0.1, min: 0, max: 12, placeholder: "Horas en promedio" },
                },
                {
                    id: "conflicts_over_social_media",
                    label: "8. Conflictos por redes sociales",
                    type: "number",
                    props: { min: 0, placeholder: "Cantidad de veces" },
                },
            ].map(({ id, label, type, props }) => (
                <div
                    key={id}
                    className="bg-white rounded-lg shadow-sm p-6 flex flex-col space-y-2 border-b-4 border-transparent hover:border-indigo-300 transition"
                >
                    <label
                        htmlFor={id}
                        className="text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <input
                        id={id}
                        name={id}
                        type={type}
                        value={(formData as any)[id]}
                        onChange={handleChange}
                        required
                        {...props}
                        className="bg-transparent border-none border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 text-gray-900 placeholder-gray-400 py-2 px-1"
                    />
                </div>
            ))}

            {/* Selects */}
            {[
                {
                    id: "academic_level",
                    label: "2. Nivel académico",
                    options: [
                        { value: "", text: "Selecciona tu nivel académico" },
                        { value: "High School", text: "High School" },
                        { value: "Undergraduate", text: "Undergraduate" },
                        { value: "Graduate", text: "Graduate" },
                    ],
                },
                {
                    id: "gender",
                    label: "3. Género",
                    options: [
                        { value: "", text: "Selecciona tu género" },
                        { value: "Female", text: "Femenino" },
                        { value: "Male", text: "Masculino" },
                    ],
                },
                {
                    id: "most_used_platform",
                    label: "5. Red social más usada",
                    options: [
                        { value: "", text: "Selecciona una red social" },
                        { value: "Instagram" },
                        { value: "TikTok" },
                        { value: "Facebook" },
                        { value: "Twitter" },
                        { value: "YouTube" },
                        { value: "Snapchat" },
                        { value: "LinkedIn" },
                        { value: "WhatsApp" },
                    ].map((opt) =>
                        typeof opt === "string"
                            ? { value: opt, text: opt }
                            : opt
                    ),
                },
                {
                    id: "academic_impact",
                    label: "7. ¿Afecta tu rendimiento académico?",
                    options: [
                        { value: "", text: "Selecciona tu respuesta" },
                        { value: "1", text: "Sí" },
                        { value: "0", text: "No" },
                    ],
                },
                {
                    id: "relationship_status",
                    label: "9. Relación actual",
                    options: [
                        { value: "", text: "Selecciona tu respuesta" },
                        { value: "1", text: "Sí" },
                        { value: "0", text: "No" },
                    ],
                },
            ].map(({ id, label, options }) => (
                <div
                    key={id}
                    className="bg-white rounded-lg shadow-sm p-6 flex flex-col space-y-2 border-b-4 border-transparent hover:border-indigo-300 transition"
                >
                    <label
                        htmlFor={id}
                        className="text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <select
                        id={id}
                        name={id}
                        value={(formData as any)[id]}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-none border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 text-gray-900 py-2 px-1"
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.text}
                            </option>
                        ))}
                    </select>
                </div>
            ))}

            {/* Botón */}
            <div className="col-span-full flex justify-center mt-4">
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-10 rounded-full shadow-md transition"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </div>

            {/* Mensajes */}
            {responseMessage && (
                <p className="col-span-full text-center text-green-600">
                    {responseMessage}
                </p>
            )}
            {errorMessage && (
                <p className="col-span-full text-center text-red-600">
                    {errorMessage}
                </p>
            )}
        </form>

    );
};

export default SocialMediaSurveyForm;
