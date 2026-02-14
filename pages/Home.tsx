import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <div className="text-center space-y-4 py-6">
        <h2 className="text-5xl font-black text-[#2E7D32] tracking-tight">ShanimalDT</h2>
        <p className="text-gray-600 max-w-lg mx-auto font-medium text-lg">
          আপনার পশুপাখির সুস্থতা নিশ্চিত করতে সঠিক লক্ষণ নির্বাচন করুন এবং রোগের সম্ভাব্য কারণ ও প্রতিকার জানুন।
        </p>
      </div>

      {/* Steps Section - Moved Up */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-[#2E7D32] mb-5 flex items-center text-xl">
          <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          সহজ ৩টি ধাপ:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50/50 border border-green-100">
            <div className="bg-[#2E7D32] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">১</div>
            <p className="font-semibold text-gray-700">প্রাণীর বিভাগ নির্বাচন করুন</p>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50/50 border border-green-100">
            <div className="bg-[#2E7D32] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">২</div>
            <p className="font-semibold text-gray-700">লক্ষণগুলো টিক দিন</p>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50/50 border border-green-100">
            <div className="bg-[#2E7D32] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">৩</div>
            <p className="font-semibold text-gray-700">ফলাফল ও প্রতিকার দেখুন</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-green-500 inline-block pb-2 px-4 rounded-lg">
          যেকোনো একটি অপশন নির্বাচন করুন!
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Poultry Option */}
        <button
          onClick={() => navigate('/diagnosis/Poultry')}
          className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-10 flex flex-col items-center border-2 border-[#2E7D32] overflow-hidden"
        >
          <span className="text-3xl font-bold text-gray-800">হাঁস-মুরগি (Poultry)</span>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="bg-green-100 text-[#2E7D32] px-4 py-1.5 rounded-full text-sm font-bold">মুরগি</span>
            <span className="bg-green-100 text-[#2E7D32] px-4 py-1.5 rounded-full text-sm font-bold">হাঁস</span>
            <span className="bg-green-100 text-[#2E7D32] px-4 py-1.5 rounded-full text-sm font-bold">কোয়েল</span>
            <span className="bg-green-100 text-[#2E7D32] px-4 py-1.5 rounded-full text-sm font-bold">কবুতর</span>
          </div>
          <div className="mt-8 bg-[#2E7D32] text-white text-base font-bold px-10 py-3 rounded-full transition-all shadow-lg group-hover:scale-105 active:scale-95">
            রোগ নির্ণয় শুরু করুন
          </div>
        </button>

        {/* Livestock Option */}
        <button
          onClick={() => navigate('/diagnosis/Livestock')}
          className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-10 flex flex-col items-center border-2 border-[#8D6E63] overflow-hidden"
        >
          <span className="text-3xl font-bold text-gray-800">গবাদি পশু (Livestock)</span>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="bg-amber-100 text-[#8D6E63] px-4 py-1.5 rounded-full text-sm font-bold">গরু</span>
            <span className="bg-amber-100 text-[#8D6E63] px-4 py-1.5 rounded-full text-sm font-bold">ছাগল</span>
            <span className="bg-amber-100 text-[#8D6E63] px-4 py-1.5 rounded-full text-sm font-bold">মহিষ</span>
            <span className="bg-amber-100 text-[#8D6E63] px-4 py-1.5 rounded-full text-sm font-bold">ভেড়া</span>
          </div>
          <div className="mt-8 bg-[#8D6E63] text-white text-base font-bold px-10 py-3 rounded-full transition-all shadow-lg group-hover:scale-105 active:scale-95">
            রোগ নির্ণয় শুরু করুন
          </div>
        </button>
      </div>

      {/* Developer Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
           <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-80">অ্যাপটির রূপকার</h3>
              <h2 className="text-4xl font-black">মোফাজ্জল হোসেন</h2>
              <p className="text-xl font-bold opacity-90">৪র্থ বর্ষের শিক্ষার্থী</p>
              <div className="pt-2">
                 <p className="font-medium opacity-80">ভেটেরিনারি মেডিসিন ও এনিমেল সায়েন্স অনুষদ</p>
                 <p className="font-medium opacity-80">গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a 
              href="https://www.facebook.com/MofazzalHSN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#2E7D32] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-50 transition-colors flex items-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>ফেসবুক প্রোফাইল</span>
            </a>
            <button 
              onClick={() => navigate('/about')}
              className="text-white border-b-2 border-white/30 hover:border-white transition-all text-sm font-bold pb-0.5"
            >
              অ্যাপ সম্পর্কে বিস্তারিত জানুন →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;