"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { districts } from "@/data/biodatas";

const stats = [
  { number: "10000+", label: "বায়োডাটা", icon: "📋" },
  { number: "5500+", label: "পাত্র", icon: "👨" },
  { number: "4500+", label: "পাত্রী", icon: "👩" },
  { number: "1200+", label: "বিয়ে সম্পন্ন", icon: "💍" },
];

const steps = [
  { number: "১", title: "বায়োডাটা তৈরি করুন", description: "আপনার প্রোফাইল তৈরি করুন এবং বিস্তারিত তথ্য প্রদান করুন।", icon: "📝" },
  { number: "২", title: "বায়োডাটা খুঁজুন", description: "আপনার পছন্দের মাপদণ্ড অনুযায়ী বায়োডাটা সার্চ করুন।", icon: "🔍" },
  { number: "৩", title: "যোগাযোগ করুন", description: "পছন্দের বায়োডাটার সাথে যোগাযোগ করুন।", icon: "💬" },
  { number: "৪", title: "বিয়ে সম্পন্ন করুন", description: "আল্লাহর রহমতে আপনার জীবনসঙ্গীর সাথে বিয়ে সম্পন্ন করুন।", icon: "🎉" },
];

const testimonials = [
  { name: "মোঃ আহমেদ হাসান", location: "ঢাকা", text: "BioGhar-এর মাধ্যমে আমি আমার জীবনসঙ্গীকে খুঁজে পেয়েছি।", rating: 5 },
  { name: "ফাতিমা আক্তার", location: "চট্টগ্রাম", text: "আমার মেয়ের জন্য এখানে ভালো প্রোফাইল পেয়েছি।", rating: 5 },
  { name: "মোঃ রাকিবুল হাসান", location: "সিলেট", text: "ইসলামিক মূল্যবোধের উপর ভিত্তি করে কাজ করায় BioGhar-কে পছন্দ করি।", rating: 5 },
];

export default function HomePage() {
  const router = useRouter();
  const [lookingFor, setLookingFor] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [district, setDistrict] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (lookingFor) params.set("lookingFor", lookingFor);
    if (maritalStatus) params.set("maritalStatus", maritalStatus);
    if (district) params.set("district", district);
    const qs = params.toString();
    router.push(`/biodata${qs ? `?${qs}` : ""}`);
  };

  const handleAllFilters = () => {
    router.push("/biodata");
  };

  return (
    <div className="bg-pattern">
      {/* Hero Section */}
      <section className="bg-emerald-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Islamic Quote */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-emerald-100 font-medium leading-relaxed">
                &quot;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا&quot;
              </p>
              <p className="text-sm md:text-base text-emerald-200 mt-3 italic">
                &quot;এবং তাঁর নিদর্শনাবলীর মধ্যে রয়েছে যে, তিনি তোমাদের জন্য তোমাদের নিজেদের মধ্য থেকে স্ত্রী সৃষ্টি করেছেন, যাতে তোমরা তাদের নিকট শান্তি লাভ করো।&quot;
              </p>
              <p className="text-xs text-emerald-300 mt-2">— সূরা আর-রূম, ২১</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">আপনার জীবনসঙ্গী খুঁজুন</h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8">ইসলামিক মূল্যবোধের উপর ভিত্তি করে বিশ্বস্ত বায়োডাটা প্ল্যাটফর্ম</p>

            {/* Search Box - 3 Quick Filters + 2 Buttons */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="space-y-4">
                {/* 1. আমি খুঁজছি */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">আমি খুঁজছি</label>
                  <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} className="search-select w-full">
                    <option value="">সকল</option>
                    <option value="groom">পাত্র</option>
                    <option value="bride">পাত্রী</option>
                  </select>
                </div>

                {/* 2. বৈবাহিক অবস্থা */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">বৈবাহিক অবস্থা</label>
                  <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="search-select w-full">
                    <option value="">সকল</option>
                    <option value="অবিবাহিত">অবিবাহিত</option>
                    <option value="বিবাহিত">বিবাহিত</option>
                    <option value="ডিভোর্সড">ডিভোর্সড</option>
                    <option value="বিধবা">বিধবা</option>
                    <option value="বিপত্নীক">বিপত্নীক</option>
                  </select>
                </div>

                {/* 3. স্থায়ী ঠিকানা */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">স্থায়ী ঠিকানা</label>
                  <select value={district} onChange={(e) => setDistrict(e.target.value)} className="search-select w-full">
                    <option value="">ঠিকানা নির্বাচন করুন</option>
                    {districts.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Two Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAllFilters}
                  className="flex-1 py-3 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-all"
                >
                  সকল ফিল্টার
                </button>
                <button
                  onClick={handleSearch}
                  className="flex-1 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
                >
                  🔍 বায়োডাটা খুঁজুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-700">{s.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">কিভাবে কাজ করে?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">মাত্র ৪টি সহজ ধাপে আপনার জীবনসঙ্গীকে খুঁজে নিন</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="step-circle">{step.number}</div>
                <div className="mt-4 mb-2 text-4xl">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {i < steps.length - 1 && <div className="hidden md:block absolute right-0 top-6 text-emerald-300 text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">আজই বিনামূল্যে বায়োডাটা তৈরি করুন!</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">আমাদের প্ল্যাটফর্মে বিনামূল্যে বায়োডাটা তৈরি করুন এবং আপনার জীবনসঙ্গীকে খুঁজে নিন।</p>
          <Link href="/register" className="inline-block bg-white text-emerald-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg text-lg">
            📝 বিনামূল্যে বায়োডাটা তৈরি করুন
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">তারা কী বলছেন?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">আমাদের সফল জুটির অভিজ্ঞতা</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">{t.name.charAt(0)}</div>
                  <div className="ml-4"><h4 className="font-semibold text-gray-800">{t.name}</h4><p className="text-sm text-gray-500">{t.location}</p></div>
                </div>
                <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-400">⭐</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed">&quot;{t.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">আমাদের বৈশিষ্ট্য</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">কেন BioGhar বেছে নেবেন?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🔒", title: "নিরাপদ ও গোপনীয়", desc: "আপনার তথ্য সম্পূর্ণ নিরাপদ। শুধুমাত্র যাচাইকৃত ব্যবহারকারীরা আপনার প্রোফাইল দেখতে পাবেন।" },
              { icon: "✅", title: "যাচাইকৃত বায়োডাটা", desc: "সকল বায়োডাটা যাচাই করা হয়। আমরা প্রতিটি প্রোফাইলের তথ্য যাচাই করি।" },
              { icon: "💰", title: "বিনামূল্যে সেবা", desc: "বায়োডাটা তৈরি এবং ব্রাউজ করা সম্পূর্ণ বিনামূল্যে।" },
            ].map((f, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-6 shadow-md border border-emerald-100">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">এখনই শুরু করুন!</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">আপনার জীবনসঙ্গীকে খুঁজে নিতে আজই রেজিস্ট্রেশন করুন</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-lg">রেজিস্ট্রেশন করুন</Link>
            <Link href="/biodata" className="btn-secondary text-lg">বায়োডাটা খুঁজুন</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
