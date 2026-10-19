'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function PrivacyPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('privacyTitle')}</h1>
          <p className="text-gray-600">
            Effective Date: January 1, 2024
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Godly Musical Songs (&quot;we,&quot; &quot;us,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Personal Information You Provide:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pi Network wallet address and authentication credentials</li>
                <li>Profile information (username, email, profile picture)</li>
                <li>Music metadata (song titles, artist names, genres)</li>
                <li>Payment information for Pi transactions</li>
                <li>Communication records (messages, support tickets)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Information Collected Automatically:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Device information (device type, OS, browser)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>IP address and location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our Services</li>
              <li>To process transactions and send related information</li>
              <li>To send promotional emails and updates (with consent)</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect and prevent fraudulent transactions</li>
              <li>To comply with legal obligations</li>
              <li>To personalize your experience</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Data Protection and Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure HTTPS connections for all communications</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and user authentication</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Data Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>With your explicit consent</li>
              <li>With service providers who assist in our operations (under confidentiality agreements)</li>
              <li>When required by law or legal process</li>
              <li>To protect the rights and safety of our users and platform</li>
              <li>In connection with a merger, acquisition, or asset sale</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request removal of your data</li>
              <li><strong>Portability:</strong> Receive your data in a transferable format</li>
              <li><strong>Opt-Out:</strong> Decline marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at privacy@godlymusicalsongs.com
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Pi Network Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Our platform uses Pi Network for authentication and payments. Your Pi Network data is handled according to Pi&apos;s privacy policies. We only access information you explicitly authorize.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Children&apos;s Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Our Services are not intended for children under 13 years old. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Policy Changes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or technology. We will notify you of significant changes by posting the updated policy and updating the &quot;Last Updated&quot; date.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div>
              <p className="font-semibold">Email:</p>
              <a href="mailto:privacy@godlymusicalsongs.com" className="text-blue-600 hover:underline">
                privacy@godlymusicalsongs.com
              </a>
            </div>
            <div>
              <p className="font-semibold">Mailing Address:</p>
              <p>
                Godly Musical Songs<br />
                Privacy Team<br />
                Global Office<br />
                Earth
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>
      </div>
    </div>
  );
}
