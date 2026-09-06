"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("bioghar_user");
    if (user) router.push("/dashboard");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const users = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);

    setTimeout(() => {
      if (found) {
        localStorage.setItem("bioghar_user", JSON.stringify(found));
        router.push("/dashboard");
      } else {
        alert("ইমেইল বা পাসওয়ার্ড ভুল আছে!");
        setLoading(false);
      }
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
          <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
            রেজিস্টার
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <span className="text-4xl">🕌</span>
              <h1 className="mt-3 text-2xl font-bold text-emerald-900">লগইন করুন</h1>
              <p className="mt-2 text-sm text-gray-500">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="আপনার ইমেইল লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="আপনার পাসওয়ার্ড লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-12" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                {loading ? "লগইন হচ্ছে..." : "লগইন করুন 🔐"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                অ্যাকাউন্ট নেই?{" "}
                <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-semibold">রেজিস্টার করুন</Link>
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
