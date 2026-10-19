'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';

export default function SupportPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Support ticket submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('supportTitle')}</h1>
          <p className="text-gray-600">{t('supportIntro')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Contact Cards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail size={20} className="text-blue-600" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Reach out to our support team via email. We&apos;ll respond within 24 hours.
              </p>
              <a
                href="mailto:support@godlymusicalsongs.com"
                className="text-blue-600 hover:underline font-semibold"
              >
                support@godlymusicalsongs.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone size={20} className="text-green-600" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Call us for urgent issues. Available Monday-Friday 9AM-6PM UTC.
              </p>
              <a
                href="tel:+1-555-0123"
                className="text-green-600 hover:underline font-semibold"
              >
                +1 (555) 0123
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare size={20} className="text-purple-600" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Chat with our team in real-time. Available during business hours.
              </p>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Support Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t('submitTicket')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Describe your issue in detail..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  required
                />
              </div>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Your support ticket has been submitted successfully!
                  </p>
                  <p className="text-sm text-green-700">
                    We&apos;ll respond to you shortly at {formData.email}
                  </p>
                </div>
              )}

              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Link */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold mb-2">Before submitting, check our FAQ</h3>
          <p className="text-sm text-gray-700 mb-4">
            Your question might already be answered in our frequently asked questions.
          </p>
          <Button onClick={() => router.push('/faq')} variant="outline">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  );
}
