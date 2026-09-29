import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { Studio } from './pages/Studio';
import { Insights } from './pages/Insights';
import { ArticleDetail } from './pages/ArticleDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticleDetail />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Route */}
            <Route path="*" element={
              <div className="h-screen bg-[var(--color-blueberry-dark)] flex flex-col items-center justify-center text-white text-center p-6">
                <h1 className="text-6xl font-heading mb-4 text-[var(--color-blueberry-primary)]">404</h1>
                <h2 className="text-3xl font-heading mb-6">LOOKS LIKE THIS STORY DOESN'T EXIST.</h2>
                <p className="text-white/60 mb-8 max-w-sm">The page you're looking for may have moved or no longer exists.</p>
                <div className="flex gap-4">
                   <a href="/" className="px-6 py-3 border border-white hover:bg-white hover:text-[var(--color-blueberry-dark)] transition-colors">BACK HOME</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
