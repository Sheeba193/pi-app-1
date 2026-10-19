'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function DocumentationPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mb-6 gap-2"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('docTitle')}</h1>
          <p className="text-gray-600">{t('docIntro')}</p>
        </div>

        {/* Quick Start Guide */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🚀</span> {t('quickStart')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Create Your Account</h3>
              <p className="text-gray-700">
                Log in using your Pi Network wallet. This ensures secure and decentralized authentication.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Complete Your Profile</h3>
              <p className="text-gray-700">
                Add your information, profile picture, and music preferences to help us personalize your experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Explore Features</h3>
              <p className="text-gray-700">
                Browse artists, songs, studios, and more. Connect with musicians and producers worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Upload Your Music</h3>
              <p className="text-gray-700">
                Share your godly music with the world. Set up your store and reach global audiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">5. Monetize with Pi</h3>
              <p className="text-gray-700">
                Receive payments in Pi for your music. Direct transactions without intermediaries.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>✨</span> {t('features')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Artists Search & Lists</h3>
              <p className="text-gray-700">
                Discover and connect with artists across genres. View profiles, portfolios, and collaborate on projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Songs & Playlists</h3>
              <p className="text-gray-700">
                Search for specific songs or browse curated playlists. Create your own collections and share with friends.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Studios Directory</h3>
              <p className="text-gray-700">
                Find verified recording studios. Book sessions and manage your production workflow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Global Music Stores</h3>
              <p className="text-gray-700">
                Market your music on multiple platforms. Reach listeners in every corner of the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Music Groups & Churches</h3>
              <p className="text-gray-700">
                Join communities of gospel singers and musicians. Collaborate on worship events and recordings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Upload & Promote</h3>
              <p className="text-gray-700">
                Easily upload songs with metadata. Get automatic distribution to global music platforms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Industry Newsletters</h3>
              <p className="text-gray-700">
                Stay informed with the latest news, trends, and opportunities in gospel and godly music.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shopping Cart</h3>
              <p className="text-gray-700">
                Purchase digital and physical music. Manage your library and download rights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ambassador Program</h3>
              <p className="text-gray-700">
                Join our exclusive network. Earn special benefits and influence the platform&apos;s direction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pi Payment Integration */}
        <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>💰</span> {t('piPayment')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Godly Musical Songs integrates Pi Network payments for seamless, secure transactions:
            </p>
            <div>
              <h3 className="font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-700">
                All payments are processed through Pi Network&apos;s blockchain-based infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Direct Payments</h3>
              <p className="text-gray-700">
                Send Pi directly to artists and studios without intermediaries or high fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Address</h3>
              <p className="text-gray-700 font-mono break-all mb-2">
                GC5QXT4ZB24FRUKRVW56RTLZ7XBFCHURF7ATRHUXESRQHUCUI7JGBJDV
              </p>
              <p className="text-sm text-gray-600">
                Use this address for all payments within the platform.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            For more help, visit our <a href="/support" className="text-blue-600 hover:underline font-semibold">Support Portal</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
