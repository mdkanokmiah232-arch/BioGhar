"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"input" | "code">("input");
  const [identifier, setIdentifier] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [foundUser, setFoundUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("bioghar_user");
    if (user) router.push("/dashboard");
  }, [router]);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
      const found = users.find((u: any) => u.email === identifier || u.phone === identifier);

      if (!found) {
        setError("এই ইমেইল বা ফোন নম্বর দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি!");
        setLoading(false);
        return;
      }

      setFoundUser(found);
      const c = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(c);
      alert(`আপনার যাচাইকরণ কোড: ${c}\n\n(ডেমো - এখানে দেখাচ্ছে)`);
      setStep("code");
      setLoading(false);
    }, 800);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (code === generatedCode) {
        localStorage.setItem("bioghar_user", JSON.stringify(foundUser));
        router.push("/dashboard");
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
          <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">রেজিস্টার</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <span className="text-4xl">🕌</span>
              <h1 className="mt-3 text-2xl font-bold text-emerald-900">লগইন করুন</h1>
              <p className="mt-2 text-sm text-gray-500">{step === "input" ? "ইমেইল বা ফোন নম্বর দিন" : "আপনার ফোনে পাঠানো কোড লিখুন"}</p>
            </div>

            {step === "input" ? (
              <form onSubmit={handleSendCode} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল বা ফোন নম্বর</label>
                  <input type="text" required value={identifier} onChange={(e) => { setIdentifier(e.target.value); setError(""); }} placeholder="ইমেইল বা +880 1XXX-XXXXXX" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                {error && <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2">{error}</p>}

                <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                  {loading ? "খুঁজছে..." : "যাচাইকরণ কোড পাঠান 📱"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify} className="space-y-5">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-sm text-gray-600">আপনার ফোনে ৬ ডিজিটের কোড পাঠানো হয়েছে</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">যাচাইকরণ কোড</label>
                  <input type="text" required value={code} onChange={(e) => { setCode(e.target.value); setError(""); }} placeholder="৬ ডিজিটের কোড লিখুন" maxLength={6} className="w-full rounded-lg border border-gray-300 px-4 py-4 text-center text-2xl tracking-[0.5em] font-mono font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                {error && <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2">{error}</p>}

                <button type="submit" disabled={loading} className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm disabled:opacity-50">
                  {loading ? "যাচাই হচ্ছে..." : "লগইন করুন 🔐"}
                </button>

                <button type="button" onClick={() => { setStep("input"); setCode(""); setError(""); }} className="w-full text-sm text-gray-500 hover:text-emerald-700 transition py-2">
                  ← পিছনে ফিরে যান
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">অ্যাকাউন্ট নেই? <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-semibold">রেজিস্টার করুন</Link></p>
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
