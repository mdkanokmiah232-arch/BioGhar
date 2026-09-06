"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "", type: "", gender: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("পাসওয়ার্ড মিলছে না!");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
      if (users.find((u: any) => u.email === formData.email)) {
        alert("এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে!");
        setLoading(false);
        return;
      }
      const newUser = { id: Date.now().toString(), ...formData, createdAt: new Date().toISOString() };
      users.push(newUser);
      localStorage.setItem("bioghar_users", JSON.stringify(users));
      alert("রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");
      router.push("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-800">BioGhar</span>
          </Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition font-medium">লগইন</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <span className="text-4xl">✨</span>
              <h1 className="mt-3 text-2xl font-bold text-emerald-900">বায়োডাটা তৈরি করুন</h1>
              <p className="mt-2 text-sm text-gray-500">আপনার অর্ধেক দীন খুঁজে নিন ইনশাআল্লাহ</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ণ নাম</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="আপনার পূর্ণ নাম লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="ইমেইল লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+880 1XXX-XXXXXX" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">বায়োডাটার ধরন</label>
                  <select name="type" required value={formData.type} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">নির্বাচন করুন</option>
                    <option value="groom">পাত্রের বায়োডাটা</option>
                    <option value="bride">পাত্রীর বায়োডাটা</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">লিঙ্গ</label>
                  <select name="gender" required value={formData.gender} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">নির্বাচন করুন</option>
                    <option value="male">পুরুষ</option>
                    <option value="female">মহিলা</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} name="password" required value={formData.password} onChange={handleChange} placeholder="পাসওয়ার্ড লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড নিশ্চিত করুন</label>
                  <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} placeholder="আবার পাসওয়ার্ড লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" required className="mt-1 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span>আমি <a href="#" className="text-emerald-600 font-medium">শর্তাবলী</a> এবং <a href="#" className="text-emerald-600 font-medium">গোপনীয়তা নীতি</a> পড়েছি এবং সম্মত।</span>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                {loading ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার করুন ✨"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">লগইন করুন</Link>
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-emerald-700 transition">← হোম পেজে ফিরে যান</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
