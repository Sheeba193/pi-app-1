'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function ArtistsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const sampleArtists = [
    { id: 1, name: 'Gospel Choir International', genre: 'Gospel', followers: '125K', verified: true },
    { id: 2, name: 'Celestial Voices', genre: 'Contemporary Worship', followers: '89K', verified: true },
    { id: 3, name: 'Sacred Melodies', genre: 'Traditional Gospel', followers: '65K', verified: true },
    { id: 4, name: 'Harmony Angels', genre: 'Spiritual Music', followers: '52K', verified: false },
    { id: 5, name: 'Grace Singers', genre: 'Gospel Pop', followers: '41K', verified: true },
    { id: 6, name: 'Anointed Voices', genre: 'Worship', followers: '38K', verified: false },
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
            <Users size={32} className="text-blue-600" />
            {t('artistsSearch')}
          </h1>
          <p className="text-gray-600 mb-6">{t('artistsSearchDesc')}</p>

          <div className="flex gap-2">
            <Input placeholder="Search artists, groups..." className="flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArtists.map((artist) => (
            <Card key={artist.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {artist.name}
                      {artist.verified && <span className="text-blue-600">✓</span>}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Genre</p>
                  <p className="font-semibold">{artist.genre}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Followers</p>
                  <p className="font-semibold">{artist.followers}</p>
                </div>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
