import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "https://i.postimg.cc/59BKjd9H/IMG-20260215-195818-713.jpg";
  const visionImageUrl = "https://i.postimg.cc/Gpns4Nh5/IMG-20260215-195809-945.jpg";

  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
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

      {/* Steps Section */}
      <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-sm">
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

      {/* Vision Image Section with Heading Above */}
      <div className="flex flex-col items-center w-full px-4 pt-12 pb-10">
        <div className="text-center mb-8 max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-black text-[#2E7D32] leading-tight drop-shadow-sm">
            অ্যাপ উদ্ভাবক ও নির্মাতাকে নিয়ে তথ্য!
          </h3>
          <div className="h-1.5 w-32 bg-[#2E7D32] mx-auto mt-4 rounded-full opacity-20"></div>
        </div>

        <div 
          className="relative w-full max-w-sm aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
        >
          <img 
            src={visionImageUrl} 
            alt="Visionary Image" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Buttons Section below the picture */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <a 
            href="https://www.facebook.com/MofazzalHSN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2E7D32]/90 text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-[#1B5E20] transition-all flex items-center space-x-3 transform hover:scale-105 active:scale-95 w-full max-w-xs justify-center"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="text-2xl">ফেসবুক প্রোফাইল</span>
          </a>

          <button 
            onClick={() => navigate('/about')}
            className="bg-[#2E7D32] text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-[#1B5E20] transition-all flex items-center space-x-3 transform hover:scale-105 active:scale-95 w-full max-w-xs justify-center"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-xl">অ্যাপটি সম্পর্কে বিস্তারিত জানুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;