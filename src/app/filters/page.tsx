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

function CheckboxGroup({ options, selected, toggle }: { options: string[]; selected: string[]; toggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
          <span className="text-sm text-gray-700">{opt}</span>
        </label>
      ))}
    </div>
  );
}

const districts = [
  "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna",
  "Barishal", "Rangpur", "Mymensingh", "Comilla", "Bogra",
  "Cox's Bazar", "Gazipur",
];

const complexionOptions = ["ফর্সা", "উজ্জ্বল ফর্সা", "গোলাপি ফর্সা", "হালকা কমলা", "কমলা", "কালো"];
const dietOptions = ["নন-ভেজ", "ভেজিটারিয়ান"];
const tobaccoOptions = ["নেই", "তামাক", "সিগারেট", "বিড়ি", "অন্যান্য"];
const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const familyTypeOptions = ["সংযুক্ত", "একক"];
const familyStatusOptions = ["উচ্চ মধ্যবিত্ত", "মধ্যবিত্ত", "নিম্ন মধ্যবিত্ত"];
const fatherOptions = ["চাকুরিদার", "ব্যবসায়ী", "অবসরপ্রাপ্ত", "মৃত"];
const motherOptions = ["গৃহিণী", "চাকুরিদার"];
const siblingOptions = ["১", "২", "৩", "৪", "৫+", "নেই"];
const familyProfessionOptions = ["ব্যবসায়ী", "চাকুরিদার", "শিক্ষক", "চিকিৎসক", "ইঞ্জিনিয়ার", "আইনজীবী", "সরকারি চাকুরিদার", "অন্যান্য"];
const incomeOptions = ["১৫ হাজার - ২৫ হাজার", "২৫ হাজার - ৫০ হাজার", "৫০ হাজার - ১ লাখ", "১ লাখ - ২ লাখ", "২ লাখ - ৫ লাখ", "৫ লাখ এর বেশি"];
const propertyOptions = ["৫ লাখ পর্যন্ত", "১০ লাখ পর্যন্ত", "২৫ লাখ পর্যন্ত", "৫০ লাখ পর্যন্ত", "১ কোটি পর্যন্ত", "১ কোটির বেশি"];
const weddingOptions = ["১০ হাজার পর্যন্ত", "১০-৫০ হাজার", "৫০ হাজার - ১ লাখ", "১-২ লাখ", "২-৫ লাখ", "৫-১০ লাখ", "১০ লাখ পর্যন্ত", "১০ লাখ এর বেশি", "যৌতুক নেই"];

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
  const [complexion, setComplexion] = useState<string[]>([]);
  const [diet, setDiet] = useState<string[]>([]);
  const [tobacco, setTobacco] = useState<string[]>([]);
  const [bloodGroup, setBloodGroup] = useState<string[]>([]);

  // Family
  const [familyType, setFamilyType] = useState<string[]>([]);
  const [familyStatus, setFamilyStatus] = useState<string[]>([]);
  const [father, setFather] = useState<string[]>([]);
  const [mother, setMother] = useState<string[]>([]);
  const [brothers, setBrothers] = useState<string[]>([]);
  const [sisters, setSisters] = useState<string[]>([]);
  const [familyProfession, setFamilyProfession] = useState<string[]>([]);

  // Others
  const [income, setIncome] = useState<string[]>([]);
  const [property, setProperty] = useState<string[]>([]);
  const [wedding, setWedding] = useState<string[]>([]);

  // Tab
  const [tab, setTab] = useState<"filter" | "id">("filter");
  const [biodataNo, setBiodataNo] = useState("");

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (val: string) => {
    setter((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (lookingFor !== "all") params.set("lookingFor", lookingFor);
    if (maritalStatus !== "all") params.set("maritalStatus", maritalStatus);
    if (ageMin !== 18) params.set("ageMin", String(ageMin));
    if (ageMax !== 60) params.set("ageMax", String(ageMax));
    if (permanentDistrict !== "all") params.set("permanentDistrict", permanentDistrict);
    if (presentDistrict !== "all") params.set("presentDistrict", presentDistrict);
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </Link>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-4">
          <div className="flex">
            <button onClick={() => setTab("filter")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${tab === "filter" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>ফিল্টার সমূহ</button>
            <button onClick={() => setTab("id")} className={`flex-1 py-3 text-sm font-semibold border-b-2 transition ${tab === "id" ? "text-emerald-700 border-emerald-600" : "text-gray-400 border-transparent"}`}>বায়োডাটা নং</button>
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
                  <CheckboxGroup options={["জেনারেল", "কওমী", "আলিয়া"]} selected={eduMedium} toggle={toggle(setEduMedium)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">দ্বীনি শিক্ষাগত যোগ্যতা</label>
                  <CheckboxGroup options={["হাফেজ", "মাওলানা", "মুফতি", "মুফাসসির", "আদিব", "কারী"]} selected={diniEdu} toggle={toggle(setDiniEdu)} />
                </div>
              </div>
            </CollapsibleSection>

            {/* 4. ব্যক্তিগত */}
            <CollapsibleSection title="ব্যক্তিগত">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">গায়ের রং</label>
                  <CheckboxGroup options={complexionOptions} selected={complexion} toggle={toggle(setComplexion)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">খাবারের অভ্যাস</label>
                  <CheckboxGroup options={dietOptions} selected={diet} toggle={toggle(setDiet)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পান তামাকের অভ্যাস</label>
                  <CheckboxGroup options={tobaccoOptions} selected={tobacco} toggle={toggle(setTobacco)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">রক্তের গ্রুপ</label>
                  <CheckboxGroup options={bloodGroupOptions} selected={bloodGroup} toggle={toggle(setBloodGroup)} />
                </div>
              </div>
            </CollapsibleSection>

            {/* 5. পারিবারিক */}
            <CollapsibleSection title="পারিবারিক">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পরিবারের ধরন</label>
                  <CheckboxGroup options={familyTypeOptions} selected={familyType} toggle={toggle(setFamilyType)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পরিবারের অবস্থান</label>
                  <CheckboxGroup options={familyStatusOptions} selected={familyStatus} toggle={toggle(setFamilyStatus)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পিতা</label>
                  <CheckboxGroup options={fatherOptions} selected={father} toggle={toggle(setFather)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">মাতা</label>
                  <CheckboxGroup options={motherOptions} selected={mother} toggle={toggle(setMother)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ভাই</label>
                  <CheckboxGroup options={siblingOptions} selected={brothers} toggle={toggle(setBrothers)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বোন</label>
                  <CheckboxGroup options={siblingOptions} selected={sisters} toggle={toggle(setSisters)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পরিবারের পেশা</label>
                  <CheckboxGroup options={familyProfessionOptions} selected={familyProfession} toggle={toggle(setFamilyProfession)} />
                </div>
              </div>
            </CollapsibleSection>

            {/* 6. অন্যান্য */}
            <CollapsibleSection title="অন্যান্য">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">মাসিক আয়</label>
                  <CheckboxGroup options={incomeOptions} selected={income} toggle={toggle(setIncome)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">সম্পত্তির পরিমান</label>
                  <CheckboxGroup options={propertyOptions} selected={property} toggle={toggle(setProperty)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">যৌতুক/বিয়ের খরচ</label>
                  <CheckboxGroup options={weddingOptions} selected={wedding} toggle={toggle(setWedding)} />
                </div>
              </div>
            </CollapsibleSection>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">বায়োডাটা নম্বর</label>
            <input type="text" placeholder="বায়োডাটা নম্বর লিখুন (যেমন: BM-2026-0001)" value={biodataNo} onChange={(e) => setBiodataNo(e.target.value)} className="search-select w-full" />
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
