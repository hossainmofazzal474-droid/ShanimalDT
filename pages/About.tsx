
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto py-4 md:py-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#2E7D32] p-10 text-center text-white relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white/30 relative z-10">
             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
          </div>
          <h2 className="text-3xl font-black mb-1 relative z-10">ShanimalDT</h2>
          <p className="opacity-90 font-medium tracking-wide relative z-10 italic">Service, Animal, Diagnosis, Treatment</p>
        </div>
        
        <div className="p-8 space-y-8">
          <section>
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-100 pb-2 mb-4">উদ্দেশ্য (Mission)</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              বাংলাদেশের গ্রামীণ খামারি ও প্রাণিসম্পদ শিক্ষার্থীদের গবাদি পশু ও হাঁস-মুরগির সাধারণ রোগগুলো দ্রুত এবং সহজেই শনাক্ত করতে সাহায্য করার জন্য এই "অফলাইন" উপযোগী অ্যাপ্লিকেশনটি তৈরি করা হয়েছে। আমাদের লক্ষ্য প্রান্তিক খামারিদের কাছে আধুনিক চিকিৎসা তথ্য পৌঁছে দেওয়া।
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-3xl border border-green-100 shadow-inner text-center">
            <h3 className="text-lg font-bold text-[#2E7D32] mb-4 uppercase tracking-widest text-xs">ডেভেলপার ক্রেডিট</h3>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-2xl font-black text-gray-900 leading-tight">মোফাজ্জল হোসেন</p>
              <p className="text-[#2E7D32] font-bold text-base">৪র্থ বর্ষের শিক্ষার্থী</p>
              <p className="text-sm text-gray-700 font-semibold">ভেটেরিনারি মেডিসিন ও এনিমেল সায়েন্স অনুষদ</p>
              <p className="text-sm text-gray-600 font-medium">গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
              
              <div className="mt-4 flex justify-center space-x-3">
                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-green-700 border border-green-200 shadow-sm">STUDENT</span>
                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-green-700 border border-green-200 shadow-sm">DEVELOPER</span>
              </div>
            </div>
          </section>

          <section className="text-center pt-4">
            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-tighter">আমাদের সাথে যুক্ত হোন</h3>
            <div className="flex justify-center">
              <a 
                href="https://www.facebook.com/MofazzalHSN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
