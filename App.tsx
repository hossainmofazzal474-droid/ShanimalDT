import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Result from './pages/Result';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const logoUrl = "https://i.postimg.cc/59BKjd9H/IMG-20260215-195818-713.jpg";

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col text-gray-800">
        {/* Navigation Bar */}
        <header className="bg-[#2E7D32]/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-0.5 rounded-full shadow-sm transition-transform group-hover:scale-110 overflow-hidden w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img 
                  src={logoUrl} 
                  alt="ShanimalDT Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<svg class="w-8 h-8 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`;
                  }}
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">ShanimalDT</h1>
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
               <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                 <img src={logoUrl} alt="Logo" className="w-full h-full object-cover opacity-80" />
               </div>
               <div className="h-px bg-white w-16"></div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium tracking-wide">© ২০২৫ ShanimalDT</p>
              <p className="text-lg font-bold pt-1">মোফাজ্জল হোসেন</p>
              <p className="text-sm opacity-90">৪র্থ বর্ষের শিক্ষার্থী, ভেটেরিনারি মেডিসিন এন্ড এনিমেল সায়েন্স অনুষদ</p>
              <p className="text-sm opacity-90">গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;