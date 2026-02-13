import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Result from './pages/Result';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Navigation Bar */}
        <header className="bg-[#2E7D32] text-white shadow-lg sticky top-0 z-50">
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
              <Link to="/" className="hover:text-green-200 text-sm font-bold uppercase tracking-wider">হোম</Link>
              <Link to="/about" className="hover:text-green-200 text-sm font-bold uppercase tracking-wider">সম্পর্কে</Link>
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
        <footer className="bg-[#8D6E63] text-white py-8 mt-auto">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4 opacity-50 flex justify-center">
               <div className="h-px bg-white w-24"></div>
            </div>
            <p className="text-sm font-medium">© ২০২৫ ShanimalDT</p>
            <div className="text-xs mt-2 opacity-80 space-y-1">
              <p className="font-bold">মোফাজ্জল হোসেন</p>
              <p>৪র্থ বর্ষের শিক্ষার্থী, ভেটেরিনারি মেডিসিন ও এনিমেল সায়েন্স অনুষদ</p>
              <p>গাজীপুর কৃষি বিশ্ববিদ্যালয়</p>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;