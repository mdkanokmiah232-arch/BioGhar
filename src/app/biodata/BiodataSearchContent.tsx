"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { biodatas, districts } from "@/data/biodatas";

function CollapsibleSection({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3.5 text-left">
        <span className="font-semibold text-emerald-900 text-sm">{title}</span>
        <svg className={`w-4 h-4 text-emerald-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="px-4 pb-4 border-t border-gray-100 pt-3">{children}</div>}
    </div>
  );
}

function SmallMaleIcon() {
  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
      <svg viewBox="0 0 120 120" className="w-10 h-10">
        <circle cx="60" cy="38" r="22" fill="white" opacity="0.9"/>
        <rect x="38" y="20" width="44" height="12" rx="4" fill="white" opacity="0.7"/>
        <circle cx="52" cy="38" r="2" fill="#047857"/>
        <circle cx="68" cy="38" r="2" fill="#047857"/>
        <path d="M36 65 C36 58 48 52 60 52 C72 52 84 58 84 65 L84 100 C84 105 80 108 76 108 L44 108 C40 108 36 105 36 100Z" fill="white" opacity="0.85"/>
        <path d="M44 44 Q48 56 60 58 Q72 56 76 44" fill="white" opacity="0.5"/>
      </svg>
    </div>
  );
}

function SmallFemaleIcon() {
  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
      <svg viewBox="0 0 120 140" className="w-10 h-10">
        <ellipse cx="60" cy="40" rx="30" ry="32" fill="white" opacity="0.85"/>
        <circle cx="52" cy="40" r="2.5" fill="#047857"/>
        <circle cx="68" cy="40" r="2.5" fill="#047857"/>
        <path d="M32 72 C32 62 44 56 60 56 C76 56 88 62 88 72 L88 130 C88 135 84 138 80 138 L40 138 C36 138 32 135 32 130Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
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
        <div className="flex flex-col lg:flex-row gap-8">

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
                          <select value={ageMin} onChange={(e) => setAgeMin(Number(e.target.value))} className="w-1/2 search-select text-xs">
                            {Array.from({ length: 25 }, (_, i) => (
                              <option key={i + 18} value={i + 18}>{i + 18} বছর</option>
                            ))}
                          </select>
                          <select value={ageMax} onChange={(e) => setAgeMax(Number(e.target.value))} className="w-1/2 search-select text-xs">
                            {Array.from({ length: 25 }, (_, i) => (
                              <option key={i + 20} value={i + 20}>{i + 20} বছর</option>
                            ))}
                          </select>
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

                  <CollapsibleSection title="পারিবারিক">
                    <select className="search-select w-full text-sm">
                      <option value="all">সকল</option>
                    </select>
                  </CollapsibleSection>

                  <CollapsibleSection title="পেশা">
                    <select value={profession} onChange={(e) => setProfession(e.target.value)} className="search-select w-full text-sm">
                      <option value="all">সকল</option>
                      {["Software Engineer","Doctor","Engineer","Teacher","Business","Bank Officer","Govt. Officer","Lawyer","Student"].map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </CollapsibleSection>

                  <CollapsibleSection title="অন্যান্য">
                    <p className="text-xs text-gray-500">আর্থিক অবস্থা ও ক্যাটাগরি ফিল্টার শীঘ্রই আসছে।</p>
                  </CollapsibleSection>
                </div>
              ) : (
                <div className="bg-white rounded-b-xl border border-gray-100 border-t-0 shadow-sm p-4">
                  <label className="block text-xs font-medium text-gray-600 mb-1">বায়োডাটা নম্বর</label>
                  <input type="text" placeholder="যেমন: BM-2026-0001" value={biodataNo} onChange={(e) => setBiodataNo(e.target.value)} className="search-select w-full text-sm" />
                </div>
              )}

              <div className="flex gap-2 mt-3">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-1 py-2.5 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold text-xs hover:bg-emerald-50 transition">ফিল্টার খুঁজুন</button>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-1 py-2.5 rounded-full text-white font-bold text-xs shadow-md transition hover:shadow-lg" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>বায়োডাটা খুঁজুন</button>
              </div>
              <button onClick={resetFilters} className="w-full mt-2 py-2 text-xs font-medium text-gray-500 hover:text-emerald-700 transition">ফিল্টার রিসেট করুন</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-emerald-900 mb-1">বায়োডাটা সমূহ</h1>
              <p className="text-sm text-gray-500">{filtered.length} টি বায়োডাটা পাওয়া গেছে!</p>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-gray-500 text-lg">কোনো ফলাফল পাওয়া যায়নি</p>
                <p className="text-gray-400 text-sm mt-2">ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((b) => {
                    const isGroom = b.type === "GROOM";
                    return (
                      <Link key={b.id} href={`/biodata/${b.id}`} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all block p-4">
                        <div className="flex items-center gap-3">
                          {isGroom ? <SmallMaleIcon /> : <SmallFemaleIcon />}
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-emerald-900 text-sm">{b.biodataCode}</div>
                            <div className="text-xs text-gray-500">বয়স - {b.age} বছর</div>
                            <div className="text-xs text-gray-500">উচ্চতা - {b.height} সেমি</div>
                            <div className="text-xs text-gray-500">পেশা - {b.profession}</div>
                            <div className="text-xs text-gray-500">বৈবাহিক - {b.maritalStatus}</div>
                          </div>
                          <button className="px-3 py-1.5 rounded-full border border-emerald-600 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 transition flex-shrink-0">
                            বিস্তারিত →
                          </button>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {filtered.length > 12 && (
                  <div className="text-center mt-8">
                    <button className="px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg transition hover:shadow-xl" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
                      সকল বায়োডাটা দেখুন
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
