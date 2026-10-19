'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Users, Heart, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function GroupsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const sampleGroups = [
    { id: 1, name: 'Global Gospel Network', type: 'Church Network', members: '15K', city: 'Multiregional' },
    { id: 2, name: 'Worship Leaders Fellowship', type: 'Music Group', members: '8K', city: 'International' },
    { id: 3, name: 'African Gospel Alliance', type: 'Group', members: '22K', city: 'Pan-African' },
    { id: 4, name: 'Contemporary Worship Collective', type: 'Music Group', members: '12K', city: 'Global' },
    { id: 5, name: 'Classical Gospel Choir', type: 'Church Choir', members: '5K', city: 'Multi-city' },
    { id: 6, name: 'Youth Praise Movement', type: 'Youth Group', members: '18K', city: 'Worldwide' },
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
            <Users size={32} className="text-red-600" />
            {t('musicGroups')}
          </h1>
          <p className="text-gray-600 mb-6">{t('musicGroupsDesc')}</p>

          <div className="flex gap-2">
            <Input placeholder="Search groups and churches..." className="flex-1" />
            <Button className="bg-red-600 hover:bg-red-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleGroups.map((group) => (
            <Card key={group.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{group.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-semibold">{group.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" />
                  <span className="font-semibold">{group.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">{group.city}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    View Group
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Join
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
