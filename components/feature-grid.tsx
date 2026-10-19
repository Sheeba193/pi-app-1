'use client';

import Link from 'next/link';
import type React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Music,
  Building2,
  Store,
  Flame,
  Upload,
  Mail,
  ShoppingCart,
  Crown,
} from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, href, onClick }) => {
  const content = (
    <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <div onClick={onClick}>{content}</div>;
};

export const FeatureGrid: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users size={24} />,
      title: t('artistsSearch'),
      description: t('artistsSearchDesc'),
      href: '/artists',
    },
    {
      icon: <Music size={24} />,
      title: t('songsPlaylists'),
      description: t('songsPlaylistsDesc'),
      href: '/songs',
    },
    {
      icon: <Building2 size={24} />,
      title: t('studios'),
      description: t('studiosDesc'),
      href: '/studios',
    },
    {
      icon: <Store size={24} />,
      title: t('musicStores'),
      description: t('musicStoresDesc'),
      href: '/stores',
    },
    {
      icon: <Flame size={24} />,
      title: t('musicGroups'),
      description: t('musicGroupsDesc'),
      href: '/groups',
    },
    {
      icon: <Upload size={24} />,
      title: t('uploadSongs'),
      description: t('uploadSongsDesc'),
      href: '/upload',
    },
    {
      icon: <Mail size={24} />,
      title: t('newsletters'),
      description: t('newslettersDesc'),
      href: '/newsletters',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: t('musicCart'),
      description: t('musicCartDesc'),
      href: '/cart',
    },
    {
      icon: <Crown size={24} />,
      title: t('ambassadors'),
      description: t('ambassadorsDesc'),
      href: '/ambassadors',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};
