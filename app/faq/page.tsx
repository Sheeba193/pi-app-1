'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function FAQPage() {
  const router = useRouter();
  const { t } = useLanguage();

  const faqs = [
    {
      question: 'How do I get started with Godly Musical Songs?',
      answer:
        'Simply log in with your Pi Network account, complete your profile, and start exploring. You can browse artists, songs, and studios immediately.',
    },
    {
      question: 'How do I upload my music?',
      answer:
        'Go to the "Upload Songs" section, add your tracks with metadata (title, artist name, genre, etc.), and submit for processing. Your songs will be available globally within 24-48 hours.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept Pi Network payments. Send Pi to our wallet address to purchase music or upgrade your account. No credit cards or bank transfers needed.',
    },
    {
      question: 'Can I collaborate with other artists?',
      answer:
        'Yes! Use the Artists Search feature to find musicians, producers, and studios. Send collaboration requests and manage projects together.',
    },
    {
      question: 'How does the ambassador program work?',
      answer:
        'Ambassadors get exclusive access to new features, higher earnings from sales, and direct communication with our team. Apply through the Ambassadors section.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'Godly Musical Songs supports 15+ languages including English, Spanish, French, German, Chinese, Arabic, and more. Switch languages anytime from the dashboard.',
    },
    {
      question: 'How do I receive payments for my music?',
      answer:
        'Earnings are automatically sent to your Pi Network wallet. You can track all transactions in your account dashboard.',
    },
    {
      question: 'Is my personal data safe?',
      answer:
        'We prioritize your privacy and security. All data is encrypted and never shared with third parties without your consent. See our Privacy Policy for details.',
    },
    {
      question: 'How do I connect with studios?',
      answer:
        'Browse the Studios directory, view their portfolios and pricing, and send booking requests. Studios will respond with availability and terms.',
    },
    {
      question: 'Can I create private playlists?',
      answer:
        'Yes! Create, organize, and share playlists with specific users or make them public for everyone to discover.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('faqTitle')}</h1>
          <p className="text-gray-600">{t('faqIntro')}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold mb-2">Didn&apos;t find your answer?</h3>
          <p className="text-sm text-gray-700 mb-4">
            Visit our Support Portal for additional help or contact our team directly.
          </p>
          <Button onClick={() => router.push('/support')} className="bg-blue-600 hover:bg-blue-700">
            Go to Support Portal
          </Button>
        </div>
      </div>
    </div>
  );
}
