'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart as CartIcon, Trash2, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useState } from 'react';

export default function CartPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [items, setItems] = useState([
    { id: 1, title: 'Hallelujah', artist: 'Gospel Choir', price: 9.99, quantity: 1 },
    { id: 2, title: 'Amazing Grace', artist: 'Celestial Voices', price: 12.99, quantity: 2 },
    { id: 3, title: 'Peace in the Storm', artist: 'Sacred Melodies', price: 14.99, quantity: 1 },
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} />
          {t('back')}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <CartIcon size={32} className="text-teal-600" />
            {t('musicCart')}
          </h1>
        </div>

        {items.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <CartIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
              <Button onClick={() => router.push('/songs')} className="mt-4 bg-teal-600 hover:bg-teal-700">
                Browse Music
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.artist}</p>
                      </div>

                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-xs text-gray-600">${item.price.toFixed(2)} each</p>
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax:</span>
                  <span className="font-semibold">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-teal-600">${(total * 1.08).toFixed(2)}</span>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 h-10">
                  Pay with Pi
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
