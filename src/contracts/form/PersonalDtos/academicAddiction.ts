export interface AcademicAddiction {
    user_addicted_score: number;
    user_academic_level: string;
    average_for_same_level: number;
    comparison_result: 'above average' | 'below average' | 'around average' | string;
    description: string;
}
