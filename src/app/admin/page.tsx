"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  gender: string;
  role: string;
  phoneVerified: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [adminLogin, setAdminLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({ total: 0, groom: 0, bride: 0, verified: 0 });

  const ADMIN_EMAIL = "admin@bioghar.com";
  const ADMIN_PASS = "admin123";

  useEffect(() => {
    const stored = localStorage.getItem("bioghar_admin");
    if (stored === "true") setAdminLogin(true);
    loadUsers();
  }, []);

  const loadUsers = () => {
    const u = JSON.parse(localStorage.getItem("bioghar_users") || "[]");
    setUsers(u);
    setStats({
      total: u.length,
      groom: u.filter((x: User) => x.type === "groom").length,
      bride: u.filter((x: User) => x.type === "bride").length,
      verified: u.filter((x: User) => x.phoneVerified).length,
    });
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail === ADMIN_EMAIL && adminPass === ADMIN_PASS) {
      localStorage.setItem("bioghar_admin", "true");
      setAdminLogin(true);
    } else {
      alert("ভুল ইমেইল বা পাসওয়ার্ড!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("bioghar_admin");
    setAdminLogin(false);
  };

  const deleteUser = (id: string) => {
    if (!confirm("আপনি কি নিশ্চিত এই ব্যবহারকারীকে মুছে ফেলতে চান?")) return;
    const updated = users.filter((u) => u.id !== id);
    localStorage.setItem("bioghar_users", JSON.stringify(updated));
    loadUsers();
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.phone.includes(search)
  );

  if (!adminLogin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2"><span className="text-2xl">🕌</span><span className="text-xl font-bold text-emerald-800">BioGhar</span></Link>
            <span className="text-sm font-bold text-red-600">অ্যাডমিন প্যানেল</span>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-8">
                <span className="text-4xl">🔐</span>
                <h1 className="mt-3 text-2xl font-bold text-emerald-900">অ্যাডমিন লগইন</h1>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">অ্যাডমিন ইমেইল</label>
                  <input type="email" required value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@bioghar.com" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
                  <input type="password" required value={adminPass} onChange={(e) => setAdminPass(e.target.value)} placeholder="admin123" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md text-sm">লগইন করুন</button>
              </form>
              <div className="mt-4 text-center text-xs text-gray-400">ডেমো: admin@bioghar.com / admin123</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🕌</span>
            <div>
              <h1 className="text-xl font-bold text-emerald-900">অ্যাডমিন প্যানেল</h1>
              <p className="text-sm text-gray-500">BioGhar ব্যবস্থাপনা</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-gray-600 hover:text-emerald-700 transition">হোম</Link>
            <button onClick={handleLogout} className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition">লগআউট</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "মোট ব্যবহারকারী", value: stats.total, color: "emerald" },
            { label: "পাত্র", value: stats.groom, color: "blue" },
            { label: "পাত্রী", value: stats.bride, color: "pink" },
            { label: "যাচাইকৃত", value: stats.verified, color: "green" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className={`text-2xl font-bold text-${s.color}-600 mt-1`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <input type="text" placeholder="🔍 নাম, ইমেইল বা ফোন দিয়ে খুঁজুন..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-emerald-900">সকল ব্যবহারকারী ({filtered.length})</h2>
          </div>
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-4xl mb-2">👤</p>
              <p>কোনো ব্যবহারকারী পাওয়া যায়নি</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">#</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">নাম</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">ইমেইল</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">ফোন</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">ধরন</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">যাচাই</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">তারিখ</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-800">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((u, i) => (
                    <tr key={u.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{u.name}</td>
                      <td className="px-4 py-3 text-gray-600">{u.email}</td>
                      <td className="px-4 py-3 text-gray-600 font-mono">{u.phone}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${u.type === "groom" ? "bg-blue-100 text-blue-700" : "bg-pink-100 text-pink-700"}`}>
                          {u.type === "groom" ? "পাত্র" : "পাত্রী"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${u.phoneVerified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {u.phoneVerified ? "✅ যাচাইকৃত" : "⏳ পেন্ডিং"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{new Date(u.createdAt).toLocaleDateString("bn-BD")}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => deleteUser(u.id)} className="text-red-500 hover:text-red-700 text-xs font-medium">মুছুন</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
