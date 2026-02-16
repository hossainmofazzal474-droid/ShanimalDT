import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "https://i.postimg.cc/59BKjd9H/IMG-20260215-195818-713.jpg";
  const livestockBgUrl = "https://i.postimg.cc/sgXPfshP/IMG-1432.jpg";
  const poultryBgUrl = "https://i.postimg.cc/V6CQ3xRB/IMG-1431.jpg";
  const stepsBgUrl = "https://i.postimg.cc/m2QMbhkB/6097942611101420748.jpg";

  return (
    <div className="flex flex-col space-y-8 animate-fadeIn pb-12">
      <div className="text-center space-y-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4 mb-2">
          <img 
            src={logoUrl} 
            className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-2xl border-4 border-white object-cover transform transition-transform hover:scale-105" 
            alt="Logo" 
          />
          <h2 className="text-5xl md:text-6xl font-black text-[#2E7D32] tracking-tight">ShanimalDT</h2>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto font-medium text-lg">
          আপনার পশুপাখির সুস্থতা নিশ্চিত করতে সঠিক লক্ষণ নির্বাচন করুন এবং রোগের সম্ভাব্য কারণ ও প্রতিকার জানুন।
        </p>
      </div>

      {/* Steps Section with 100% Opacity Background Image */}
      <div 
        className="relative p-8 rounded-[2.5rem] border-4 border-green-600 shadow-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${stepsBgUrl}')` }}
      >
        {/* Subtle overlay to ensure text readability without dimming the image significantly */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        
        <div className="relative z-10">
          <h3 className="font-black text-white mb-6 flex items-center text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <svg className="w-8 h-8 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            সহজ ৩টি ধাপ:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 shadow-md border-2 border-white">১</div>
              <p className="font-bold text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">প্রাণীর বিভাগ নির্বাচন করুন</p>
            </div>
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 shadow-md border-2 border-white">২</div>
              <p className="font-bold text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">লক্ষণগুলো টিক দিন</p>
            </div>
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 shadow-md border-2 border-white">৩</div>
              <p className="font-bold text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">ফলাফল ও প্রতিকার দেখুন</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-green-500 inline-block pb-2 px-4 rounded-lg">
          যেকোনো একটি অপশন নির্বাচন করুন!
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Poultry Option with 100% Opacity Image Background */}
        <button
          onClick={() => navigate('/diagnosis/Poultry')}
          className="group relative rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-10 flex flex-col items-center border-4 border-green-600 overflow-hidden bg-cover bg-center min-h-[220px]"
          style={{ backgroundImage: `url('${poultryBgUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-0"></div>
          
          <span className="text-3xl font-black text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            হাঁস-মুরগি (Poultry)
          </span>
          <div className="mt-4 flex flex-wrap justify-center gap-2 relative z-10">
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">মুরগি</span>
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">হাঁস</span>
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">কবুতর</span>
          </div>
          <div className="mt-8 bg-[#2E7D32] text-white text-base font-bold px-10 py-3 rounded-full transition-all shadow-xl group-hover:scale-105 active:scale-95 relative z-10 group-hover:bg-green-500 ring-2 ring-white/50">
            রোগ নির্ণয় শুরু করুন
          </div>
        </button>

        {/* Livestock Option with 100% Opacity Image Background */}
        <button
          onClick={() => navigate('/diagnosis/Livestock')}
          className="group relative rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-10 flex flex-col items-center border-4 border-green-600 overflow-hidden bg-cover bg-center min-h-[220px]"
          style={{ backgroundImage: `url('${livestockBgUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-0"></div>
          
          <span className="text-3xl font-black text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            গবাদি পশু (Livestock)
          </span>
          <div className="mt-4 flex flex-wrap justify-center gap-2 relative z-10">
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">গরু</span>
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">ছাগল</span>
            <span className="bg-white/90 text-green-900 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200 shadow-md backdrop-blur-sm">ভেড়া</span>
          </div>
          <div className="mt-8 bg-green-600 text-white text-base font-bold px-10 py-3 rounded-full transition-all shadow-xl group-hover:scale-105 active:scale-95 relative z-10 group-hover:bg-green-500 ring-2 ring-white/50">
            রোগ নির্ণয় শুরু করুন
          </div>
        </button>
      </div>

      {/* Creator Information Section - Text Only with Social Link */}
      <div className="mt-16 pt-10 border-t border-green-200 text-center animate-fadeIn">
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-green-100 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-[#2E7D32] mb-3">উদ্ভাবক ও নির্মাতার তথ্য</h3>
          <div className="space-y-2">
            <p className="text-xl font-bold text-gray-800">মোফাজ্জল হোসেন</p>
            <p className="text-gray-600 font-semibold">৪র্থ বর্ষের শিক্ষার্থী, ভেটেরিনারি মেডিসিন এন্ড এনিমেল সায়েন্স অনুষদ</p>
            <p className="text-gray-500">গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
          </div>
          
          <div className="mt-6 flex flex-col items-center space-y-4">
            <a 
              href="https://www.facebook.com/MofazzalHSN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>ফেসবুক প্রোফাইল</span>
            </a>
            
            <button 
              onClick={() => navigate('/about')}
              className="text-[#2E7D32] font-bold hover:underline flex items-center space-x-1"
            >
              <span>বিস্তারিত জানুন</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;