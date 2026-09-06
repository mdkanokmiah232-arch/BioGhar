"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg className={`w-5 h-5 text-emerald-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CollapsibleSection({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-semibold text-emerald-900 text-base">{title}</span>
        <ChevronDown open={open} />
      </button>
      {open && <div className="px-5 pb-5 border-t border-gray-100 pt-4">{children}</div>}
    </div>
  );
}

const districts = [
  "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna",
  "Barishal", "Rangpur", "Mymensingh", "Comilla", "Bogra",
  "Cox's Bazar", "Gazipur",
];

const educationLevels = [
  "HSC", "B.Sc", "B.A", "B.Com", "BBA", "MBBS", "LL.B",
  "M.Sc", "M.A", "MBA", "PhD", "Diploma", "Engineering",
];

const professions = [
  "Software Engineer", "Doctor", "Engineer", "Teacher",
  "Business", "Bank Officer", "Govt. Officer", "Lawyer",
  "Student", "Other",
];

export default function AllFiltersPage() {
  const router = useRouter();

  // Primary
  const [lookingFor, setLookingFor] = useState("all");
  const [maritalStatus, setMaritalStatus] = useState("all");
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(60);

  // Address
  const [district, setDistrict] = useState("all");

  // Education
  const [education, setEducation] = useState("all");

  // Personal
  const [profession, setProfession] = useState("all");
  const [biodataNo, setBiodataNo] = useState("");

  // Tab
  const [tab, setTab] = useState<"filter" | "id">("filter");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (lookingFor !== "all") params.set("lookingFor", lookingFor);
    if (maritalStatus !== "all") params.set("maritalStatus", maritalStatus);
    if (ageMin !== 18) params.set("ageMin", String(ageMin));
    if (ageMax !== 60) params.set("ageMax", String(ageMax));
    if (district !== "all") params.set("district", district);
    if (education !== "all") params.set("education", education);
    if (profession !== "all") params.set("profession", profession);
    if (biodataNo) params.set("biodataNo", biodataNo);
    const qs = params.toString();
    router.push(`/biodata${qs ? `?${qs}` : ""}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-4">
          <div className="flex">
            <button onClick={() => setTab("filter")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${tab === "filter" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>
              ফিল্টার সমূহ
            </button>
            <button onClick={() => setTab("id")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${tab === "id" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>
              বায়োডাটা নং
            </button>
          </div>
        </div>

        {tab === "filter" ? (
          <div className="space-y-3">
            {/* প্রাথমিক */}
            <CollapsibleSection title="প্রাথমিক" defaultOpen={true}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">আমি খুঁজছি</label>
                  <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="groom">পাত্র</option>
                    <option value="bride">পাত্রী</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">বৈবাহিক অবস্থা</label>
                  <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="অবিবাহিত">অবিবাহিত</option>
                    <option value="বিবাহিত">বিবাহিত</option>
                    <option value="ডিভোর্সড">ডিভোর্সড</option>
                    <option value="বিধবা">বিধবা</option>
                    <option value="বিপত্নীক">বিপত্নীক</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বয়স</label>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">{ageMin}</span>
                    <input type="range" min="18" max="60" value={ageMin} onChange={(e) => { const v = Number(e.target.value); if (v < ageMax) setAgeMin(v); }} className="flex-1 h-2 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                    <span className="text-xs text-gray-400">—</span>
                    <input type="range" min="18" max="60" value={ageMax} onChange={(e) => { const v = Number(e.target.value); if (v > ageMin) setAgeMax(v); }} className="flex-1 h-2 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">{ageMax}</span>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* ঠিকানা */}
            <CollapsibleSection title="ঠিকানা">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">স্থায়ী ঠিকানা</label>
                <select value={district} onChange={(e) => setDistrict(e.target.value)} className="search-select w-full">
                  <option value="all">ঠিকানা নির্বাচন করুন</option>
                  {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </CollapsibleSection>

            {/* শিক্ষা */}
            <CollapsibleSection title="শিক্ষা">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">শিক্ষাগত যোগ্যতা</label>
                <select value={education} onChange={(e) => setEducation(e.target.value)} className="search-select w-full">
                  <option value="all">সকল</option>
                  {educationLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </CollapsibleSection>

            {/* ব্যক্তিগত */}
            <CollapsibleSection title="ব্যক্তিগত">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">পেশা</label>
                <select value={profession} onChange={(e) => setProfession(e.target.value)} className="search-select w-full">
                  <option value="all">সকল</option>
                  {professions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </CollapsibleSection>
          </div>
        ) : (
          /* বায়োডাটা নং Tab */
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">বায়োডাটা নম্বর</label>
            <input
              type="text"
              placeholder="বায়োডাটা নম্বর লিখুন (যেমন: BM-2026-0001)"
              value={biodataNo}
              onChange={(e) => setBiodataNo(e.target.value)}
              className="search-select w-full"
            />
          </div>
        )}

        {/* Search Button */}
        <div className="mt-6">
          <button onClick={handleSearch} className="w-full py-3.5 rounded-full text-white font-bold text-base shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            বায়োডাটা খুঁজুন
          </button>
        </div>
      </div>
    </div>
  );
}
