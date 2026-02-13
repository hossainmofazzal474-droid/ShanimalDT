
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Category, Disease, MatchResult } from '../types';
import { DISEASES } from '../data/diseases';

const Diagnosis: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [availableSymptoms, setAvailableSymptoms] = useState<string[]>([]);

  useEffect(() => {
    // Collect all unique symptoms for the chosen category
    const filteredDiseases = DISEASES.filter(d => d.category === (category as Category));
    const symptomsSet = new Set<string>();
    filteredDiseases.forEach(d => {
      d.symptoms_list.forEach(s => symptomsSet.add(s));
    });
    setAvailableSymptoms(Array.from(symptomsSet));
  }, [category]);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom]
    );
  };

  const handleDiagnose = () => {
    if (selectedSymptoms.length === 0) {
      alert("অনুগ্রহ করে অন্তত একটি লক্ষণ নির্বাচন করুন।");
      return;
    }

    const filteredDiseases = DISEASES.filter(d => d.category === (category as Category));
    
    // Logic for matching: Jaccard-like similarity or simply match count
    const results: MatchResult[] = filteredDiseases.map(disease => {
      const intersection = disease.symptoms_list.filter(s => selectedSymptoms.includes(s));
      const matchPercentage = (intersection.length / disease.symptoms_list.length) * 100;
      return { disease, matchPercentage };
    });

    // Sort by match percentage descending
    const sortedResults = results
      .filter(r => r.matchPercentage > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);

    // Pass results to state in navigation
    navigate('/result', { state: { results: sortedResults, selectedCount: selectedSymptoms.length } });
  };

  return (
    <div className="animate-fadeIn pb-20">
      <div className="mb-6">
        <button onClick={() => navigate('/')} className="text-[#2E7D32] flex items-center text-sm font-medium">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          পেছনে যান
        </button>
        <h2 className="text-2xl font-bold mt-2 text-gray-800">
          {category === 'Poultry' ? 'হাঁস-মুরগির লক্ষণসমূহ' : 'গবাদি পশুর লক্ষণসমূহ'}
        </h2>
        <p className="text-gray-500 text-sm">নিচের তালিকা থেকে লক্ষণগুলো নির্বাচন করুন:</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {availableSymptoms.map((symptom, idx) => (
            <label key={idx} className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 text-[#2E7D32] rounded border-gray-300 focus:ring-[#2E7D32]"
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
              />
              <span className="ml-3 text-gray-700">{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sticky Diagnose Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg flex justify-center">
        <button
          onClick={handleDiagnose}
          className="bg-[#2E7D32] hover:bg-[#256628] text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform active:scale-95 disabled:opacity-50"
          disabled={selectedSymptoms.length === 0}
        >
          রোগ নির্ণয় করুন ({selectedSymptoms.length})
        </button>
      </div>
    </div>
  );
};

export default Diagnosis;
