'use client';
import React, { createContext, useContext, useCallback, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

type Toast = { id: number; title: string; desc?: string };

const ToastCtx = createContext<{ push: (t: Omit<Toast, 'id'>) => void }>({ push: () => {} });

export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { ...t, id }]);
    setTimeout(() => setToasts((p) => p.filter((x) => x.id !== id)), 3200);
  }, []);

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-6 right-5 z-[100] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-fadeUp flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-lift"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              {t.desc && <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{t.desc}</p>}
            </div>
            <button
              onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))}
              className="text-muted hover:text-ink"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
