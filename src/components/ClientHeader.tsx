"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientHeader() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("bioghar_user");
    if (stored) setUser(JSON.parse(stored));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("bioghar_user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-700">BioGhar</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/biodata" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition">খুঁজুন</Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition">আমাদের সম্পর্কে</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition">প্রশ্নোত্তর</Link>
          </nav>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition hidden sm:inline-flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-700">{user.name?.charAt(0)}</span>
                  </div>
                  {user.name?.split(" ")[0]}
                </Link>
                <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-red-600 transition">
                  লগআউট
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition">লগইন</Link>
                <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
                  রেজিস্টার
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
