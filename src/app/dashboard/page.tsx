"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const steps = [
  { id: 1, label: "সাধারণ তথ্য" },
  { id: 2, label: "ঠিকানা" },
  { id: 3, label: "শিক্ষাগত যোগ্যতা" },
  { id: 4, label: "পারিবারিক তথ্য" },
  { id: 5, label: "ব্যক্তিগত তথ্য" },
  { id: 6, label: "পেশাগত তথ্য" },
  { id: 7, label: "বিবাহ সম্পর্কিত তথ্য" },
  { id: 8, label: "প্রত্যাশিত জীবনসঙ্গী" },
  { id: 9, label: "অঙ্গীকারনামা" },
  { id: 10, label: "যোগাযোগ" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    // Step 1 - সাধারণ তথ্য
    biodataType: "", name: "", height: "", weight: "", complexion: "", bloodGroup: "", nationality: "বাংলাদেশী",
    // Step 2 - ঠিকানা
    presentDistrict: "", presentDivision: "", permanentDistrict: "", permanentDivision: "",
    // Step 3 - শিক্ষা
    educationMedium: "", educationLevel: "", institution: "",
    // Step 4 - পারিবারিক
    fatherName: "", fatherOccupation: "", fatherAlive: "হ্যাঁ", motherName: "", motherOccupation: "", motherAlive: "হ্যাঁ", siblings: "", familyType: "", familyStatus: "",
    // Step 5 - ব্যক্তিগত
    religion: "ইসলাম", madhab: "", prayerRegularity: "", hijabOrBeard: "", quranRecitation: "", religiousQualification: "", maritalStatus: "", bloodGroupPersonal: "", age: "",
    // Step 6 - পেশাগত
    profession: "", monthlyIncome: "", economicStatus: "",
    // Step 7 - বিবাহ
    expectedMarriageDate: "", previousMarriageCount: "",
    // Step 8 - প্রত্যাশিত জীবনসঙ্গী
    partnerAge: "", partnerHeight: "", partnerComplexion: "", partnerEducation: "", partnerLocation: "", partnerReligiousPractice: "", partnerMaritalStatus: "", partnerProfession: "",
    // Step 9 - অঙ্গীকারনামা
    commitmentText: "",
    // Step 10 - যোগাযোগ
    contactPhone: "", contactEmail: "", contactGuardian: "",
  });

  useEffect(() => {
    const u = localStorage.getItem("bioghar_user");
    if (!u) { router.push("/login"); return; }
    setUser(JSON.parse(u));
    const savedBio = localStorage.getItem("bioghar_biodata_" + JSON.parse(u).id);
    if (savedBio) setForm(JSON.parse(savedBio));
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!user) return;
    localStorage.setItem("bioghar_biodata_" + user.id, JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleNext = () => {
    handleSave();
    if (currentStep < 10) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    handleSave();
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (!user) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">লোড হচ্ছে...</p></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><span className="text-xl">🕌</span><span className="text-lg font-bold text-emerald-800">BioGhar</span></Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">স্বাগতম, <span className="font-semibold text-emerald-700">{user.name}</span></span>
            <Link href="/" className="text-sm text-gray-500 hover:text-emerald-700 transition">হোম</Link>
            <button onClick={() => { localStorage.removeItem("bioghar_user"); router.push("/login"); }} className="text-sm text-red-500 hover:text-red-700 transition font-medium">লগআউট</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Sidebar - Steps */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-20">
              <h2 className="text-sm font-bold text-emerald-900 mb-4 px-2">বায়োডাটা তৈরি</h2>
              <nav className="space-y-1">
                {steps.map((s) => (
                  <button key={s.id} onClick={() => { handleSave(); setCurrentStep(s.id); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition text-left ${currentStep === s.id ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${currentStep === s.id ? "bg-emerald-700 text-white" : s.id < currentStep ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>
                      {s.id < currentStep ? "✓" : s.id}
                    </span>
                    <span className="truncate">{s.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content */}
          <main className="flex-1">
            {saved && (
              <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3 text-center text-sm text-green-700 font-medium">
                ✅ সফলভাবে সেভ হয়েছে!
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center font-bold text-sm shadow-md">{currentStep}</span>
                <div>
                  <h2 className="text-xl font-bold text-emerald-900">{steps[currentStep - 1].label}</h2>
                  <p className="text-xs text-gray-500">ধাপ {currentStep} / {steps.length}</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Step 1 - সাধারণ তথ্য */}
                {currentStep === 1 && (
                  <>
                    <Select name="biodataType" label="বায়োডাটার ধরন" required value={form.biodataType} onChange={handleChange} options={["পাত্রের বায়োডাটা", "পাত্রীর বায়োডাটা"]} />
                    <Input name="name" label="কালাম" required value={form.name} onChange={handleChange} placeholder="আপনার পূর্ণ নাম" />
                    <p className="text-xs text-emerald-600 font-medium">অবশ্যই অগ্রজ আলেম ও আলেমাদের কারানামায় বসে নাম লিখুন। অন্যথায় আমাদের কর্তৃপক্ষ কর্তৃক নাম দেখানো হবে না।</p>
                    <Select name="height" label="উচ্চতা" required value={form.height} onChange={handleChange} options={["4'0\" (122 সেমি)", "4'3\" (130 সেমি)", "4'6\" (137 সেমি)", "4'9\" (145 সেমি)", "5'0\" (152 সেমি)", "5'3\" (160 সেমি)", "5'6\" (168 সেমি)", "5'9\" (175 সেমি)", "6'0\" (183 সেমি)"]} />
                    <Select name="weight" label="পাউন্ড" required value={form.weight} onChange={handleChange} options={["40-50", "51-60", "61-70", "71-80", "81-90", "91-100"]} />
                    <Select name="complexion" label="গায়ের রং" required value={form.complexion} onChange={handleChange} options={["ফর্সা", "উজ্জ্বল ফর্সা", "গোলাপি ফর্সা", "হালকা শ্যাওলা", "শ্যাওলা", "কালচে শ্যাওলা", "কালো"]} />
                    <Select name="bloodGroup" label="রক্তের গ্রুপ" required value={form.bloodGroup} onChange={handleChange} options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
                    <Select name="nationality" label="জাতীয়তা" required value={form.nationality} onChange={handleChange} options={["বাংলাদেশী", "ভারতীয়", "পাকিস্তানি", "মিশরী", "সৌদি আরব", "UAE", "মালয়েশিয়া", "ইন্দোনেশিয়া", "অন্যান্য"]} />
                  </>
                )}

                {/* Step 2 - ঠিকানা */}
                {currentStep === 2 && (
                  <>
                    <Input name="presentDistrict" label="বর্তমান ঠিকানা (জেলা)" required value={form.presentDistrict} onChange={handleChange} placeholder="যেমন: ঢাকা" />
                    <Input name="presentDivision" label="বর্তমান ঠিকানা (বিভাগ)" required value={form.presentDivision} onChange={handleChange} placeholder="যেমন: ঢাকা" />
                    <Input name="permanentDistrict" label="স্থায়ী ঠিকানা (জেলা)" required value={form.permanentDistrict} onChange={handleChange} placeholder="যেমন: সিলেট" />
                    <Input name="permanentDivision" label="স্থায়ী ঠিকানা (বিভাগ)" required value={form.permanentDivision} onChange={handleChange} placeholder="যেমন: সিলেট" />
                  </>
                )}

                {/* Step 3 - শিক্ষা */}
                {currentStep === 3 && (
                  <>
                    <Select name="educationMedium" label="অসাধারণ শিক্ষা মাধ্যম" required value={form.educationMedium} onChange={handleChange} options={["জেনারেল", "কওমী", "আলিয়া"]} />
                    <Input name="educationLevel" label="শিক্ষাগত যোগ্যতা" required value={form.educationLevel} onChange={handleChange} placeholder="যেমন: B.Sc, MBA, HSC" />
                    <Input name="institution" label="প্রতিষ্ঠান" required value={form.institution} onChange={handleChange} placeholder="যেমন: ঢাকা বিশ্ববিদ্যালয়" />
                  </>
                )}

                {/* Step 4 - পারিবারিক */}
                {currentStep === 4 && (
                  <>
                    <Input name="fatherName" label="বাবার নাম" required value={form.fatherName} onChange={handleChange} placeholder="বাবার পূর্ণ নাম" />
                    <Input name="fatherOccupation" label="বাবার পেশা" required value={form.fatherOccupation} onChange={handleChange} placeholder="বাবার পেশা" />
                    <Select name="fatherAlive" label="বাবা কি জীবিত?" required value={form.fatherAlive} onChange={handleChange} options={["হ্যাঁ", "না"]} />
                    <Input name="motherName" label="মায়ের নাম" required value={form.motherName} onChange={handleChange} placeholder="মায়ের পূর্ণ নাম" />
                    <Input name="motherOccupation" label="মায়ের পেশা" required value={form.motherOccupation} onChange={handleChange} placeholder="মায়ের পেশা" />
                    <Select name="motherAlive" label="মা কি জীবিত?" required value={form.motherAlive} onChange={handleChange} options={["হ্যাঁ", "না"]} />
                    <Input name="siblings" label="ভাই-বোনের সংখ্যা" required value={form.siblings} onChange={handleChange} placeholder="যেমন: 3" />
                    <Select name="familyType" label="পরিবারের ধরন" required value={form.familyType} onChange={handleChange} options={["নিউক্লিয়ার পরিবার", "যৌথ পরিবার"]} />
                    <Select name="familyStatus" label="পরিবারের অবস্থা" required value={form.familyStatus} onChange={handleChange} options={["সম্ভ্রান্ত", "সাধারণ", "গরিব"]} />
                  </>
                )}

                {/* Step 5 - ব্যক্তিগত */}
                {currentStep === 5 && (
                  <>
                    <Select name="maritalStatus" label="বৈবাহিক অবস্থা" required value={form.maritalStatus} onChange={handleChange} options={["অবিবাহিত", "বিবাহিত", "ডিভোর্সড", "বিধবা", "বিপত্নীক"]} />
                    <Input name="age" label="বয়স" required value={form.age} onChange={handleChange} placeholder="আপনার বয়স" type="number" />
                    <Select name="religion" label="ধর্ম" required value={form.religion} onChange={handleChange} options={["ইসলাম", "হিন্দু", "খ্রিস্টান", "বৌদ্ধ", "অন্যান্য"]} />
                    <Input name="madhab" label="মাযহাব" value={form.madhab} onChange={handleChange} placeholder="যেমন: হানাফী" />
                    <Select name="prayerRegularity" label="নামাজ" required value={form.prayerRegularity} onChange={handleChange} options={["পাঁচ ওয়াক্ত", "চার ওয়াক্ত", "তিন ওয়াক্ত", "দুই ওয়াক্ত", "জামাতে এক ওয়াক্ত", "প্রয়োজনে কখনো কখনো"]} />
                    <Input name="hijabOrBeard" label="দাড়ি/লম্বা চুল / হিজাব" value={form.hijabOrBeard} onChange={handleChange} placeholder="বর্ণনা করুন" />
                    <Select name="quranRecitation" label="কুরআন তিলাওয়াত" required value={form.quranRecitation} onChange={handleChange} options={["পারগুণ আছে, খুব ভালো", "পারগুণ আছে", "আংশিক পারগুণ আছে", "নেই"]} />
                    <Input name="religiousQualification" label="দ্বীনি শিক্ষাগত যোগ্যতা" value={form.religiousQualification} placeholder="যেমন: হাফেজ, মাওলানা" />
                  </>
                )}

                {/* Step 6 - পেশাগত */}
                {currentStep === 6 && (
                  <>
                    <Input name="profession" label="পেশা" required value={form.profession} onChange={handleChange} placeholder="আপনার পেশা" />
                    <Select name="monthlyIncome" label="মাসিক আয়" required value={form.monthlyIncome} onChange={handleChange} options={["10000-20000", "20000-30000", "30000-40000", "40000-50000", "50000-100000", "100000+"]} />
                    <Select name="economicStatus" label="অর্থনৈতিক অবস্থা" required value={form.economicStatus} onChange={handleChange} options={["উচ্চবিত্ত", "উচ্চ মধ্যবিত্ত", "মধ্যবিত্ত", "নিম্ন মধ্যবিত্ত", "নিম্নবিত্ত"]} />
                  </>
                )}

                {/* Step 7 - বিবাহ */}
                {currentStep === 7 && (
                  <>
                    <Input name="expectedMarriageDate" label="বিয়ের সময়সীমা" required value={form.expectedMarriageDate} onChange={handleChange} placeholder="যেমন: ৬ মাসের মধ্যে" />
                    <Input name="previousMarriageCount" label="বিবাহিত হলে বিয়ের সংখ্যা" value={form.previousMarriageCount} onChange={handleChange} placeholder="0" />
                  </>
                )}

                {/* Step 8 - প্রত্যাশিত জীবনসঙ্গী */}
                {currentStep === 8 && (
                  <>
                    <Input name="partnerAge" label="বয়স" value={form.partnerAge} onChange={handleChange} placeholder="যেমন: 22-30" />
                    <Input name="partnerHeight" label="উচ্চতা" value={form.partnerHeight} onChange={handleChange} placeholder="যেমন: 4'10\" - 5'6\"" />
                    <Select name="partnerComplexion" label="গায়ের রং" value={form.partnerComplexion} onChange={handleChange} options={["", "ফর্সা", "উজ্জ্বল ফর্সা", "গোলাপি ফর্সা", "হালকা শ্যাওলা", "শ্যাওলা", "কালচে শ্যাওলা", "কালো", "নির্দিষ্ট নেই"]} />
                    <Input name="partnerEducation" label="শিক্ষাগত যোগ্যতা" value={form.partnerEducation} onChange={handleChange} placeholder="যেমন: B.Sc / HSC" />
                    <Input name="partnerLocation" label="জেলা" value={form.partnerLocation} onChange={handleChange} placeholder="যেমন: ঢাকা" />
                    <Select name="partnerReligiousPractice" label="ধর্মীয় অবস্থা" value={form.partnerReligiousPractice} onChange={handleChange} options={["", "বিশেষ দ্বীনদার", "দ্বীনদার", "হেফাজত করে থাকে", "পড়ালেখাজ্ঞান", "দ্বীন ও দুনিয়া জ্ঞানের সমন্বয়", "ইসলাম জ্ঞান সাধারণ মানের", "ইসলাম জ্ঞান প্রাথমিক পর্যায়ের", "অন্যান্য"]} />
                    <Select name="partnerMaritalStatus" label="বৈবাহিক অবস্থা" value={form.partnerMaritalStatus} onChange={handleChange} options={["", "অবিবাহিত", "বিবাহিত", "বিপত্নীক", "ডিভোর্সড", "অবিবাহিত বা বিপত্নীক", "অবিবাহিত বা ডিভোর্সড", "বিধবা", "সুন্দর", "কোনো শর্ত নেই"]} />
                    <Input name="partnerProfession" label="পেশা" value={form.partnerProfession} onChange={handleChange} placeholder="যেমন: গৃহিণী / চাকরিজীবী" />
                  </>
                )}

                {/* Step 9 - অঙ্গীকারনামা */}
                {currentStep === 9 && (
                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      আমি নিজে অথবা আমার অভিভাবক বায়োডাটা গ্রহণ করার পর অবিলম্বে তথ্য যাচাই করে দেখবো। বিয়ে সংক্রান্ত সিদ্ধান্ত নেয়ার সময় নিজে এবং অভিভাবক একত্রে বসে সিদ্ধান্ত নিবো। বায়োডাটার তথ্য মিথ্যা প্রমাণিত হলে বায়োডাটা কর্তৃপক্ষ বিহার করবে। বায়োডাটা অনুমোদন পেয়ে গেলে আমি নিজে কিংবা আমার পরিবারের পক্ষ থেকে বিশেষ সুবিধা বা অসুবিধা অনুরোধ করবো না।
                    </p>
                    <div className="mt-4">
                      <textarea name="commitmentText" value={form.commitmentText} onChange={handleChange} rows={4} placeholder="আপনার অঙ্গীকারনামা লিখুন..." className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>
                  </div>
                )}

                {/* Step 10 - যোগাযোগ */}
                {currentStep === 10 && (
                  <>
                    <Input name="contactPhone" label="মোবাইল নম্বর" required value={form.contactPhone || user.phone} onChange={handleChange} placeholder="+880 1XXX-XXXXXX" />
                    <Input name="contactEmail" label="ইমেইল" required value={form.contactEmail || user.email} onChange={handleChange} placeholder="ইমেইল" />
                    <Input name="contactGuardian" label="অভিভাবকের নাম ও মোবাইল" required value={form.contactGuardian} onChange={handleChange} placeholder="পিতা/মাতা/ভাই - 01XXXXXXXXX" />
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                      <p className="text-sm text-emerald-700 font-medium">
                        ✅ সকল তথ্য পূরণ করুন এবং "Save & Next" চাপ দিন। আপনার বায়োডাটা পর্যালোচনার জন্য জমা দেওয়া হবে।
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} disabled={currentStep === 1} className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-not-allowed">
                  Back
                </button>
                {currentStep < 10 ? (
                  <button onClick={handleNext} className="px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all hover:shadow-xl" style={{ background: "linear-gradient(135deg, #d946ef, #a855f7)" }}>
                    Save & Next
                  </button>
                ) : (
                  <button onClick={() => { handleSave(); alert("বায়োডাটা সফলভাবে জমা দেওয়া হয়েছে! অনুমোদনের জন্য অপেক্ষা করুন।"); }} className="px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all hover:shadow-xl bg-emerald-600 hover:bg-emerald-700">
                    ✅ জমা দিন
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Input({ name, label, required, value, onChange, placeholder, type = "text" }: { name: string; label: string; required?: boolean; value: string; onChange: any; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type} name={name} required={required} value={value} onChange={onChange} placeholder={placeholder} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
    </div>
  );
}

function Select({ name, label, required, value, onChange, options }: { name: string; label: string; required?: boolean; value: string; onChange: any; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
      <select name={name} required={required} value={value} onChange={onChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
        <option value="">নির্বাচন করুন</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
