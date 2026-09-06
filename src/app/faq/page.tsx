"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    q: "BioGhar কি?",
    a: "BioGhar হলো বাংলাদেশের মুসলিম সম্প্রদায়ের জন্য একটি বিশ্বস্ত ইসলামিক বিয়ের প্ল্যাটফর্ম। এখানে আপনি আপনার বায়োডাটা তৈরি করে উপযুক্ত জীবনসঙ্গী খুঁজে পেতে পারেন।",
  },
  {
    q: "BioGhar কি বিনামূল্যে?",
    a: "হ্যাঁ, বায়োডাটা তৈরি এবং সার্চ করা সম্পূর্ণ বিনামূল্যে। তবে যোগাযোগের তথ্য দেখতে প্রিমিয়াম প্যাকেজ কিনতে হতে পারে।",
  },
  {
    q: "আমার তথ্য কি নিরাপদ?",
    a: "হ্যাঁ, আমরা আপনার তথ্য সম্পূর্ণ নিরাপদ রাখি। আমরা শুধুমাত্র আপনার অনুমতিক্রমে তথ্য প্রকাশ করি। যোগাযোগের তথ্য শুধুমাত্র আপনি অনুমতি দিলেই দেখানো হয়।",
  },
  {
    q: "কীভাবে বায়োডাটা তৈরি করবো?",
    a: "Register পেজে গিয়ে আপনার তথ্য পূরণ করুন। আপনার ব্যক্তিগত, ধর্মীয়, শিক্ষাগত এবং পরিবারের তথ্য দিন। পরে আপনি যেকোনো সময় আপনার বায়োডাটা আপডেট করতে পারবেন।",
  },
  {
    q: "আগ্রহ প্রকাশ কী?",
    a: "আগ্রহ প্রকাশ হলো কোনো পাত্র/পাত্রী-এর প্রতি আপনার আগ্রহ জানানোর একটি পদ্ধতি। যখন আপনি কারো বায়োডাটা পছন্দ করেন, তখন আগ্রহ প্রকাশ করতে পারেন। সেই ব্যক্তি এবং তার পরিবার এটি দেখতে পাবে।",
  },
  {
    q: "পরিবারের অংশগ্রহণ কি বাধ্যতামূলক?",
    a: "না, বাধ্যতামূলক নয়। তবে আমরা পরামর্শ দিই যেন পরিবারের সদস্যরা বিয়ের সিদ্ধান্ত গ্রহণে অংশ নেন। এটি ইসলামিক পদ্ধতি এবং সিদ্ধান্তকে আরও শক্তিশালী করে।",
  },
  {
    q: "যোগাযোগের তথ্য কেন লুকানো?",
    a: "আপনার নিরাপত্তার জন্য যোগাযোগের তথ্য ডিফল্টভাবে লুকানো থাকে। যখন আপনি কাউকে পছন্দ করেন এবং তাকে আগ্রহ প্রকাশ করেন, তখন সেই ব্যক্তি এবং আপনি পরস্পরের যোগাযোগের তথ্য দেখতে পাবেন।",
  },
  {
    q: "BioGhar কি শুধুমাত্র বাংলাদেশের জন্য?",
    a: "মূলত হ্যাঁ, BioGhar বাংলাদেশের মুসলিম সম্প্রদায়ের জন্য তৈরি করা হয়েছে। তবে বিদেশে বসবাসকারী বাংলাদেশি মুসলমানরাও এই প্ল্যাটফর্ম ব্যবহার করতে পারেন।",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <Link href="/about" className="hover:text-emerald-700 transition">About</Link>
            <Link href="/faq" className="text-emerald-700 font-semibold">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition">Login</Link>
            <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">সচরাচর জিজ্ঞাসা</h1>
          <p className="text-emerald-100 text-lg">আপনার প্রশ্নের উত্তর এখানে পাবেন</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-emerald-900 pr-4">{faq.q}</span>
                  <span className={`text-2xl text-emerald-600 transition-transform ${openIndex === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100">
            <h3 className="text-lg font-bold text-emerald-900 mb-2">আপনার প্রশ্নের উত্তর পাননি?</h3>
            <p className="text-gray-500 text-sm mb-4">আমাদের সাথে যোগাযোগ করুন</p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition"
            >
              যোগাযোগ করুন
            </Link>
          </div>
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
