import React from "react";
import ReactECharts from "echarts-for-react";

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


interface FormResponseProps {
    data: FormResponse;
}

const FormResponseCharts: React.FC<FormResponseProps> = ({ data }) => {
    const { addicted_score, mental_health_score, recommendations, comparison_data } = data;

    // 1. Gauge para nivel de adicción
    const addictionGaugeOption = {
        tooltip: {
            formatter: `{a} <br/> Nivel: ${addicted_score.toFixed(1)}`
        },
        series: [
            {
                name: "Nivel de Adicción",
                type: "gauge",
                min: 0,
                max: 100,
                detail: { formatter: "{value}" },
                data: [{ value: addicted_score, name: "Adicción" }],
                axisLine: {
                    lineStyle: {
                        width: 15,
                        color: [
                            [0.4, "#55ce63"],
                            [0.7, "#f1c40f"],
                            [1, "#e74c3c"],
                        ],
                    },
                },
            },
        ],
    };

    // 2. Gauge para salud mental
    const mentalHealthGaugeOption = {
        tooltip: {
            formatter: `{a} <br/> Nivel: ${mental_health_score.toFixed(1)}`
        },
        series: [
            {
                name: "Salud Mental",
                type: "gauge",
                min: 0,
                max: 100,
                detail: { formatter: "{value}" },
                data: [{ value: mental_health_score, name: "Salud Mental" }],
                axisLine: {
                    lineStyle: {
                        width: 15,
                        color: [
                            [0.4, "#e74c3c"],
                            [0.7, "#f1c40f"],
                            [1, "#55ce63"],
                        ],
                    },
                },
            },
        ],
    };

    return (
        <div className="space-y-8 ">

            <div className="flex flex-wrap gap-8 justify-center">
                <div style={{ width: 300, height: 300 }}>
                    <ReactECharts option={addictionGaugeOption} />
                </div>
                <div style={{ width: 300, height: 300 }}>
                    <ReactECharts option={mentalHealthGaugeOption} />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Recomendaciones</h3>
                <ul className="list-disc pl-6 text-gray-700">
                    {recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FormResponseCharts;
