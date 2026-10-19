'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Globe, Volume2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '@/lib/languages';
import { FeatureGrid } from '@/components/feature-grid';
import { GoogleTranslateWidget } from '@/components/google-translate-widget';

interface DashboardHeaderProps {
  onLogout: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout }) => {
  const { t, language, changeLanguage, languages } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t('welcome')}</h1>
        <p className="text-gray-600">
          Discover biblical and godly music from artists worldwide
        </p>
      </div>

      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Globe size={16} />
              {languages[language]?.nativeName || language}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="max-h-64 overflow-y-auto">
            {Object.entries(languages).map(([code, { name, nativeName }]) => (
              <DropdownMenuItem
                key={code}
                onClick={() => changeLanguage(code as LanguageCode)}
                className="cursor-pointer"
              >
                {nativeName}
                {code === language && ' ✓'}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button onClick={onLogout} variant="destructive" size="sm" className="gap-2">
          <LogOut size={16} />
          {t('logout')}
        </Button>
      </div>
    </div>
  );
};

interface TrendingChartProps {
  language: string;
}

const TrendingChart: React.FC<TrendingChartProps> = ({ language }) => {
  const { t } = useLanguage();

  // Sample trending songs data
  const trendingSongs = [
    { rank: 1, title: 'Hallelujah', artist: 'Gospel Choir', plays: '2.5M' },
    { rank: 2, title: 'Amazing Grace', artist: 'Celestial Voices', plays: '2.1M' },
    { rank: 3, title: 'Peace in the Storm', artist: 'Sacred Melodies', plays: '1.8M' },
    { rank: 4, title: 'God\'s Love', artist: 'Harmony Angels', plays: '1.6M' },
    { rank: 5, title: 'Blessed Assurance', artist: 'Grace Singers', plays: '1.4M' },
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t('trendingNow')}</CardTitle>
        <CardDescription>Top songs globally this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {trendingSongs.map((song) => (
            <div
              key={song.rank}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {song.rank}
                </div>
                <div>
                  <p className="font-semibold">{song.title}</p>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-700">{song.plays}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { t, language } = useLanguage();
  const [showTranslate] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <DashboardHeader onLogout={onLogout} />

        {/* Google Translate Widget */}
        {showTranslate && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border flex items-center gap-3">
            <Volume2 size={20} className="text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <GoogleTranslateWidget defaultLanguage={language} />
            </div>
          </div>
        )}

        {/* Trending Chart */}
        <TrendingChart language={language} />

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Explore All Features</h2>
          <FeatureGrid />
        </div>

        {/* Pi Payment Section */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>💰</span> {t('piWallet')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">
              Make secure payments through Pi Network. Copy the wallet address below or scan the QR code.
            </p>
            <div className="bg-white p-4 rounded-lg border border-dashed">
              <p className="text-xs text-gray-600 mb-2">Wallet Address:</p>
              <p className="font-mono text-sm break-all mb-3">{t('paymentAddress')}</p>
              <Button
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(t('paymentAddress'));
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {t('copyAddress')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t">
          <Link href="/documentation" className="text-blue-600 hover:underline text-sm font-medium">
            📖 {t('documentation')}
          </Link>
          <Link href="/faq" className="text-blue-600 hover:underline text-sm font-medium">
            ❓ {t('faq')}
          </Link>
          <Link href="/support" className="text-blue-600 hover:underline text-sm font-medium">
            🤝 {t('support')}
          </Link>
          <Link href="/privacy" className="text-blue-600 hover:underline text-sm font-medium">
            🔒 {t('privacy')}
          </Link>
        </div>
      </div>
    </div>
  );
};
