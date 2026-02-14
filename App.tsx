import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Result from './pages/Result';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col text-gray-800">
        {/* Navigation Bar */}
        <header className="bg-[#2E7D32]/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-1.5 rounded-full shadow-sm transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">ShanimalDT</h1>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/" className="hover:text-green-200 text-sm font-bold uppercase tracking-wider transition-colors">হোম</Link>
              <Link to="/about" className="hover:text-green-200 text-sm font-bold uppercase tracking-wider transition-colors">সম্পর্কে</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnosis/:category" element={<Diagnosis />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#5D4037] text-white py-10 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6 opacity-30 flex justify-center items-center space-x-4">
               <div className="h-px bg-white w-16"></div>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
               <div className="h-px bg-white w-16"></div>
            </div>
            <p className="text-sm font-medium tracking-wide">© ২০২৫ ShanimalDT - প্রাণিসম্পদ স্বাস্থ্য রক্ষায় নিবেদিত</p>
            <div className="text-xs mt-4 opacity-80 space-y-1">
              <p className="font-black text-base text-green-200 mb-1">মোফাজ্জল হোসেন</p>
              <p className="font-medium">৪র্থ বর্ষের শিক্ষার্থী, ভেটেরিনারি মেডিসিন ও এনিমেল সায়েন্স অনুষদ</p>
              <p className="italic">গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;