import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsBento from './components/SolutionsBento';
import PricingAndAssessment from './components/PricingAndAssessment';
import SmedanTrustAndFooter from './components/SmedanTrustAndFooter';
import PaymentModal from './components/PaymentModal';
import { PRICING_TIERS, WHATSAPP_URL } from './data/dronebugData';
import type { PricingTier } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSMEDAN, setShowSMEDAN] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleBooking = () => {
    setSelectedTier(PRICING_TIERS[0]);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-slate-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Toaster position="top-center" richColors />

      {/* SMEDAN Modal */}
      {showSMEDAN && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowSMEDAN(false)}
          />
          <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">SMEDAN Certificate</h3>
              <button
                onClick={() => setShowSMEDAN(false)}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <iframe
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/0c4da263-4d37-4170-af3f-87521929e9a2/1787687601669_DroneBug_SMEDAN_CERTIFICATE.pdf"
              className="w-full h-[60vh]"
              title="SMEDAN Certificate"
            />
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowBooking(false)}
          />
          <div className="relative w-full max-w-md backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Book Consultation</h3>
              <button
                onClick={() => setShowBooking(false)}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
              Choose your preferred contact method to start your consultation:
            </p>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors active:scale-[0.98]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Chat on WhatsApp</span>
              </a>
              <a
                href="https://t.me/DroneBug"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors active:scale-[0.98]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600 dark:text-sky-400">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Telegram</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dronebugtechnologies@gmail.com&su=DroneBug%20Technologies%20Consultation%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors active:scale-[0.98]"
              >
                <svg width="24" height="24" viewBox="0 0 48 48" className="text-[#EA4335]">
                  <path fill="#EA4335" d="M24 5.5c-3.9 0-8.3.6-11.4 1.8-2.6 1-4.2 3-4.2 5v23.4c0 2 1.6 4 4.2 5C15.7 41.9 20.1 42.5 24 42.5s8.3-.6 11.4-1.8c2.6-1 4.2-3 4.2-5V12.3c0-2-1.6-4-4.2-5C32.3 6.1 27.9 5.5 24 5.5z"/>
                  <path fill="#fff" d="M12 17l12 8 12-8v-2l-12 8-12-8z"/>
                </svg>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Email via Gmail</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <Navbar
        onOpenSMEDAN={() => setShowSMEDAN(true)}
        onOpenBooking={handleBooking}
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
        onOpenPayment={handleBooking}
      />

      <main>
        <Hero onOpenPayment={handleBooking} />
        <SolutionsBento />
        <PricingAndAssessment onOpenBooking={setSelectedTier} />
        <SmedanTrustAndFooter onOpenSMEDAN={() => setShowSMEDAN(true)} />
      </main>

      {selectedTier && <PaymentModal tier={selectedTier} onClose={() => setSelectedTier(null)} />}
    </div>
  );
}

export default App;
