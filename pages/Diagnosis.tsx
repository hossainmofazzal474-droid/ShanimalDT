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
    
    const results: MatchResult[] = filteredDiseases.map(disease => {
      const intersection = disease.symptoms_list.filter(s => selectedSymptoms.includes(s));
      const matchPercentage = (intersection.length / disease.symptoms_list.length) * 100;
      return { disease, matchPercentage };
    });

    const sortedResults = results
      .filter(r => r.matchPercentage > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);

    navigate('/result', { state: { results: sortedResults, selectedCount: selectedSymptoms.length } });
  };

  return (
    <div className="animate-fadeIn pb-24">
      <div className="mb-6">
        <button onClick={() => navigate('/')} className="text-[#2E7D32] flex items-center text-sm font-medium hover:underline transition-all">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          পেছনে যান
        </button>
        <h2 className="text-2xl font-bold mt-2 text-gray-800">
          {category === 'Poultry' ? 'হাঁস-মুরগির লক্ষণসমূহ' : 'গবাদি পশুর লক্ষণসমূহ'}
        </h2>
        <p className="text-gray-600 text-lg mt-2 leading-relaxed">
          তালিকা থেকে লক্ষ্মণগুলো নির্বাচন করুন এবং নিচের <span className="bg-green-100 text-[#2E7D32] px-2 py-0.5 rounded-lg font-bold border border-green-200">'রোগ নির্ণয় করুন'</span> বাটনে ক্লিক করুন
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
        <div className="divide-y divide-gray-100">
          {availableSymptoms.map((symptom, idx) => (
            <label key={idx} className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                className="w-6 h-6 text-[#2E7D32] rounded border-gray-300 focus:ring-[#2E7D32] transition-all cursor-pointer"
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
              />
              <span className={`ml-4 text-lg transition-colors ${selectedSymptoms.includes(symptom) ? 'text-[#2E7D32] font-bold' : 'text-gray-700'}`}>
                {symptom}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sticky Diagnose Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t shadow-lg flex justify-center z-40">
        <div className="max-w-4xl w-full flex justify-center">
          <button
            onClick={handleDiagnose}
            className="bg-[#2E7D32] hover:bg-[#256628] text-white font-bold py-4 px-16 rounded-full shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
            disabled={selectedSymptoms.length === 0}
          >
            রোগ নির্ণয় করুন ({selectedSymptoms.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;