# 👨‍💻 Godly Musical Songs - Developer Reference

## Overview for Developers

This guide helps developers understand the codebase structure, extend features, and maintain the platform.

---

## 🏗️ Architecture Overview

```
┌─────────────────┐
│   Next.js App   │
│   (Frontend)    │
└────────┬────────┘
         │
    ┌────┴────┐
    │          │
┌───┴──┐   ┌──┴───┐
│Pages │   │  API │
│      │   │      │
└──────┘   └──────┘
    │          │
    └────┬─────┘
         │
    ┌────┴────────┐
    │ Components  │
    │  & Hooks    │
    └─────────────┘
    
    External Services:
    - Pi Network Auth
    - Google Translate
```

---

## 📂 Project Structure

### Root-Level Files
```
/
├── README.md                  # Main documentation
├── IMPLEMENTATION_SUMMARY.md  # What was built
├── CONFIGURATION.md           # How to customize
├── USER_GUIDE.md             # User instructions
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── next.config.mjs           # Next.js config
└── DEVELOPER_REFERENCE.md    # This file!
```

### Application Structure
```
/app
├── layout.tsx                 # Root layout (auth wrapper)
├── page.tsx                   # Dashboard (main route)
├── globals.css               # Global styles
├── [feature]/
│   └── page.tsx             # Feature pages (9 total)
└── (groups)/
    ├── documentation/page.tsx
    ├── faq/page.tsx
    ├── support/page.tsx
    └── privacy/page.tsx
```

### Components
```
/components
├── dashboard.tsx              # Main dashboard component
├── feature-grid.tsx          # Feature cards grid
├── google-translate-widget.tsx # Translation widget
└── ui/                        # shadcn/ui components
    └── [50+ pre-built components]
```

### Hooks
```
/hooks
├── use-language.ts           # Language management
├── use-chatbot.ts            # Chat hook (original)
├── use-mobile.tsx            # Mobile detection
├── use-pi-network-authentication.ts # Pi auth (LOCKED)
├── use-scroll-to-bottom.ts   # Auto-scroll
└── use-toast.ts              # Toast notifications
```

### Libraries & Utils
```
/lib
├── languages.ts              # Language definitions (15 languages)
├── translations.ts           # Translation strings
├── app-config.ts             # App configuration (LOCKED)
├── system-config.ts          # System settings
├── types.ts                  # TypeScript types
└── utils.ts                  # Utility functions
```

---

## 🎨 Component Architecture

### Dashboard Component
**File:** `/components/dashboard.tsx`

**Key Parts:**
- `DashboardHeader` - Top bar with language selector
- `TrendingChart` - Trending songs section
- `FeatureGrid` - 9 feature cards
- Pi payment section
- Footer with links

### Feature Grid
**File:** `/components/feature-grid.tsx`

**Exports:**
- `FeatureGrid` - Grid of 9 feature cards
- `FeatureCard` - Individual card component

### Google Translate Widget
**File:** `/components/google-translate-widget.tsx`

**Props:**
- `defaultLanguage?: string` - Initial language

---

## 🌐 Multi-Language System

### Language Configuration
**File:** `/lib/languages.ts`

```typescript
export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', code: 'en', nativeName: 'English' },
  es: { name: 'Spanish', code: 'es', nativeName: 'Español' },
  // ... 13 more languages
}

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;
```

### Translation Strings
**File:** `/lib/translations.ts`

```typescript
export const translations = {
  en: {
    dashboard: 'Dashboard',
    welcome: 'Welcome to Godly Musical Songs',
    // ... 60+ strings
  },
  es: {
    dashboard: 'Panel de Control',
    welcome: 'Bienvenido a Canciones Musicales Divinas',
    // ... translated strings
  },
  // ... 13 more languages
}
```

### Using Language Hook

```typescript
import { useLanguage } from '@/hooks/use-language';

export function MyComponent() {
  const { t, language, changeLanguage } = useLanguage();
  
  return (
    <h1>{t('dashboard')}</h1>  // Get translated string
  );
}
```

### Adding New Language

1. Add to `/lib/languages.ts`:
```typescript
pt: { name: 'Portuguese', code: 'pt', nativeName: 'Português' }
```

2. Add to `/lib/translations.ts`:
```typescript
pt: {
  dashboard: 'Painel de Controle',
  welcome: 'Bem-vindo ao Godly Musical Songs',
  // ... all translation keys
}
```

3. Update Google Translate in `/components/google-translate-widget.tsx`:
```typescript
includedLanguages: '...,pt',
```

---

## 🔐 Authentication System

### Pi Network Authentication
**File:** `/hooks/use-pi-network-authentication.ts` (LOCKED)

**Never Modify:**
- SDK initialization
- Login flows
- API endpoints
- Token handling

**Usage:**
```typescript
import { usePiNetworkAuthentication } from '@/hooks/use-pi-network-authentication';

export function MyComponent() {
  const { isAuthenticated, authMessage, piAccessToken } = 
    usePiNetworkAuthentication();
  
  if (!isAuthenticated) return <LoadingScreen />;
  return <MainContent />;
}
```

---

## 📄 Page Structure

### Feature Pages Pattern
All feature pages follow this structure:

```typescript
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function FeaturePage() {
  const router = useRouter();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Back Button */}
      <Button onClick={() => router.back()} variant="outline">
        <ArrowLeft size={16} /> {t('back')}
      </Button>
      
      {/* Page Content */}
      {/* Feature Components */}
    </div>
  );
}
```

### Feature Pages Created

1. **Artists** (`/app/artists/page.tsx`) - 80 lines
2. **Songs** (`/app/songs/page.tsx`) - 77 lines
3. **Studios** (`/app/studios/page.tsx`) - 79 lines
4. **Stores** (`/app/stores/page.tsx`) - 83 lines
5. **Groups** (`/app/groups/page.tsx`) - 82 lines
6. **Upload** (`/app/upload/page.tsx`) - 124 lines
7. **Newsletters** (`/app/newsletters/page.tsx`) - 86 lines
8. **Cart** (`/app/cart/page.tsx`) - 133 lines
9. **Ambassadors** (`/app/ambassadors/page.tsx`) - 119 lines

### Documentation Pages

1. **Documentation** (`/app/documentation/page.tsx`) - 180 lines
2. **FAQ** (`/app/faq/page.tsx`) - 118 lines
3. **Support** (`/app/support/page.tsx`) - 198 lines
4. **Privacy** (`/app/privacy/page.tsx`) - 210 lines

---

## 🎨 Styling System

### Tailwind CSS Classes Used

**Layout:**
- `min-h-screen` - Full height
- `flex`, `grid`, `gap-*` - Flexbox/Grid
- `p-*`, `m-*` - Padding/Margin

**Colors:**
- `bg-gradient-to-br` - Gradients
- `from-X-50 to-Y-50` - Gradient colors
- `text-X-600` - Text colors
- `border-X-200` - Border colors

**Responsive:**
- `md:grid-cols-2` - Tablet breakpoint
- `lg:grid-cols-3` - Desktop breakpoint

**Interactive:**
- `hover:shadow-lg` - Hover effects
- `transition-*` - Smooth transitions
- `cursor-pointer` - Pointer cursor

### Color Scheme by Feature

| Feature | Primary Color | Tailwind |
|---------|--------------|----------|
| Artists | Blue | `bg-blue-600` |
| Songs | Purple | `bg-purple-600` |
| Studios | Orange | `bg-orange-600` |
| Stores | Green | `bg-green-600` |
| Groups | Red | `bg-red-600` |
| Upload | Blue | `bg-blue-600` |
| Newsletters | Indigo | `bg-indigo-600` |
| Cart | Teal | `bg-teal-600` |
| Ambassadors | Yellow | `bg-yellow-600` |

---

## 🔌 Component Dependencies

### UI Components Used
- Button
- Input
- Textarea
- Card (CardContent, CardHeader, CardTitle)
- Dropdown Menu
- Accordion
- Separator

### External Libraries
```json
{
  "lucide-react": "Icons",
  "react": "Framework",
  "next": "Meta-framework",
  "tailwindcss": "Styling",
  "recharts": "Charts (future)"
}
```

### Icons Used
- Users, Music, Building2, Store, Flame, Upload, Mail, ShoppingCart, Crown
- LogOut, Globe, ArrowLeft, Search, Play, Plus, Minus, etc.

---

## 🔗 Routing System

### Route Map
```
/                    → Dashboard (main page)
/artists            → Artists search
/songs              → Songs & playlists
/studios            → Studios directory
/stores             → Music stores
/groups             → Groups & churches
/upload             → Upload songs
/newsletters        → Newsletters
/cart               → Shopping cart
/ambassadors        → Ambassador program
/documentation      → Documentation
/faq                → FAQ
/support            → Support portal
/privacy            → Privacy policy
```

### Navigation
```typescript
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/artists');  // Navigate to
router.back();           // Go back
```

---

## 📝 Data Structures

### Song Object
```typescript
interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;      // e.g., "3:45"
  plays: string;         // e.g., "2.5M"
}
```

### Artist Object
```typescript
interface Artist {
  id: number;
  name: string;
  genre: string;
  followers: string;     // e.g., "125K"
  verified: boolean;
}
```

### Studio Object
```typescript
interface Studio {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
}
```

---

## 🛠️ Common Development Tasks

### Add a New Feature Page

1. **Create file:** `/app/[feature]/page.tsx`
2. **Use template:**
```typescript
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function FeaturePage() {
  const router = useRouter();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button onClick={() => router.back()} variant="outline" className="mb-6 gap-2">
          <ArrowLeft size={16} /> {t('back')}
        </Button>
        {/* Your content here */}
      </div>
    </div>
  );
}
```
3. **Add link in dashboard** `/components/dashboard.tsx`

### Add a Translation

1. **Edit** `/lib/translations.ts`
2. **Add key to all languages:**
```typescript
en: { myKey: 'English text' },
es: { myKey: 'Texto español' },
// ... etc
```
3. **Use in component:**
```typescript
const { t } = useLanguage();
<h1>{t('myKey')}</h1>
```

### Modify Dashboard Content

Edit `/components/dashboard.tsx`:
- Update `trendingSongs` array
- Change feature descriptions
- Modify colors or layout
- Add new sections

---

## 🧪 Testing Tips

### Component Testing
```typescript
// Test language switching
test('language selector works', () => {
  const { getByText } = render(<Dashboard />);
  fireEvent.click(getByText('Español'));
  expect(document.body.textContent).toContain('Spanish text');
});
```

### Route Testing
```typescript
// Test navigation
test('artists link works', () => {
  const { getByText } = render(<Dashboard />);
  fireEvent.click(getByText('Artists Search'));
  expect(router.pathname).toBe('/artists');
});
```

---

## 🐛 Debugging Tips

### Check Language State
```typescript
// In browser console
localStorage.getItem('selectedLanguage');  // Check saved language
```

### Debug Translations
```typescript
// In component
console.log(translations[language]);  // See all translations for current language
```

### Verify Routes
```typescript
// Check all routes available
Object.entries(require.context('./app', true, /page.tsx$/)).forEach(([path]) => {
  console.log(path);
});
```

---

## 📊 Performance Optimization

### Current Optimizations
- ✅ Lazy loading components
- ✅ CSS classes optimization
- ✅ Image optimization
- ✅ Font optimization

### Potential Improvements
- Add code splitting
- Implement caching
- Use React.memo for heavy components
- Add image CDN
- Implement service workers

---

## 🔄 Deployment Checklist

- [ ] All translations complete
- [ ] Links tested
- [ ] Forms working
- [ ] Pi authentication tested
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] SEO metadata set
- [ ] Analytics configured
- [ ] Error handling tested
- [ ] Support links working

---

## 📚 Key Files Reference

| File | Purpose | Locked |
|------|---------|--------|
| `/app/page.tsx` | Dashboard | No |
| `/components/dashboard.tsx` | Main dashboard UI | No |
| `/lib/languages.ts` | Language config | No |
| `/lib/translations.ts` | Text translations | No |
| `/hooks/use-language.ts` | Language management | No |
| `/lib/app-config.ts` | App settings | Yes |
| `/hooks/use-pi-network-authentication.ts` | Pi auth | Yes |

---

## 🚀 Quick Start for Developers

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📖 Related Documentation

- [README.md](./README.md) - Feature overview
- [USER_GUIDE.md](./USER_GUIDE.md) - User instructions
- [CONFIGURATION.md](./CONFIGURATION.md) - Customization guide
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - What was built

---

## 🤝 Contributing Guidelines

1. **Feature Branch:** `feature/your-feature`
2. **Code Style:** Follow Tailwind/React conventions
3. **Comments:** Document complex logic
4. **Testing:** Test before pushing
5. **Documentation:** Update guides if needed

---

## 🆘 Common Issues

### Language Not Changing?
- Check localStorage: `localStorage.clear()`
- Verify language code in `languages.ts`
- Inspect component: `useLanguage()` hook

### Page Not Loading?
- Check console for errors
- Verify route in `/app` directory
- Check component imports

### Pi Auth Failing?
- Check browser console
- Verify Pi Network is accessible
- Test on Pi testnet first

---

## 📞 Support

- **Documentation:** `/documentation`
- **Issues:** GitHub issues page
- **Questions:** Contact support@godlymusicalsongs.com

---

**Last Updated:** January 2024  
**Version:** 1.0  
**Built with:** Next.js 15, React 19, TypeScript, Tailwind CSS
