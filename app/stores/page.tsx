'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Store, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function MusicStoresPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const sampleStores = [
    { id: 1, name: 'Spotify for Gospel', region: 'Global', commission: '30%', artists: '5K+' },
    { id: 2, name: 'AppleMusic Gospel', region: 'Global', commission: '35%', artists: '3K+' },
    { id: 3, name: 'Amazon Music Worship', region: 'Global', commission: '28%', artists: '4K+' },
    { id: 4, name: 'YouTube Gospel Channel', region: 'Global', commission: '45%', artists: '8K+' },
    { id: 5, name: 'Tidal Gospel', region: 'Global', commission: '32%', artists: '2K+' },
    { id: 6, name: 'BandCamp Gospel', region: 'Global', commission: '85%', artists: '6K+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Store size={32} className="text-green-600" />
            {t('musicStores')}
          </h1>
          <p className="text-gray-600 mb-6">{t('musicStoresDesc')}</p>

          <div className="flex gap-2">
            <Input placeholder="Search music platforms..." className="flex-1" />
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe size={18} />
                  {store.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Region</p>
                  <p className="font-semibold">{store.region}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Artist Commission</p>
                  <p className="font-semibold text-green-600 flex items-center gap-1">
                    <TrendingUp size={16} />
                    {store.commission}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Featured Artists</p>
                  <p className="font-semibold">{store.artists}</p>
                </div>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Your Music
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
