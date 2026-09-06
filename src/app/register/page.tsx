"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "verify">("form");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "", type: "", gender: "" });
  const [verifyCode, setVerifyCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("পাসওয়ার্ড মিলছে না!");
      return;
    }
    setLoading(true);

    // Check if phone/email already exists
    const users = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
    if (users.find((u: any) => u.phone === formData.phone)) {
      setError("এই ফোন নম্বর দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে!");
      setLoading(false);
      return;
    }
    if (users.find((u: any) => u.email === formData.email)) {
      setError("এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে!");
      setLoading(false);
      return;
    }

    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);

    setTimeout(() => {
      alert(`আপনার যাচাইকরণ কোড: ${code}\n\n(ডেমো - এখানে দেখাচ্ছে, বাস্তবে SMS যাবে)`);
      setStep("verify");
      setLoading(false);
    }, 1000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (verifyCode === generatedCode) {
        const users = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
        const newUser = {
          id: Date.now().toString(),
          ...formData,
          role: "user",
          phoneVerified: true,
          createdAt: new Date().toISOString(),
        };
        users.push(newUser);
        localStorage.setItem("bioghar_users", JSON.stringify(users));
        alert("রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");
        router.push("/login");
      } else {
        setError("ভুল কোড! আবার চেষ্টা করুন।");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><span className="text-2xl">🕌</span><span className="text-xl font-bold text-emerald-800">BioGhar</span></Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition font-medium">লগইন</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <span className="text-4xl">✨</span>
              <h1 className="mt-3 text-2xl font-bold text-emerald-900">{step === "form" ? "বায়োডাটা তৈরি করুন" : "ফোন যাচাইকরণ"}</h1>
              <p className="mt-2 text-sm text-gray-500">{step === "form" ? "আপনার অর্ধেক দীন খুঁজে নিন ইনশাআল্লাহ" : `${formData.phone} নম্বরে ৬ ডিজিটের কোড পাঠানো হয়েছে`}</p>
            </div>

            {step === "form" ? (
              <form onSubmit={handleSendCode} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ণ নাম</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="আপনার পূর্ণ নাম লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="ইমেইল লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+880 1XXX-XXXXXX" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
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
                    <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="পাসওয়ার্ড লিখুন" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
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

                {error && <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2">{error}</p>}

                <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                  {loading ? "কোড পাঠানো হচ্ছে..." : "ফোন যাচাইকরণ কোড পাঠান 📱"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify} className="space-y-5">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-sm text-gray-600">আপনার ফোনে ৬ ডিজিটের কোড পাঠানো হয়েছে</p>
                  <p className="font-mono text-lg font-bold text-emerald-700 mt-1">{formData.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">যাচাইকরণ কোড</label>
                  <input type="text" required value={verifyCode} onChange={(e) => { setVerifyCode(e.target.value); setError(""); }} placeholder="৬ ডিজিটের কোড লিখুন" maxLength={6} className="w-full rounded-lg border border-gray-300 px-4 py-4 text-center text-2xl tracking-[0.5em] font-mono font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                {error && <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2">{error}</p>}

                <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                  {loading ? "যাচাই হচ্ছে..." : "যাচাই করুন ✅"}
                </button>

                <button type="button" onClick={() => { setStep("form"); setVerifyCode(""); setError(""); }} className="w-full text-sm text-gray-500 hover:text-emerald-700 transition py-2">
                  ← পিছনে ফিরে যান
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">ইতিমধ্যে অ্যাকাউন্ট আছে? <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">লগইন করুন</Link></p>
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
