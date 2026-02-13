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
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-green-100 pb-2 mb-4">আমাদের লক্ষ্য (Our Mission)</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              ShanimalDT হলো বাংলাদেশের গবাদি পশু ও হাঁস-মুরগির স্বাস্থ্য সুরক্ষায় নিবেদিত একটি ডিজিটাল প্ল্যাটফর্ম। আমাদের মূল লক্ষ্য হলো আধুনিক প্রযুক্তির মাধ্যমে প্রাণিসম্পদ খাতের সঠিক তথ্য এবং রোগ নির্ণয়ের সেবা প্রান্তিক খামারিদের হাতের নাগালে পৌঁছে দেওয়া।
            </p>

            <h4 className="text-xl font-bold text-[#2E7D32] mb-4">কেন ShanimalDT ব্যবহার করবেন?</h4>
            <p className="text-gray-600 mb-4 font-medium">
              বাংলাদেশে পোল্ট্রি এবং লাইভস্টক সেক্টরে সঠিক সময়ে রোগ শনাক্ত করতে না পারার কারণে খামারিরা প্রায়ই বড় ধরণের ক্ষতির সম্মুখীন হন। এই অ্যাপটি এমনভাবে তৈরি করা হয়েছে যেন:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-700"><strong>সহজ রোগ নির্ণয়:</strong> পশুর শরীরের অস্বাভাবিক লক্ষণগুলো সিলেক্ট করেই আপনি সম্ভাব্য রোগ সম্পর্কে জানতে পারবেন।</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-700"><strong>সহজ ভাষা:</strong> কঠিন মেডিকেল টার্মের পরিবর্তে সাধারণ খামারিদের উপযোগী সহজ বাংলা ভাষা ব্যবহার করা হয়েছে।</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-700"><strong>সঠিক নির্দেশনা:</strong> প্রতিটি রোগের জন্য কার্যকর প্রতিরোধ ব্যবস্থা, নিয়ন্ত্রণ এবং প্রাথমিক চিকিৎসার পরামর্শ দেওয়া হয়েছে।</span>
              </li>
            </ul>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h4 className="text-amber-800 font-bold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                সতর্কবার্তা
              </h4>
              <p className="text-amber-900 text-sm leading-relaxed">
                ShanimalDT মূলত সচেতনতা বৃদ্ধি এবং প্রাথমিক সহায়তার জন্য তৈরি। পশুর অবস্থা গুরুতর হলে বা জটিল কোনো রোগের ক্ষেত্রে সর্বদা আপনার নিকটস্থ রেজিস্টার্ড ভেটেরিনারি সার্জন বা উপজেলা প্রাণিসম্পদ কর্মকর্তার পরামর্শ গ্রহণ করুন।
              </p>
            </div>
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