import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BioGhar - ইসলামিক বায়োডাটা প্ল্যাটফর্ম',
  description: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম। আপনার জীবনসঙ্গী খুঁজে নিন আল্লাহর রহমতে।',
  keywords: 'ইসলামিক বায়োডাটা, মুসলিম বিয়ে, জীবনসঙ্গী, বিয়ের বায়োডাটা, বাংলাদেশ ম্যাট্রিমোনি',
  openGraph: {
    title: 'BioGhar - ইসলামিক বায়োডাটা প্ল্যাটফর্ম',
    description: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম।',
    locale: 'bn_BD',
    type: 'website',
  },
};

const navLinks = [
  { href: '/', label: 'হোম' },
  { href: '/search', label: 'বায়োডাটা খুঁজুন' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/faq', label: 'সচরাচর জিজ্ঞাসা' },
  { href: '/contact', label: 'যোগাযোগ' },
];

const quickLinks = [
  { href: '/', label: 'হোম' },
  { href: '/search', label: 'বায়োডাটা খুঁজুন' },
  { href: '/create-biodata', label: 'বায়োডাটা তৈরি করুন' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/faq', label: 'সচরাচর জিজ্ঞাসা' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'গোপনীয়তা নীতি' },
  { href: '/terms', label: 'শর্তাবলী' },
  { href: '/refund-policy', label: 'রিফান্ড নীতি' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🕌</span>
                <span className="text-xl font-bold text-emerald-700">
                  BioGhar
                </span>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="/login"
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  লগইন
                </a>
                <a
                  href="/register"
                  className="btn-primary text-sm py-2 px-4"
                >
                  রেজিস্টার
                </a>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="md:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
                  aria-label="মেনু"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🕌</span>
                  <span className="text-xl font-bold text-emerald-400">
                    BioGhar
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক বায়োডাটা প্ল্যাটফর্ম।
                  আমরা আপনাকে আপনার জীবনসঙ্গী খুঁজে পেতে সাহায্য করি,
                  ইনশাআল্লাহ।
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  দ্রুত লিঙ্ক
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  আইনি
                </h3>
                <ul className="space-y-2">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  যোগাযোগ
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>info@bioghar.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>ঢাকা, বাংলাদেশ</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+880 1XXX-XXXXXX</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BioGhar। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-gray-500 text-xs mt-2 sm:mt-0">
                🕌 ইসলামিক মূল্যবোধের উপর ভিত্তি করে নির্মিত
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
