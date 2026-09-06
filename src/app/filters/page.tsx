"use client";

import { useState } from "react";
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

export default function AllFiltersPage() {
  const router = useRouter();

  // Primary
  const [lookingFor, setLookingFor] = useState("all");
  const [maritalStatus, setMaritalStatus] = useState("all");
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(60);

  // Address
  const [permanentDistrict, setPermanentDistrict] = useState("all");
  const [presentDistrict, setPresentDistrict] = useState("all");

  // Education
  const [eduMedium, setEduMedium] = useState<string[]>([]);
  const [diniEdu, setDiniEdu] = useState<string[]>([]);

  // Personal
  const [skinTone, setSkinTone] = useState<string[]>([]);
  const [foodHabit, setFoodHabit] = useState("all");
  const [tobaccoHabit, setTobaccoHabit] = useState("all");
  const [bloodGroup, setBloodGroup] = useState("all");

  // Family
  const [familyType, setFamilyType] = useState("all");
  const [familyStatus, setFamilyStatus] = useState("all");

  // Others
  const [financialStatus, setFinancialStatus] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  // Tab
  const [tab, setTab] = useState<"filter" | "id">("filter");
  const [biodataNo, setBiodataNo] = useState("");

  const toggleMulti = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (lookingFor !== "all") params.set("lookingFor", lookingFor);
    if (maritalStatus !== "all") params.set("maritalStatus", maritalStatus);
    if (ageMin !== 18) params.set("ageMin", String(ageMin));
    if (ageMax !== 60) params.set("ageMax", String(ageMax));
    if (permanentDistrict !== "all") params.set("permanentDistrict", permanentDistrict);
    if (presentDistrict !== "all") params.set("presentDistrict", presentDistrict);
    if (eduMedium.length) params.set("eduMedium", eduMedium.join(","));
    if (diniEdu.length) params.set("diniEdu", diniEdu.join(","));
    if (skinTone.length) params.set("skinTone", skinTone.join(","));
    if (foodHabit !== "all") params.set("foodHabit", foodHabit);
    if (tobaccoHabit !== "all") params.set("tobaccoHabit", tobaccoHabit);
    if (bloodGroup !== "all") params.set("bloodGroup", bloodGroup);
    if (familyType !== "all") params.set("familyType", familyType);
    if (familyStatus !== "all") params.set("familyStatus", familyStatus);
    if (financialStatus.length) params.set("financialStatus", financialStatus.join(","));
    if (category.length) params.set("category", category.join(","));
    if (biodataNo) params.set("biodataNo", biodataNo);
    const qs = params.toString();
    router.push(`/biodata${qs ? `?${qs}` : ""}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Close */}
        <div className="flex justify-end mb-4">
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
            {/* 1. প্রাথমিক */}
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
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded min-w-[36px] text-center">{ageMin}</span>
                    <input type="range" min="18" max="60" value={ageMin} onChange={(e) => { const v = Number(e.target.value); if (v < ageMax) setAgeMin(v); }} className="flex-1 h-2 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                    <span className="text-xs text-gray-400">—</span>
                    <input type="range" min="18" max="60" value={ageMax} onChange={(e) => { const v = Number(e.target.value); if (v > ageMin) setAgeMax(v); }} className="flex-1 h-2 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded min-w-[36px] text-center">{ageMax}</span>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* 2. ঠিকানা */}
            <CollapsibleSection title="ঠিকানা">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">স্থায়ী ঠিকানা</label>
                  <select value={permanentDistrict} onChange={(e) => setPermanentDistrict(e.target.value)} className="search-select w-full">
                    <option value="all">ঠিকানা নির্বাচন করুন</option>
                    {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">বর্তমান ঠিকানা</label>
                  <select value={presentDistrict} onChange={(e) => setPresentDistrict(e.target.value)} className="search-select w-full">
                    <option value="all">ঠিকানা নির্বাচন করুন</option>
                    {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            </CollapsibleSection>

            {/* 3. শিক্ষা */}
            <CollapsibleSection title="শিক্ষা">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পড়াশোনার মাধ্যম</label>
                  <div className="flex flex-wrap gap-3">
                    {["জেনারেল", "কওমী", "আলিয়া"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={eduMedium.includes(opt)} onChange={() => toggleMulti(eduMedium, setEduMedium, opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">দ্বীনি শিক্ষাগত যোগ্যতা</label>
                  <div className="flex flex-wrap gap-3">
                    {["হাফেজ", "মাওলানা", "মুফতি", "মুফাসসির", "আদিব", "কারী"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={diniEdu.includes(opt)} onChange={() => toggleMulti(diniEdu, setDiniEdu, opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* 4. ব্যক্তিগত */}
            <CollapsibleSection title="ব্যক্তিগত">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">গায়ের রং</label>
                  <div className="flex flex-wrap gap-3">
                    {["ফর্সা", "উজ্জ্বল ফর্সা", "গোলাপি ফর্সা", "হালকা শ্যাওলা", "শ্যাওলা", "কালচে শ্যাওলা", "কালো"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={skinTone.includes(opt)} onChange={() => toggleMulti(skinTone, setSkinTone, opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">খাবারের অভ্যাস</label>
                  <select value={foodHabit} onChange={(e) => setFoodHabit(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="সাধারণ">সাধারণ</option>
                    <option value="নিরামিষভোজী">নিরামিষভোজী</option>
                    <option value="জঙ্গীভোজী">জঙ্গীভোজী</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">পান তামাক অভ্যাস</label>
                  <select value={tobaccoHabit} onChange={(e) => setTobaccoHabit(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="আছে">আছে</option>
                    <option value="নেই">নেই</option>
                    <option value="কখনো কখনো">কখনো কখনো</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">রক্তের গ্রুপ</label>
                  <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </CollapsibleSection>

            {/* 5. পারিবারিক */}
            <CollapsibleSection title="পারিবারিক">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">পরিবারের ধরন</label>
                  <select value={familyType} onChange={(e) => setFamilyType(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="নিউক্লিয়ার পরিবার">নিউক্লিয়ার পরিবার</option>
                    <option value="যৌথ পরিবার">যৌথ পরিবার</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">পরিবারের অবস্থা</label>
                  <select value={familyStatus} onChange={(e) => setFamilyStatus(e.target.value)} className="search-select w-full">
                    <option value="all">সকল</option>
                    <option value="সম্ভ্রান্ত">সম্ভ্রান্ত</option>
                    <option value="সাধারণ">সাধারণ</option>
                    <option value="গরিব">গরিব</option>
                  </select>
                </div>
              </div>
            </CollapsibleSection>

            {/* 6. অন্যান্য */}
            <CollapsibleSection title="অন্যান্য">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">আর্থিক অবস্থা</label>
                  <div className="flex flex-wrap gap-3">
                    {["উচ্চবিত্ত", "উচ্চ মধ্যবিত্ত", "মধ্যবিত্ত", "নিম্ন মধ্যবিত্ত", "নিম্নবিত্ত"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={financialStatus.includes(opt)} onChange={() => toggleMulti(financialStatus, setFinancialStatus, opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি</label>
                  <div className="flex flex-wrap gap-3">
                    {["প্রতিবন্ধী", "বক্র", "নতুনমুসলমান", "এতিম", "২য় স্ত্রী হতে আগ্রহী", "ডাইবলগ"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={category.includes(opt)} onChange={() => toggleMulti(category, setCategory, opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
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
