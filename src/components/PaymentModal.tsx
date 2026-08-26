import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Copy,
  ArrowRight,
  ShieldCheck,
  X,
  CheckCircle,
  PaperPlaneTilt,
  Lightning,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { PAYMENT_CHANNELS, WHATSAPP_URL, BRAND } from '../data/dronebugData';
import type { PricingTier, PaymentMethod } from '../types';

function BrandLogo({ method, className }: { method: PaymentMethod; className?: string }) {
  if (method === 'opay') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#00C288" />
        <text x="12" y="13" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif">
          OP
        </text>
      </svg>
    );
  }
  if (method === 'moniepoint') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#0047FF" />
        <text x="12" y="14" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif">
          MP
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#582BE8" />
      <text x="12" y="14" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif">
        S
      </text>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#25D366"
        d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
      />
    </svg>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          toast.success('Account number copied to clipboard');
          setTimeout(() => setCopied(false), 2000);
        } catch {
          toast.error('Could not copy to clipboard');
        }
      }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur transition-colors active:scale-[0.95]"
    >
      {copied ? <Check size={14} weight="bold" /> : <Copy size={14} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function VerificationBlock({ tier, sent, setSent }: { tier: PricingTier; sent: boolean; setSent: (v: boolean) => void }) {
  const waText = encodeURIComponent(
    `Hi DroneBug, I just paid ${tier.price} for the "${tier.name}" consultation via ${tier.payment.label}. Here is my payment receipt.`
  );
  const waUrl = `https://wa.me/2347035716349?text=${waText}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dronebugtechnologies@gmail.com&su=${encodeURIComponent(
    `DroneBug Payment - ${tier.name}`
  )}&body=${encodeURIComponent(
    `Hi DroneBug, I just paid ${tier.price} for the "${tier.name}" consultation via ${tier.payment.label}. Please find my payment receipt attached.`
  )}`;

  if (!sent) {
    return (
      <button
        onClick={() => setSent(true)}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all active:scale-[0.98]"
      >
        <CheckCircle size={18} weight="fill" />
        I Have Sent Payment
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 p-4 space-y-2"
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Send your payment receipt to DroneBug so we can verify and book your consultation right away.
      </p>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-full text-sm font-bold text-white bg-[#25D366] hover:brightness-105 transition-all active:scale-[0.98]"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Send via WhatsApp
        </a>
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#EA4335] to-[#C5221F] hover:brightness-105 transition-all active:scale-[0.98]"
        >
          <PaperPlaneTilt size={15} weight="fill" />
          Send via Gmail
        </a>
      </div>
    </motion.div>
  );
}

export default function PaymentModal({ tier, onClose }: { tier: PricingTier; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const method = tier.payment.method;
  const isSelar = method === 'selar';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        className="relative w-full max-w-lg backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-white/30 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-br ${tier.payment.gradient} p-6 text-white`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            aria-label="Close"
          >
            <X size={18} weight="bold" />
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 rounded-full px-3 py-1 mb-3">
            <ShieldCheck size={14} weight="fill" />
            Secure Checkout
          </div>
          <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold">{tier.price}</span>
            <span className="text-sm text-white/80">{tier.duration}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold bg-white text-zinc-800 rounded-full px-3 py-1">
            <Lightning size={13} weight="fill" />
            Designated gateway: {tier.payment.label}
          </div>
        </div>

        <div className="p-6 space-y-5">
          {isSelar ? (
            /* Selar: one-click instant checkout */
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-violet-600 to-indigo-500 shadow-lg shadow-violet-500/20">
              <a
                href={PAYMENT_CHANNELS.selarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-700 to-indigo-600 p-4 text-white hover:brightness-110 transition-all active:scale-[0.99]"
              >
                <BrandLogo method="selar" className="w-11 h-11 rounded-xl bg-white/90 ring-2 ring-white/40" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold leading-tight">Pay {tier.price} instantly with Selar</div>
                  <div className="text-xs text-violet-100">Secure gateway - card, bank or USSD</div>
                </div>
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          ) : (
            /* OPay / Moniepoint: 1-click bank transfer */
            <div className={`rounded-2xl bg-gradient-to-r ${tier.payment.gradient} text-white p-4 shadow-lg shadow-indigo-500/20`}>
              <div className="flex items-center gap-3 mb-3">
                <BrandLogo method={method} className="w-11 h-11 rounded-xl bg-white/90 ring-2 ring-white/40" />
                <div>
                  <div className="font-bold leading-tight">{tier.payment.label} transfer</div>
                  <span className="inline-block mt-0.5 text-[10px] font-semibold bg-white/20 rounded-full px-2 py-0.5">
                    Consultancy Fee - {tier.price}
                  </span>
                </div>
                <div className="ml-auto">
                  <CopyButton value={PAYMENT_CHANNELS[method].accountNumber} />
                </div>
              </div>
              <div className="font-mono text-lg font-extrabold tracking-widest">{PAYMENT_CHANNELS[method].accountNumber}</div>
              <div className="text-sm text-white/90 mt-0.5">{PAYMENT_CHANNELS[method].accountName}</div>
              <div className="mt-2 text-[11px] font-medium bg-white/15 rounded-lg px-3 py-2 inline-block">
                Send exactly {tier.price} and keep the receipt.
              </div>
            </div>
          )}

          {/* Alternate channels (collapsed legend) */}
          {method !== 'selar' && (
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
              Alternate: Selar online
              <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>
          )}

          <VerificationBlock tier={tier} sent={sent} setSent={setSent} />
        </div>
      </motion.div>
    </div>
  );
}