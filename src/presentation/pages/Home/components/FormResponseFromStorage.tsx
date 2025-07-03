import React, { useState, useEffect } from "react";
import FormResponseCharts from "./FormResponseCharts";

interface FormResponse {
    addicted_score: number;
    mental_health_score: number;
    recommendations: string[];
    comparison_data: {
        addiction_distribution: number[];
        mental_health_distribution: number[];
        user_scores: {
            addicted_score: number;
            mental_health_score: number;
        };
    };
}

const FormResponseFromStorage: React.FC = () => {
    const [formResponse, setFormResponse] = useState<FormResponse | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem("surveyResult");
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setFormResponse(parsedData);
            } catch (error) {
                console.error("Error parsing localStorage data:", error);
            }
        }
    }, []);

    if (!formResponse) {
        return <p>No hay datos guardados para mostrar.</p>;
    }

    return <FormResponseCharts data={formResponse} />;
};

export default FormResponseFromStorage;
