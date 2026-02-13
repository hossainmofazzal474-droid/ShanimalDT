
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MatchResult } from '../types';

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results as MatchResult[] || [];
  const selectedCount = location.state?.selectedCount || 0;

  if (results.length === 0) {
    return (
      <div className="text-center py-20 space-y-6">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold text-gray-800">কোনো রোগ খুঁজে পাওয়া যায়নি</h2>
        <p className="text-gray-500">আপনার নির্বাচিত লক্ষণের সাথে কোনো রোগের মিল পাওয়া যায়নি। পুনরায় চেষ্টা করুন।</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#2E7D32] text-white px-8 py-2 rounded-full font-bold"
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
        <button onClick={() => navigate('/')} className="text-sm text-[#2E7D32] font-semibold underline">নতুন করে শুরু করুন</button>
      </div>

      <p className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
        {selectedCount} টি লক্ষণের উপর ভিত্তি করে নিচের ফলাফলগুলো পাওয়া গেছে:
      </p>

      <div className="space-y-8">
        {results.map((res, index) => (
          <div key={res.disease.id} className={`bg-white rounded-2xl shadow-md border-t-8 ${index === 0 ? 'border-[#2E7D32]' : 'border-gray-300'} overflow-hidden`}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{res.disease.name_bn}</h3>
                  <p className="text-gray-500 italic">{res.disease.name_en}</p>
                </div>
                <div className="bg-green-100 text-[#2E7D32] px-3 py-1 rounded-full text-xs font-bold">
                  {Math.round(res.matchPercentage)}% মিলেছে
                </div>
              </div>

              <div className="space-y-6">
                {/* Prevention */}
                <div>
                  <h4 className="flex items-center text-[#2E7D32] font-bold mb-1">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    প্রতিরোধ (Prevention):
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">{res.disease.prevention_bn}</p>
                </div>

                {/* Control */}
                <div>
                  <h4 className="flex items-center text-[#8D6E63] font-bold mb-1">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    নিয়ন্ত্রণ (Control):
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">{res.disease.control_bn}</p>
                </div>

                {/* Treatment */}
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <h4 className="flex items-center text-amber-800 font-bold mb-1">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    চিকিৎসা (Treatment):
                  </h4>
                  <p className="text-gray-800 font-medium leading-relaxed text-sm">{res.disease.treatment_bn}</p>
                  <p className="text-[10px] text-amber-900/60 mt-3 font-bold uppercase tracking-wider italic">* অবশ্যই রেজিস্টার্ড ভেটেরিনারি চিকিৎসকের পরামর্শ নিন।</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 text-xs text-blue-800">
        <strong>সতর্কবার্তা:</strong> এই অ্যাপটি একটি সহায়ক টুল মাত্র। চূড়ান্ত চিকিৎসা বা ব্যবস্থাপনার জন্য আপনার নিকটস্থ উপজেলা প্রাণিসম্পদ কর্মকর্তার কার্যালয় বা রেজিস্টার্ড ভেটেরিনারি চিকিৎসকের সাথে যোগাযোগ করুন।
      </div>
    </div>
  );
};

export default Result;
