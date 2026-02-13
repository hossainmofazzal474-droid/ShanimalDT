
export type Category = 'Poultry' | 'Livestock';

export interface Disease {
  id: string;
  name_bn: string;
  name_en: string;
  category: Category;
  symptoms_list: string[];
  prevention_bn: string;
  control_bn: string;
  treatment_bn: string;
}

export interface MatchResult {
  disease: Disease;
  matchPercentage: number;
}
