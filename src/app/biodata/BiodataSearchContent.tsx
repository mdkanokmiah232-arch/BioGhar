"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { biodatas, districts } from "@/data/biodatas";

const uniqueProfessions = [...new Set(biodatas.map((b) => b.profession))].sort();
const uniqueEducations = [...new Set(biodatas.map((b) => b.educationLevel))].sort();
const uniqueMaritalStatuses = [...new Set(biodatas.map((b) => b.maritalStatus))].sort();

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 mb-3 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold text-emerald-900 text-base">{title}</span>
        <ChevronDown className={`text-emerald-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 border-t border-gray-50 pt-4">{children}</div>}
    </div>
  );
}

function AgeRangeSlider({
  min,
  max,
  valueMin,
  valueMax,
  onChangeMin,
  onChangeMax,
}: {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChangeMin: (v: number) => void;
  onChangeMax: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full">{valueMin}</span>
        <span className="bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full">{valueMax}</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-emerald-600 rounded-full"
          style={{
            left: `${((valueMin - min) / (max - min)) * 100}%`,
            width: `${((valueMax - valueMin) / (max - min)) * 100}%`,
          }}
        />
      </div>
      <div className="flex gap-4 mt-4">
        <input
          type="range"
          min={min}
          max={max}
          value={valueMin}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v <= valueMax) onChangeMin(v);
          }}
          className="w-full accent-emerald-600 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={valueMax}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v >= valueMin) onChangeMax(v);
          }}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function BiodataSearchContent() {
  const searchParams = useSearchParams();

  const [lookingFor, setLookingFor] = useState(searchParams.get("lookingFor") || "all");
  const [maritalStatus, setMaritalStatus] = useState(searchParams.get("maritalStatus") || "all");
  const [ageMin, setAgeMin] = useState(Number(searchParams.get("ageMin")) || 18);
  const [ageMax, setAgeMax] = useState(Number(searchParams.get("ageMax")) || 60);
  const [district, setDistrict] = useState(searchParams.get("district") || "all");
  const [education, setEducation] = useState("all");
  const [profession, setProfession] = useState("all");
  const [biodataNo, setBiodataNo] = useState("");
  const [activeTab, setActiveTab] = useState<"filter" | "biodataNo">("filter");

  const filtered = useMemo(() => {
    return biodatas.filter((b) => {
      if (lookingFor === "groom" && b.type !== "GROOM") return false;
      if (lookingFor === "bride" && b.type !== "BRIDE") return false;
      if (maritalStatus !== "all" && b.maritalStatus !== maritalStatus) return false;
      if (b.age < ageMin || b.age > ageMax) return false;
      if (district !== "all" && b.presentAddress.district !== district) return false;
      if (education !== "all" && b.educationLevel !== education) return false;
      if (profession !== "all" && b.profession !== profession) return false;
      if (biodataNo && !b.biodataCode.includes(biodataNo)) return false;
      return true;
    });
  }, [lookingFor, maritalStatus, ageMin, ageMax, district, education, profession, biodataNo]);

  const resetFilters = () => {
    setLookingFor("all");
    setMaritalStatus("all");
    setAgeMin(18);
    setAgeMax(60);
    setDistrict("all");
    setEducation("all");
    setProfession("all");
    setBiodataNo("");
  };

  const handleSearch = () => {
    // Scroll to results
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              {/* Tabs */}
              <div className="bg-white rounded-t-2xl border border-gray-100 border-b-0 shadow-sm">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("filter")}
                    className={`flex-1 py-3.5 text-sm font-semibold transition ${
                      activeTab === "filter"
                        ? "text-emerald-700 border-b-2 border-emerald-600"
                        : "text-gray-400 hover:text-emerald-600"
                    }`}
                  >
                    ফিল্টার সমূহ
                  </button>
                  <button
                    onClick={() => setActiveTab("biodataNo")}
                    className={`flex-1 py-3.5 text-sm font-semibold transition ${
                      activeTab === "biodataNo"
                        ? "text-emerald-700 border-b-2 border-emerald-600"
                        : "text-gray-400 hover:text-emerald-600"
                    }`}
                  >
                    বায়োডাটা নং
                  </button>
                </div>
              </div>

              {/* Filter Tab Content */}
              {activeTab === "filter" && (
                <div className="bg-white rounded-b-2xl border border-gray-100 border-t-0 shadow-sm p-5 space-y-0">
                  {/* 1. প্রাথমিক */}
                  <CollapsibleSection title="প্রাথমিক" defaultOpen={true}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">আমি খুঁজছি</label>
                        <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} className="search-select w-full">
                          <option value="all">সকল</option>
                          <option value="groom">পাত্র</option>
                          <option value="bride">পাত্রী</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">বৈবাহিক অবস্থা</label>
                        <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="search-select w-full">
                          <option value="all">সকল</option>
                          {uniqueMaritalStatuses.map((ms) => (
                            <option key={ms} value={ms}>{ms}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">বয়স</label>
                        <AgeRangeSlider
                          min={18}
                          max={60}
                          valueMin={ageMin}
                          valueMax={ageMax}
                          onChangeMin={setAgeMin}
                          onChangeMax={setAgeMax}
                        />
                      </div>
                    </div>
                  </CollapsibleSection>

                  {/* 2. ঠিকানা */}
                  <CollapsibleSection title="ঠিকানা">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">স্থায়ী ঠিকানা</label>
                      <select value={district} onChange={(e) => setDistrict(e.target.value)} className="search-select w-full">
                        <option value="all">ঠিকানা নির্বাচন করুন</option>
                        {districts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </CollapsibleSection>

                  {/* 3. শিক্ষা */}
                  <CollapsibleSection title="শিক্ষা">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষাগত যোগ্যতা</label>
                      <select value={education} onChange={(e) => setEducation(e.target.value)} className="search-select w-full">
                        <option value="all">সকল</option>
                        {uniqueEducations.map((ed) => (
                          <option key={ed} value={ed}>{ed}</option>
                        ))}
                      </select>
                    </div>
                  </CollapsibleSection>

                  {/* 4. ব্যক্তিগত */}
                  <CollapsibleSection title="ব্যক্তিগত">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">পেশা</label>
                      <select value={profession} onChange={(e) => setProfession(e.target.value)} className="search-select w-full">
                        <option value="all">সকল</option>
                        {uniqueProfessions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </CollapsibleSection>
                </div>
              )}

              {/* Biodata No Tab Content */}
              {activeTab === "biodataNo" && (
                <div className="bg-white rounded-b-2xl border border-gray-100 border-t-0 shadow-sm p-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">বায়োডাটা নম্বর লিখুন</label>
                  <input
                    type="text"
                    placeholder="যেমন: BM-2026-0001"
                    value={biodataNo}
                    onChange={(e) => setBiodataNo(e.target.value)}
                    className="search-select w-full"
                  />
                </div>
              )}

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full mt-4 py-3.5 rounded-full text-white font-bold text-base shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
              >
                🔍 বায়োডাটা খুঁজুন
              </button>

              {/* Reset */}
              <button onClick={resetFilters} className="w-full mt-2 py-2.5 text-sm font-medium text-gray-500 hover:text-emerald-700 transition">
                ফিল্টার রিসেট করুন
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main id="results" className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-emerald-900">বায়োডাটা খুঁজুন</h1>
              <span className="text-sm text-gray-500">{filtered.length} টি ফলাফল</span>
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
                  <Link key={b.id} href={`/biodata/${b.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover block">
                    <div className="relative h-56 overflow-hidden">
                      <img src={b.photoUrl} alt={b.name} className="w-full h-full object-cover" />
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${b.type === "GROOM" ? "bg-blue-600" : "bg-pink-600"}`}>
                        {b.type === "GROOM" ? "পাত্র" : "পাত্রী"}
                      </span>
                      <span className="absolute top-3 right-3 bg-emerald-700 text-white px-2.5 py-1 rounded-full text-xs font-bold">#{b.biodataCode}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-emerald-900 text-lg">{b.name}</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">📅</span><span>{b.age} বছর</span></div>
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">📏</span><span>{b.height} সেমি</span></div>
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">💼</span><span className="truncate">{b.profession}</span></div>
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">📍</span><span>{b.presentAddress.district}</span></div>
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">💍</span><span>{b.maritalStatus}</span></div>
                        <div className="flex items-center gap-1.5"><span className="text-emerald-600">🎓</span><span className="truncate">{b.educationLevel}</span></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
