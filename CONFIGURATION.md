# 🎵 Godly Musical Songs - Configuration Guide

## Quick Configuration

### 1. Pi Network Wallet Address
The payment wallet address is currently set to:
```
GC5QXT4ZB24FRUKRVW56RTLZ7XBFCHURF7ATRHUXESRQHUCUI7JGBJDV
```

**To update:** Edit the wallet address in `/lib/translations.ts`:
```typescript
paymentAddress: 'YOUR_NEW_ADDRESS_HERE',
```

---

## 2. Add More Languages

### Current Supported Languages (15):
- English, Spanish, French, German, Italian, Portuguese
- Russian, Chinese, Japanese, Korean, Arabic, Hindi
- Swahili, Igbo, Afrikaans

### To Add a New Language:

#### Step 1: Add to Language Config
Edit `/lib/languages.ts`:
```typescript
export const SUPPORTED_LANGUAGES = {
  // ... existing languages
  nl: { name: 'Dutch', code: 'nl', nativeName: 'Nederlands' },
} as const;
```

#### Step 2: Add Translations
Edit `/lib/translations.ts`:
```typescript
nl: {
  dashboard: 'Dashboard',
  welcome: 'Welkom bij Godly Musical Songs',
  logout: 'Afmelden',
  // ... add all keys from English
} as const;
```

#### Step 3: Add to Google Translate
Update `/components/google-translate-widget.tsx`:
```typescript
includedLanguages: 'en,es,fr,de,it,pt,ru,ja,zh-CN,ar,hi,ko,af,sw,ig,nl',
```

---

## 3. Customize Dashboard Content

### Welcome Message
Edit `/lib/app-config.ts` (after unlocking):
```typescript
WELCOME_MESSAGE: "Your custom welcome text here"
```

### Featured Songs
Edit `/components/dashboard.tsx` to modify the `trendingSongs` array

### Colors
Edit `/lib/app-config.ts`:
```typescript
COLORS = {
  BACKGROUND: "#F0F4F8",
  PRIMARY: "#6366F1",
}
```

---

## 4. Feature Pages Customization

### Artists Page (`/app/artists/page.tsx`)
- Modify `sampleArtists` array for different data
- Update search functionality
- Add filters and sorting

### Songs Page (`/app/songs/page.tsx`)
- Change `sampleSongs` data
- Customize playback controls
- Add playlist features

### Studios Page (`/app/studios/page.tsx`)
- Update studio listings
- Modify rating display
- Add booking calendar

### Music Stores Page (`/app/stores/page.tsx`)
- Add/remove music platforms
- Update commission rates
- Modify featured stores

### Groups Page (`/app/groups/page.tsx`)
- Customize community listings
- Add group types
- Update member counts

### Upload Page (`/app/upload/page.tsx`)
- Add file validation
- Customize metadata fields
- Add genre suggestions

### Newsletters Page (`/app/newsletters/page.tsx`)
- Add newsletter categories
- Customize frequency options
- Update subscription logic

### Cart Page (`/app/cart/page.tsx`)
- Integrate real product data
- Add shipping options
- Implement discount codes

### Ambassadors Page (`/app/ambassadors/page.tsx`)
- Update benefits list
- Add tier details
- Customize requirements

---

## 5. Update Documentation

### Documentation Page (`/app/documentation/page.tsx`)
Add more guides:
```typescript
const guides = [
  // Add new guide objects
  { title: 'Guide Title', content: 'Guide content' }
];
```

### FAQ Page (`/app/faq/page.tsx`)
Update FAQ items:
```typescript
const faqs = [
  // Edit existing FAQs
  { question: 'Q1', answer: 'A1' }
];
```

---

## 6. Styling Customization

### Colors
All pages use Tailwind CSS color classes:
- Primary: `bg-blue-600`, `text-blue-600`
- Gradient: `bg-gradient-to-br from-X-50 to-Y-50`

Common feature colors:
- Artists: Blue (`bg-blue-600`)
- Songs: Purple (`bg-purple-600`)
- Studios: Orange (`bg-orange-600`)
- Stores: Green (`bg-green-600`)
- Groups: Red (`bg-red-600`)
- Upload: Blue (`bg-blue-600`)
- Newsletters: Indigo (`bg-indigo-600`)
- Cart: Teal (`bg-teal-600`)
- Ambassadors: Yellow (`bg-yellow-600`)

### Fonts
Edit `/app/layout.tsx` to change fonts:
```typescript
import { YourFont } from 'next/font/google';
const yourFont = YourFont({ subsets: ['latin'] });
```

---

## 7. Environment Variables

No environment variables required for core functionality.

### Optional Environment Variables:
```bash
# If connecting to real APIs
NEXT_PUBLIC_API_URL=your_api_url
PI_NETWORK_API_KEY=your_key
```

---

## 8. Backend Integration (Optional)

To integrate with a real backend:

### Example: Artists API
Replace sample data in `/app/artists/page.tsx`:
```typescript
useEffect(() => {
  fetch('/api/artists')
    .then(res => res.json())
    .then(data => setArtists(data));
}, []);
```

### Database Schema Suggestions:

**Artists Table:**
```sql
CREATE TABLE artists (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  genre VARCHAR(100),
  followers INT,
  verified BOOLEAN,
  created_at TIMESTAMP
);
```

**Songs Table:**
```sql
CREATE TABLE songs (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  artist_id UUID,
  duration VARCHAR(10),
  plays INT,
  created_at TIMESTAMP
);
```

---

## 9. Analytics Setup (Optional)

Add Google Analytics:
```typescript
// In /app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 10. SEO Optimization

Update metadata in `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Godly Musical Songs | Gospel Music Platform',
  description: 'Share and discover biblical gospel music worldwide',
  keywords: 'gospel music, worship, artists, collaboration, Pi Network',
};
```

For each page:
```typescript
export const metadata: Metadata = {
  title: 'Artists | Godly Musical Songs',
  description: 'Find and connect with gospel artists worldwide',
};
```

---

## 11. Email Configuration (Optional)

For support ticket emails, set up:
```typescript
// Create /app/api/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

---

## 12. Payment Processing (Real Integration)

For real Pi Network payments:

```typescript
// /app/api/payment.ts
import { PiNetwork } from 'pi-network-sdk';

export async function POST(req: Request) {
  const { amount, recipient } = await req.json();
  
  const transaction = await PiNetwork.createPayment({
    amount,
    recipient,
    memo: 'Music Purchase'
  });
  
  return Response.json(transaction);
}
```

---

## 13. Testing Checklist

- [ ] Language switching works on all pages
- [ ] Google Translate loads and functions
- [ ] Pi authentication works
- [ ] Dashboard displays correctly
- [ ] All 9 feature pages load
- [ ] Links navigate correctly
- [ ] Responsive design on mobile
- [ ] Forms submit successfully
- [ ] Payment address copies correctly

---

## 14. Deployment Checklist

- [ ] Update `lib/app-config.ts` with production values
- [ ] Update wallet address for production
- [ ] Set production environment variables
- [ ] Test all pages in production
- [ ] Set up monitoring/analytics
- [ ] Configure domain
- [ ] Set up SSL certificate
- [ ] Enable CDN for assets

---

## 15. Troubleshooting

### Language not updating?
- Check browser localStorage
- Clear cache and reload
- Verify language code in `languages.ts`

### Google Translate not showing?
- Verify script loads in console
- Check included languages list
- Try refreshing page

### Pi authentication failing?
- Check Pi Network SDK URL
- Verify sandbox setting
- Clear session storage

### Page not loading?
- Check console for errors
- Verify route exists in `/app`
- Check component imports

---

## 🎯 Quick Customization Template

```typescript
// To customize a feature page:
// 1. Edit /app/[feature]/page.tsx
// 2. Modify sampleData array
// 3. Update component styling
// 4. Change feature descriptions
// 5. Add real API calls as needed
```

---

## 📞 Common Customization Questions

**Q: How to add a real search feature?**
A: Add state management in feature pages:
```typescript
const [search, setSearch] = useState('');
const filtered = data.filter(item => 
  item.name.toLowerCase().includes(search.toLowerCase())
);
```

**Q: How to connect to a database?**
A: Create API routes in `/app/api/` and fetch from components.

**Q: How to add user authentication?**
A: Extend Pi authentication or integrate Auth.js.

**Q: How to accept real payments?**
A: Set up Pi Network payment API in backend.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Pi Network Developer Docs](https://developers.minepi.com)
- [Google Translate API](https://cloud.google.com/translate)

---

*Configuration Guide v1.0 - Last Updated January 2024*
