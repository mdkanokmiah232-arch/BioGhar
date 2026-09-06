"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("bioghar_user");
    if (!stored) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("bioghar_user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">{user.name?.charAt(0)}</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900">আসসালামু আলাইকুম, {user.name}</h1>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition">
              লগআউট
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link href="/biodata" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition card-hover text-center">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-bold text-emerald-900">বায়োডাটা খুঁজুন</h3>
            <p className="text-sm text-gray-500 mt-1">সকল বায়োডাটা ব্রাউজ করুন</p>
          </Link>
          <Link href="/filters" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition card-hover text-center">
            <div className="text-3xl mb-2">⚙️</div>
            <h3 className="font-bold text-emerald-900">সকল ফিল্টার</h3>
            <p className="text-sm text-gray-500 mt-1">বিস্তারিত ফিল্টার দিয়ে খুঁজুন</p>
          </Link>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center opacity-60">
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-bold text-emerald-900">বায়োডাটা তৈরি করুন</h3>
            <p className="text-sm text-gray-500 mt-1">শীঘ্রই আসছে</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-emerald-900 mb-4">👤 আপনার প্রোফাইল</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">নাম</span>
              <p className="font-semibold text-gray-800">{user.name}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">ইমেইল</span>
              <p className="font-semibold text-gray-800">{user.email}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">মোবাইল</span>
              <p className="font-semibold text-gray-800">{user.phone}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">বায়োডাটার ধরন</span>
              <p className="font-semibold text-gray-800">{user.type === "groom" ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">লিঙ্গ</span>
              <p className="font-semibold text-gray-800">{user.gender === "male" ? "পুরুষ" : "মহিলা"}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg px-4 py-3">
              <span className="text-gray-500 block">রেজিস্ট্রেশন</span>
              <p className="font-semibold text-gray-800">{new Date(user.createdAt).toLocaleDateString("bn-BD")}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-emerald-700 transition">← হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
}
