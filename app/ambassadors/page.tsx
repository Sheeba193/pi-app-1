'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Crown, Lock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function AmbassadorsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const benefits = [
    { icon: <Star size={24} />, title: 'Early Access', desc: 'Get new features first' },
    { icon: <Crown size={24} />, title: 'Higher Earnings', desc: '50% increase in commissions' },
    { icon: <Lock size={24} />, title: 'VIP Support', desc: '24/7 priority support' },
    { icon: <Star size={24} />, title: 'Exclusive Events', desc: 'Private networking events' },
    { icon: <Crown size={24} />, title: 'Marketing Boost', desc: 'Featured promotion tools' },
    { icon: <Lock size={24} />, title: 'Revenue Sharing', desc: 'Earn from referrals' },
  ];

  const ambassadors = [
    { name: 'Prophet Blessing', level: 'Platinum', members: '5K+', joinDate: 'Jan 2023' },
    { name: 'Gospel Queens', level: 'Gold', members: '3K+', joinDate: 'Mar 2023' },
    { name: 'Worship Warriors', level: 'Silver', members: '2K+', joinDate: 'Jun 2023' },
    { name: 'Celestial Sounds', level: 'Platinum', members: '4K+', joinDate: 'Dec 2022' },
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
            <Crown size={32} className="text-yellow-600" />
            {t('ambassadors')}
          </h1>
          <p className="text-gray-600 mb-6">{t('ambassadorsDesc')}</p>
        </div>

        {/* Benefits Section */}
        <h2 className="text-2xl font-bold mb-6">Ambassador Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-yellow-600 mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Ambassadors */}
        <h2 className="text-2xl font-bold mb-6">Featured Ambassadors</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ambassadors.map((amb, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown size={20} className="text-yellow-600" />
                  {amb.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Level</p>
                  <p className="font-semibold text-yellow-600">{amb.level}</p>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-600">Members</p>
                    <p className="font-semibold">{amb.members}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Joined</p>
                    <p className="font-semibold">{amb.joinDate}</p>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown size={24} className="text-yellow-600" />
              Ready to Become an Ambassador?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Join our exclusive network of music industry leaders. Unlock premium features, higher earnings, and direct access to our team.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Button className="bg-yellow-600 hover:bg-yellow-700 h-10">
                Apply Now
              </Button>
              <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 h-10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
