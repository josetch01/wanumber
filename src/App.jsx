import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import FormularioPedido from './components/FormularioPedido';
import PricingPage from './components/PricingPage';
import TermsPage from './components/TermsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll hacia arriba
    window.scrollTo(0, 0);
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    console.log('Plan seleccionado en App:', planName);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        
        {currentPage === 'home' && (
          <FormularioPedido onNavigate={handleNavigate} selectedPlan={selectedPlan} />
        )}
        
        {currentPage === 'pricing' && (
          <PricingPage onSelectPlan={handleSelectPlan} onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;