'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Music, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function SongsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const sampleSongs = [
    { id: 1, title: 'Hallelujah', artist: 'Gospel Choir', duration: '3:45', plays: '2.5M' },
    { id: 2, title: 'Amazing Grace', artist: 'Celestial Voices', duration: '4:02', plays: '2.1M' },
    { id: 3, title: 'Peace in the Storm', artist: 'Sacred Melodies', duration: '3:28', plays: '1.8M' },
    { id: 4, title: 'God\'s Love', artist: 'Harmony Angels', duration: '3:55', plays: '1.6M' },
    { id: 5, title: 'Blessed Assurance', artist: 'Grace Singers', duration: '4:10', plays: '1.4M' },
    { id: 6, title: 'Holy Ground', artist: 'Anointed Voices', duration: '3:32', plays: '1.2M' },
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
            <Music size={32} className="text-purple-600" />
            {t('songsPlaylists')}
          </h1>
          <p className="text-gray-600 mb-6">{t('songsPlaylistsDesc')}</p>

          <div className="flex gap-2">
            <Input placeholder="Search songs, artists, playlists..." className="flex-1" />
            <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {sampleSongs.map((song, index) => (
            <Card key={song.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <Button
                      size="icon"
                      className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
                    >
                      <Play size={16} className="ml-0.5" />
                    </Button>
                    <div className="flex-1">
                      <p className="font-semibold">{song.title}</p>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span>{song.duration}</span>
                    <span>{song.plays} plays</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
