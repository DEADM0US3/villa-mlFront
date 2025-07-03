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

            const res = await axios.post('http://localhost:8000/form', form, {
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
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 grid grid-cols-3 gap-5">
            <input type="hidden" name="country" value={'Mexico'} />

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
                <label htmlFor="age" className="block font-bold text-lg text-gray-800">1. ¿Cuántos años tienes?</label>
                <input type="number" name="age" id="age" min="10" max="100" required placeholder="Ingresa tu edad"
                       value={formData.age} onChange={handleChange}
                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Nivel académico */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
                <label htmlFor="academic_level" className="block font-bold text-lg text-gray-800">2. Academic Level</label>
                <select name="academic_level" id="academic_level" required value={formData.academic_level} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select your academic level</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                </select>
            </div>

            {/* Gender */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
                <label htmlFor="gender" className="block font-bold text-lg text-gray-800">3. Gender</label>
                <select name="gender" id="gender" required value={formData.gender} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select your gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>

            {/* Horas promedio de uso diario */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-1">
                <label htmlFor="usage_hours" className="block font-bold text-lg text-gray-800">4. Horas promedio de uso diario</label>
                <input type="number" name="usage_hours" id="usage_hours" step="0.1" min="0" max="24"
                       placeholder="Horas en promedio" value={formData.usage_hours} onChange={handleChange}
                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Red social más usada */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-2">
                <label htmlFor="most_used_platform" className="block font-bold text-lg text-gray-800">5. Red social más usada</label>
                <select name="most_used_platform" id="most_used_platform" required value={formData.most_used_platform} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Selecciona una red social</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Snapchat">Snapchat</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="WeChat">WeChat</option>
                    <option value="LINE">LINE</option>
                    <option value="KakaoTalk">KakaoTalk</option>
                    <option value="VKontakte">VKontakte</option>
                </select>
            </div>

            {/* Horas de sueño */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-1">
                <label htmlFor="sleep_hours" className="block font-bold text-lg text-gray-800">6. Horas de sueño por noche</label>
                <input type="number" name="sleep_hours" id="sleep_hours" step="0.1" min="0" max="12"
                       placeholder="Horas en promedio" value={formData.sleep_hours} onChange={handleChange}
                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Impacto académico */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-1">
                <label htmlFor="academic_impact" className="block font-bold text-lg text-gray-800">7. ¿Afecta tu rendimiento académico?</label>
                <select name="academic_impact" id="academic_impact" required value={formData.academic_impact} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Selecciona tu respuesta</option>
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
            </div>

            {/* Conflictos por redes sociales */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-1">
                <label htmlFor="conflicts_over_social_media" className="block font-bold text-lg text-gray-800">8. Conflictos por redes sociales</label>
                <input type="number" name="conflicts_over_social_media" id="conflicts_over_social_media" min="0" required
                       value={formData.conflicts_over_social_media} onChange={handleChange}
                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Relación amorosa */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-1">
                <label htmlFor="relationship_status" className="block font-bold text-lg text-gray-800">9. Relación actual</label>
                <select name="relationship_status" id="relationship_status" required value={formData.relationship_status} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Selecciona tu respuesta</option>
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
            </div>

            {/* Botón de envío */}
            <div className="text-center md:text-left">
                <button type="submit"
                        className="bg-[#A2CDFF] hover:bg-[#005BC2] text-[#005BC2] hover:text-[#A2CDFF] font-semibold py-3 px-8 rounded-full transition">
                    Enviar
                </button>
            </div>

            {loading && <p>Enviando...</p>}
            {responseMessage && <p className="text-green-600">{responseMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        </form>
    );
};

export default SocialMediaSurveyForm;
