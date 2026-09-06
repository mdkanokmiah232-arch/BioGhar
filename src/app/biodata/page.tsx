"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { biodatas, districts } from "@/data/biodatas";

const uniqueProfessions = [...new Set(biodatas.map((b) => b.profession))].sort();
const uniqueEducations = [...new Set(biodatas.map((b) => b.educationLevel))].sort();
const uniqueMaritalStatuses = [...new Set(biodatas.map((b) => b.maritalStatus))].sort();

export default function BiodataSearchPage() {
  const searchParams = useSearchParams();

  const [lookingFor, setLookingFor] = useState(searchParams.get("lookingFor") || "all");
  const [maritalStatus, setMaritalStatus] = useState("all");
  const [ageMin, setAgeMin] = useState(searchParams.get("ageMin") || "");
  const [ageMax, setAgeMax] = useState(searchParams.get("ageMax") || "");
  const [district, setDistrict] = useState("all");
  const [education, setEducation] = useState("all");
  const [profession, setProfession] = useState("all");

  const filtered = useMemo(() => {
    return biodatas.filter((b) => {
      if (lookingFor === "groom" && b.type !== "GROOM") return false;
      if (lookingFor === "bride" && b.type !== "BRIDE") return false;
      if (maritalStatus !== "all" && b.maritalStatus !== maritalStatus) return false;
      if (ageMin && b.age < Number(ageMin)) return false;
      if (ageMax && b.age > Number(ageMax)) return false;
      if (district !== "all" && b.presentAddress.district !== district) return false;
      if (education !== "all" && b.educationLevel !== education) return false;
      if (profession !== "all" && b.profession !== profession) return false;
      return true;
    });
  }, [lookingFor, maritalStatus, ageMin, ageMax, district, education, profession]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-800">BioGhar</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/biodata" className="text-emerald-700 font-semibold">খুঁজুন</Link>
            <Link href="/about" className="hover:text-emerald-700 transition">আমাদের সম্পর্কে</Link>
            <Link href="/faq" className="hover:text-emerald-700 transition">প্রশ্নোত্তর</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition">লগইন</Link>
            <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
              রেজিস্টার
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                🔍 ফিল্টার
              </h2>

              {/* Looking For */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">খুঁজছেন</label>
                <select
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">সব</option>
                  <option value="groom">পাত্র (Groom)</option>
                  <option value="bride">পাত্রী (Bride)</option>
                </select>
              </div>

              {/* Marital Status */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">বৈবাহিক অবস্থা</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">সব</option>
                  {uniqueMaritalStatuses.map((ms) => (
                    <option key={ms} value={ms}>{ms}</option>
                  ))}
                </select>
              </div>

              {/* Age Range */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">বয়স (ন্যূনতম - সর্বোচ্চ)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="ন্যূনতম"
                    value={ageMin}
                    onChange={(e) => setAgeMin(e.target.value)}
                    className="w-1/2 rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="number"
                    placeholder="সর্বোচ্চ"
                    value={ageMax}
                    onChange={(e) => setAgeMax(e.target.value)}
                    className="w-1/2 rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* District */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">জেলা</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">সব জেলা</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Education */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষা</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">সব</option>
                  {uniqueEducations.map((ed) => (
                    <option key={ed} value={ed}>{ed}</option>
                  ))}
                </select>
              </div>

              {/* Profession */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">পেশা</label>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">সব</option>
                  {uniqueProfessions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setLookingFor("all");
                  setMaritalStatus("all");
                  setAgeMin("");
                  setAgeMax("");
                  setDistrict("all");
                  setEducation("all");
                  setProfession("all");
                }}
                className="w-full rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-emerald-900">বায়োডাটা খুঁজুন</h1>
              <span className="text-sm text-gray-500">{filtered.length} টি ফলাফল পাওয়া গেছে</span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-gray-500 text-lg">কোনো ফলাফল পাওয়া যায়নি</p>
                <p className="text-gray-400 text-sm mt-2">ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((b) => (
                  <Link
                    key={b.id}
                    href={`/biodata/${b.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover block"
                  >
                    {/* Photo */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={b.photoUrl}
                        alt={b.name}
                        className="w-full h-full object-cover"
                      />
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
                          b.type === "GROOM" ? "bg-blue-600" : "bg-pink-600"
                        }`}
                      >
                        {b.type === "GROOM" ? "পাত্র" : "পাত্রী"}
                      </span>
                      <span className="absolute top-3 right-3 bg-emerald-700 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                        #{b.biodataCode}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-emerald-900 text-lg">{b.name}</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">📅</span>
                          <span>{b.age} বছর</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">📏</span>
                          <span>{b.height} সেমি</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">💼</span>
                          <span className="truncate">{b.profession}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">📍</span>
                          <span>{b.presentAddress.district}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">💍</span>
                          <span>{b.maritalStatus}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600">🎓</span>
                          <span className="truncate">{b.educationLevel}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-emerald-300">
          © 2026 BioGhar. All rights reserved. Made with ❤️ for the Ummah.
        </div>
      </footer>
    </div>
  );
}
