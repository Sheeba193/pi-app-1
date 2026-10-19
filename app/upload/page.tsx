'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';

export default function UploadPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setUploaded(true);
    setTimeout(() => setUploaded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Upload size={32} className="text-blue-600" />
            {t('uploadSongs')}
          </h1>
          <p className="text-gray-600 mb-6">{t('uploadSongsDesc')}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Your Music</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Song Title</label>
                <Input placeholder="Enter song title" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Artist Name</label>
                <Input placeholder="Your name or group name" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Genre</label>
                  <Input placeholder="Gospel, Worship, Contemporary..." required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Release Year</label>
                  <Input type="number" placeholder="2024" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Tell about your song..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Audio File</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drag and drop your audio file here, or click to browse
                  </p>
                  <p className="text-xs text-gray-500">
                    Supported: MP3, WAV, FLAC (Max 500MB)
                  </p>
                  <Input type="file" accept="audio/*" className="hidden" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cover Art</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload your cover image
                  </p>
                  <p className="text-xs text-gray-500">
                    Recommended: 3000x3000px, JPG/PNG
                  </p>
                  <Input type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              {uploaded && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Upload Successful!</p>
                    <p className="text-sm text-green-800">Your song will be available globally within 24-48 hours.</p>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-10">
                <Upload size={16} className="mr-2" />
                Upload Song
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
