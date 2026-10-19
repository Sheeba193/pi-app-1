'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Building2, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function StudiosPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const sampleStudios = [
    { id: 1, name: 'Celestial Recording Studio', location: 'Nashville, USA', rating: 4.8, reviews: 124 },
    { id: 2, name: 'Gospel Hub Productions', location: 'Lagos, Nigeria', rating: 4.6, reviews: 87 },
    { id: 3, name: 'Divine Sound Studios', location: 'London, UK', rating: 4.7, reviews: 156 },
    { id: 4, name: 'Anointed Audio Labs', location: 'Atlanta, USA', rating: 4.5, reviews: 92 },
    { id: 5, name: 'Sacred Records Studio', location: 'Accra, Ghana', rating: 4.9, reviews: 201 },
    { id: 6, name: 'Worship Wave Productions', location: 'Toronto, Canada', rating: 4.4, reviews: 63 },
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
            <Building2 size={32} className="text-orange-600" />
            {t('studios')}
          </h1>
          <p className="text-gray-600 mb-6">{t('studiosDesc')}</p>

          <div className="flex gap-2">
            <Input placeholder="Search studios by location or name..." className="flex-1" />
            <Button className="bg-orange-600 hover:bg-orange-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStudios.map((studio) => (
            <Card key={studio.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{studio.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">{studio.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{studio.rating}</span>
                  <span className="text-sm text-gray-600">({studio.reviews} reviews)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
