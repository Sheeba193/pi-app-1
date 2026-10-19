'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Mail, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function NewslettersPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const newsletters = [
    { id: 1, title: 'Gospel Trends Weekly', frequency: 'Weekly', subscribers: '45K', category: 'Trends' },
    { id: 2, title: 'Artist Spotlight', frequency: 'Bi-weekly', subscribers: '32K', category: 'Artists' },
    { id: 3, title: 'Studio Deals & Offers', frequency: 'Weekly', subscribers: '28K', category: 'Business' },
    { id: 4, title: 'Music Industry News', frequency: 'Daily', subscribers: '67K', category: 'News' },
    { id: 5, title: 'Worship Music Updates', frequency: 'Monthly', subscribers: '19K', category: 'Worship' },
    { id: 6, title: 'Ambassador Exclusive', frequency: 'Weekly', subscribers: '8K', category: 'VIP' },
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
            <Mail size={32} className="text-indigo-600" />
            {t('newsletters')}
          </h1>
          <p className="text-gray-600 mb-6">{t('newslettersDesc')}</p>

          <div className="flex gap-2 mb-6">
            <Input placeholder="Search newsletters..." className="flex-1" />
            <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsletters.map((newsletter) => (
            <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen size={20} className="text-indigo-600" />
                  {newsletter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Frequency</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Calendar size={14} />
                      {newsletter.frequency}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Subscribers</p>
                    <p className="font-semibold">{newsletter.subscribers}</p>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                    {newsletter.category}
                  </span>
                </div>
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
