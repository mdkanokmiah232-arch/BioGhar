import type { Metadata } from 'next';
import './globals.css';
import ClientHeader from '@/components/ClientHeader';

export const metadata: Metadata = {
  title: 'BioGhar - ইসলামিক বায়োডাটা প্ল্যাটফর্ম',
  description: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম। আপনার জীবনসঙ্গী খুঁজে নিন আল্লাহর রহমতে।',
  keywords: 'ইসলামিক বায়োডাটা, মুসলিম বিয়ে, জীবনসঙ্গী, বিয়ের বায়োডাটা, বাংলাদেশ ম্যাট্রিমোনি',
  icons: { icon: '/favicon.webp' },
  openGraph: {
    title: 'BioGhar - ইসলামিক বায়োডাটা প্ল্যাটফর্ম',
    description: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম।',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ClientHeader />
        <main className="flex-1">{children}</main>
        <footer className="bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/logo.webp" alt="BioGhar" className="h-8 w-auto" />
                  <span className="text-xl font-bold text-emerald-400">BioGhar</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম।</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">দ্রুত লিঙ্ক</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white text-sm transition">হোম</a></li>
                  <li><a href="/biodata" className="text-gray-400 hover:text-white text-sm transition">বায়োডাটা খুঁজুন</a></li>
                  <li><a href="/register" className="text-gray-400 hover:text-white text-sm transition">বায়োডাটা তৈরি করুন</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition">আমাদের সম্পর্কে</a></li>
                  <li><a href="/faq" className="text-gray-400 hover:text-white text-sm transition">সচরাচর জিজ্ঞাসা</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">আইনি</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">গোপনীয়তা নীতি</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">শর্তাবলী</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">রিফান্ড নীতি</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">যোগাযোগ</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>📧 info@bioghar.com</li>
                  <li>📍 ঢাকা, বাংলাদেশ</li>
                  <li>📞 +880 1XXX-XXXXXX</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BioGhar। সর্বস্বত্ব সংরক্ষিত।</p>
              <p className="text-gray-500 text-xs mt-2 sm:mt-0">ইসলামিক মূল্যবোধের উপর ভিত্তি করে নির্মিত</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
