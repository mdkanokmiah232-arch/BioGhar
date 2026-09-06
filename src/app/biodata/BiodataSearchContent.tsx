"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { biodatas, districts } from "@/data/biodatas";

function CollapsibleSection({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 text-left">
        <span className="font-semibold text-emerald-900 text-sm">{title}</span>
        <svg className={`w-4 h-4 text-emerald-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="px-4 pb-4 border-t border-gray-100 pt-3">{children}</div>}
    </div>
  );
}

function MaleMini() {
  return (
    <svg viewBox="0 0 60 60" className="w-8 h-8">
      <circle cx="30" cy="18" r="11" fill="#3D3266"/>
      <rect x="19" y="10" width="22" height="7" rx="2" fill="#3D3266"/>
      <circle cx="26" cy="18" r="1.2" fill="#1a1a2e"/><circle cx="34" cy="18" r="1.2" fill="#1a1a2e"/>
      <path d="M22 32 C22 27 25 24 30 24 C35 24 38 27 38 32 L38 50 C38 52 36 53 34 53 L26 53 C24 53 22 52 22 50Z" fill="#3D3266"/>
      <path d="M22 21 Q25 28 30 29 Q35 28 38 21" fill="#3D3266" opacity="0.5"/>
    </svg>
  );
}

function FemaleMini() {
  return (
    <svg viewBox="0 0 60 70" className="w-8 h-8">
      <ellipse cx="30" cy="18" rx="15" ry="16" fill="#059669"/>
      <ellipse cx="30" cy="20" rx="10" ry="11" fill="#D4A574"/>
      <circle cx="26" cy="19" r="1.5" fill="#1a1a2e"/><circle cx="34" cy="19" r="1.5" fill="#1a1a2e"/>
      <path d="M27 24 Q30 27 33 24" fill="none" stroke="#1a1a2e" strokeWidth="1"/>
      <path d="M16 36 C16 30 22 27 30 27 C38 27 44 30 44 36 L44 64 C44 66 42 67 40 67 L20 67 C18 67 16 66 16 64Z" fill="#059669"/>
      <path d="M25 27 L30 33 L35 27" fill="none" stroke="#10b981" strokeWidth="1"/>
      <path d="M16 36 L10 46 L13 47 L18 40" fill="#059669"/>
      <path d="M44 36 L50 46 L47 47 L42 40" fill="#059669"/>
    </svg>
  );
}

export default function BiodataSearchContent() {
  const searchParams = useSearchParams();
  const [lookingFor, setLookingFor] = useState(searchParams.get("lookingFor") || "all");
  const [maritalStatus, setMaritalStatus] = useState(searchParams.get("maritalStatus") || "all");
  const [ageMin, setAgeMin] = useState(() => { const v = searchParams.get("ageMin"); return v ? Number(v) : 18; });
  const [ageMax, setAgeMax] = useState(() => { const v = searchParams.get("ageMax"); return v ? Number(v) : 60; });
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
    setLookingFor("all"); setMaritalStatus("all"); setAgeMin(18); setAgeMax(60);
    setDistrict("all"); setEducation("all"); setProfession("all"); setBiodataNo("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-t-xl border border-gray-100 border-b-0 shadow-sm">
                <div className="flex">
                  <button onClick={() => setActiveTab("filter")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${activeTab === "filter" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>ফিল্টার সমূহ</button>
                  <button onClick={() => setActiveTab("biodataNo")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${activeTab === "biodataNo" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>বায়োডাটা নং</button>
                </div>
              </div>

              {activeTab === "filter" ? (
                <div className="bg-white rounded-b-xl border border-gray-100 border-t-0 shadow-sm p-4 space-y-3">
                  <CollapsibleSection title="প্রাথমিক" defaultOpen={true}>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">আমি খুঁজছি</label>
                        <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} className="search-select w-full text-sm">
                          <option value="all">সকল</option>
                          <option value="groom">পাত্র</option>
                          <option value="bride">পাত্রী</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">বৈবাহিক অবস্থা</label>
                        <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="search-select w-full text-sm">
                          <option value="all">সকল</option>
                          <option value="অবিবাহিত">অবিবাহিত</option>
                          <option value="বিবাহিত">বিবাহিত</option>
                          <option value="ডিভোর্সড">ডিভোর্সড</option>
                          <option value="বিধবা">বিধবা</option>
                          <option value="বিপত্নীক">বিপত্নীক</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">বয়স (ন্যূনতম - সর্বোচ্চ)</label>
                        <div className="flex gap-2">
                          <input type="number" placeholder="ন্যূনতম" value={ageMin === 18 ? "" : ageMin} onChange={(e) => { const v = Number(e.target.value); if (v && v >= 18 && v < ageMax) setAgeMin(v); else if (!e.target.value) setAgeMin(18); }} className="w-1/2 rounded-lg border border-gray-300 px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                          <input type="number" placeholder="সর্বোচ্চ" value={ageMax === 60 ? "" : ageMax} onChange={(e) => { const v = Number(e.target.value); if (v && v > ageMin && v <= 60) setAgeMax(v); else if (!e.target.value) setAgeMax(60); }} className="w-1/2 rounded-lg border border-gray-300 px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                        </div>
                      </div>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="ঠিকানা">
                    <select value={district} onChange={(e) => setDistrict(e.target.value)} className="search-select w-full text-sm">
                      <option value="all">ঠিকানা নির্বাচন করুন</option>
                      {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </CollapsibleSection>

                  <CollapsibleSection title="শিক্ষা">
                    <select value={education} onChange={(e) => setEducation(e.target.value)} className="search-select w-full text-sm">
                      <option value="all">সকল</option>
                      {["HSC","B.Sc","B.A","B.Com","BBA","MBBS","LL.B","M.Sc","M.A","MBA","PhD","Diploma","Engineering"].map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </CollapsibleSection>

                  <CollapsibleSection title="ব্যক্তিগত">
                    <select value={profession} onChange={(e) => setProfession(e.target.value)} className="search-select w-full text-sm">
                      <option value="all">সকল</option>
                      {["Software Engineer","Doctor","Engineer","Teacher","Business","Bank Officer","Govt. Officer","Lawyer","Student","Other"].map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </CollapsibleSection>

                  <button onClick={resetFilters} className="w-full py-2.5 text-sm font-medium text-gray-500 hover:text-emerald-700 transition">ফিল্টার রিসেট করুন</button>
                </div>
              ) : (
                <div className="bg-white rounded-b-xl border border-gray-100 border-t-0 shadow-sm p-4">
                  <label className="block text-xs font-medium text-gray-600 mb-1">বায়োডাটা নম্বর</label>
                  <input type="text" placeholder="যেমন: BM-2026-0001" value={biodataNo} onChange={(e) => setBiodataNo(e.target.value)} className="search-select w-full text-sm" />
                </div>
              )}

              <button className="w-full mt-3 py-3 rounded-full text-white font-bold text-sm shadow-lg" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>🔍 বায়োডাটা খুঁজুন</button>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-emerald-900">বায়োডাটা খুঁজুন</h1>
              <span className="text-sm text-gray-500">{filtered.length} টি ফলাফল</span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-gray-500 text-lg">কোনো ফলাফল পাওয়া যায়নি</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((b) => {
                  const isGroom = b.type === "GROOM";
                  return (
                    <Link key={b.id} href={`/biodata/${b.id}`} className="block group">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                        {/* Header with icon */}
                        <div className={`px-4 py-5 flex items-center gap-3 ${isGroom ? "bg-gradient-to-r from-blue-50 to-blue-100/50" : "bg-gradient-to-r from-pink-50 to-pink-100/50"}`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isGroom ? "bg-blue-200" : "bg-pink-200"}`}>
                            {isGroom ? <MaleMini /> : <FemaleMini />}
                          </div>
                          <div className="flex-1">
                            <p className={`text-xs font-bold ${isGroom ? "text-blue-600" : "text-pink-600"}`}>
                              {isGroom ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">{b.biodataCode}</p>
                          </div>
                          <span className="text-lg font-bold text-emerald-700">#{b.biodataCode.split("-").pop()}</span>
                        </div>

                        {/* Info */}
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                            <div className="flex items-center gap-1.5"><span className="text-emerald-600">📅</span><span>{b.age} বছর</span></div>
                            <div className="flex items-center gap-1.5"><span className="text-emerald-600">📏</span><span>{b.height} সেমি</span></div>
                            <div className="flex items-center gap-1.5"><span className="text-emerald-600">📍</span><span>{b.presentAddress.district}</span></div>
                            <div className="flex items-center gap-1.5"><span className="text-emerald-600">💍</span><span>{b.maritalStatus}</span></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
