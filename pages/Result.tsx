import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MatchResult } from '../types';

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results as MatchResult[] || [];
  const selectedCount = location.state?.selectedCount || 0;

  const toBengaliNumber = (num: number | string) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, d => bengaliDigits[parseInt(d)]);
  };

  if (results.length === 0) {
    return (
      <div className="py-20 text-center space-y-6">
        <div className="text-6xl animate-bounce">😕</div>
        <h2 className="text-2xl font-bold text-gray-800">কোনো রোগ খুঁজে পাওয়া যায়নি</h2>
        <p className="text-gray-500">আপনার নির্বাচিত লক্ষণের সাথে কোনো রোগের মিল পাওয়া যায়নি। পুনরায় চেষ্টা করুন।</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#2E7D32] text-white px-8 py-2 rounded-full font-bold shadow-lg hover:bg-[#1B5E20] transition-colors"
        >
          হোমে ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">সম্ভাব্য রোগের ফলাফল</h2>
        <button 
          onClick={() => navigate('/')} 
          className="text-sm text-[#2E7D32] font-bold hover:text-[#1B5E20] transition-colors underline decoration-2 underline-offset-4"
        >
          নতুন করে শুরু করুন
        </button>
      </div>

      <div className="bg-[#E8F5E9] border-l-4 border-[#2E7D32] p-4 rounded-r-lg shadow-sm">
        <p className="text-sm text-[#2E7D32] font-semibold">
          <span className="text-lg font-bold mr-1">{toBengaliNumber(selectedCount)}</span>টি লক্ষণের ওপর ভিত্তি করে নিচের ফলাফলগুলো পাওয়া গেছে:
        </p>
      </div>

      <div className="space-y-8">
        {results.map((res, index) => (
          <div key={res.disease.id} className={`bg-white rounded-2xl shadow-xl border-t-8 ${index === 0 ? 'border-[#2E7D32]' : 'border-gray-300'} overflow-hidden transition-transform hover:scale-[1.01]`}>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div className="flex-grow">
                  <h3 className="text-3xl font-black text-gray-900 leading-tight">{res.disease.name_bn}</h3>
                  <p className="text-lg text-gray-500 italic mt-1">{res.disease.name_en}</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-green-50 px-8 py-4 rounded-3xl border-2 border-green-100 min-w-[160px] shadow-sm">
                  <span className="text-6xl font-black text-[#2E7D32] leading-none mb-1">
                    {toBengaliNumber(Math.round(res.matchPercentage))}%
                  </span>
                  <span className="text-base font-black text-[#2E7D32] uppercase tracking-widest">মিলেছে</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center text-[#2E7D32] font-bold mb-2 text-lg">
                      <div className="bg-green-100 p-1 rounded-md mr-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      প্রতিরোধ (Prevention):
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base">{res.disease.prevention_bn}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center text-[#8D6E63] font-bold mb-2 text-lg">
                      <div className="bg-amber-100 p-1 rounded-md mr-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      </div>
                      নিয়ন্ত্রণ (Control):
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base">{res.disease.control_bn}</p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 shadow-inner">
                  <h4 className="flex items-center text-amber-900 font-bold mb-3 text-lg">
                    <div className="bg-amber-200 p-1.5 rounded-lg mr-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    চিকিৎসা (Treatment):
                  </h4>
                  <p className="text-gray-900 font-semibold leading-relaxed text-base">{res.disease.treatment_bn}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;