'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Dashboard } from '@/components/dashboard';
import { usePiNetworkAuthentication } from '@/hooks/use-pi-network-authentication';
import { APP_CONFIG, COLORS } from '@/lib/app-config';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, authMessage, error } = usePiNetworkAuthentication();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ backgroundColor: COLORS.BACKGROUND }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">{APP_CONFIG.NAME}</div>
          <div className="text-lg mb-4 max-w-md">
            {error ? (
              <span className="text-red-600 font-semibold">{authMessage}</span>
            ) : (
              <span>{authMessage}</span>
            )}
          </div>
          {!error && (
            <div
              className="animate-spin rounded-full h-12 w-12 border-b-4 mx-auto"
              style={{ borderBottomColor: COLORS.PRIMARY }}
            ></div>
          )}
          {error && (
            <button
              className="mt-6 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: COLORS.PRIMARY }}
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    // Clear Pi token and auth state
    localStorage.removeItem('piAccessToken');
    sessionStorage.clear();
    window.location.href = '/';
  };

  return <Dashboard onLogout={handleLogout} />;
}
