import Link from "next/link";

export const metadata = {
  title: "About Us - BioGhar",
  description: "Learn about BioGhar Islamic matrimony platform and our mission.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-800">BioGhar</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/biodata" className="hover:text-emerald-700 transition">Search</Link>
            <Link href="/about" className="text-emerald-700 font-semibold">About</Link>
            <Link href="/faq" className="hover:text-emerald-700 transition">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition">Login</Link>
            <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-amber-300 text-sm font-medium mb-4">
            ﷽ &quot;And among His signs is that He created for you mates from among yourselves&quot;
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের সম্পর্কে</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            বাংলাদেশের মুসলিম উম্মাহর জন্য একটি বিশ্বস্ত ইসলামিক বিয়ের প্ল্যাটফর্ম
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">🎯 আমাদের মিশন</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BioGhar-এর মূল লক্ষ্য হলো বাংলাদেশের মুসলিম সম্প্রদায়কে একটি বিশ্বস্ত, নিরাপদ এবং ইসলামিক মূল্যবোধের ভিত্তিতে বিয়ের সম্পর্ক স্থাপনে সহায়তা করা।
              </p>
              <p className="text-gray-600 leading-relaxed">
                আমরা বিশ্বাস করি যে প্রতিটি মুসলিম ব্যক্তির জন্য একজন উপযুক্ত জীবনসঙ্গী রয়েছে, এবং আমাদের দায়িত্ব সেই সম্পর্ক স্থাপনে সহায়তা করা।
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">🔭 আমাদের ভিশন</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                আমরা এমন একটি প্ল্যাটফর্ম তৈরি করতে চাই যেখানে প্রতিটি মুসলিম পরিবার নির্ভয়ে তাদের সন্তানের জন্য উপযুক্ত জীবনসঙ্গী খুঁজে পাবে।
              </p>
              <p className="text-gray-600 leading-relaxed">
                প্রযুক্তি এবং ইসলামিক মূল্যবোধের সমন্বয়ে আমরা একটি আধুনিক কিন্তু ঐতিহ্যবাহী বিয়ের অনুষঙ্গ তৈরি করছি।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-emerald-900 mb-10">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-emerald-900 mb-2">বিশ্বাসযোগ্যতা</h3>
              <p className="text-sm text-gray-500">প্রতিটি বায়োডাটা যাচাই করা হয় এবং ব্যবহারকারীদের তথ্য নিরাপদ থাকে।</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100">
              <div className="text-4xl mb-3">☪️</div>
              <h3 className="font-bold text-emerald-900 mb-2">ইসলামিক মূল্যবোধ</h3>
              <p className="text-sm text-gray-500">সম্পূর্ণরূপে ইসলামিক শরিয়াহ অনুসরণ করে প্ল্যাটফর্ম পরিচালিত।</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-emerald-900 mb-2">পরিবারভিত্তিক</h3>
              <p className="text-sm text-gray-500">পরিবারের সদস্যদের অংশগ্রহণে বিয়ের সিদ্ধান্ত গ্রহণে উৎসাহিত করা হয়।</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">আজই শুরু করুন</h2>
          <p className="text-gray-600 mb-6">আপনার বায়োডাটা তৈরি করুন এবং আপনার অর্ধেক দীন খুঁজে নিন</p>
          <Link href="/register" className="inline-flex items-center rounded-full bg-emerald-700 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-800 transition">
            বিনামূল্যে বায়োডাটা তৈরি করুন ✨
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-emerald-300">
          © 2026 BioGhar. All rights reserved. Made with ❤️ for the Ummah.
        </div>
      </footer>
    </div>
  );
}
