import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

function MaleIcon() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <circle cx="60" cy="38" r="22" fill="#065f46"/>
      <ellipse cx="60" cy="28" rx="24" ry="10" fill="#047857"/>
      <rect x="38" y="20" width="44" height="12" rx="4" fill="#047857"/>
      <circle cx="52" cy="38" r="2" fill="#034d38"/>
      <circle cx="68" cy="38" r="2" fill="#034d38"/>
      <path d="M54 46 Q60 52 66 46" fill="none" stroke="#034d38" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M36 65 C36 58 48 52 60 52 C72 52 84 58 84 65 L84 100 C84 105 80 108 76 108 L44 108 C40 108 36 105 36 100Z" fill="#065f46"/>
      <path d="M52 52 L60 62 L68 52" fill="none" stroke="#10b981" strokeWidth="2"/>
      <path d="M36 65 L24 80 L28 82 L38 70" fill="#065f46"/>
      <path d="M84 65 L96 80 L92 82 L82 70" fill="#065f46"/>
      <path d="M44 44 Q48 56 60 58 Q72 56 76 44" fill="#047857" opacity="0.6"/>
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full">
      <ellipse cx="60" cy="40" rx="30" ry="32" fill="#059669"/>
      <ellipse cx="60" cy="42" rx="18" ry="20" fill="#D4A574"/>
      <circle cx="52" cy="40" r="2.5" fill="#034d38"/>
      <circle cx="68" cy="40" r="2.5" fill="#034d38"/>
      <path d="M48 36 Q52 34 56 36" fill="none" stroke="#034d38" strokeWidth="1.2"/>
      <path d="M64 36 Q68 34 72 36" fill="none" stroke="#034d38" strokeWidth="1.2"/>
      <path d="M54 48 Q60 54 66 48" fill="none" stroke="#034d38" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 72 C32 62 44 56 60 56 C76 56 88 62 88 72 L88 130 C88 135 84 138 80 138 L40 138 C36 138 32 135 32 130Z" fill="#059669"/>
      <path d="M50 56 L60 66 L70 56" fill="none" stroke="#10b981" strokeWidth="1.5"/>
      <path d="M32 72 L20 90 L24 92 L34 78" fill="#059669"/>
      <path d="M88 72 L100 90 L96 92 L86 78" fill="#059669"/>
      <circle cx="22" cy="92" r="5" fill="#D4A574"/>
      <circle cx="98" cy="92" r="5" fill="#D4A574"/>
      <path d="M30 58 Q25 80 30 120" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.6"/>
      <path d="M90 58 Q95 80 90 120" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.6"/>
    </svg>
  );
}

export default async function BiodataDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const biodata = biodatas.find((b) => b.id === id);

  if (!biodata) {
    notFound();
  }

  const isGroom = biodata.type === "GROOM";
  const heightToFt = (cm: number) => {
    const feet = Math.floor(cm / 30.48);
    const inches = Math.round((cm % 30.48) / 2.54);
    return `${feet}'${inches}"`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Sidebar Card */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-700" style={{ background: "linear-gradient(180deg, #059669 0%, #047857 50%, #065f46 100%)" }}>
              <div className="text-center py-8 px-5">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center overflow-hidden">
                  {isGroom ? <MaleIcon /> : <FemaleIcon />}
                </div>
                <h1 className="text-xl font-bold text-white mb-1">{biodata.name}</h1>
                <div className="bg-yellow-400 text-emerald-900 font-bold text-sm px-4 py-1 rounded-full inline-block mt-2">
                  বায়োডাটা নং : {biodata.biodataCode}
                </div>
              </div>

              {/* Info Table */}
              <div className="bg-white/10 mx-3 mb-3 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["বায়োডাটার ধরন", isGroom ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"],
                      ["বৈবাহিক অবস্থা", biodata.maritalStatus],
                      ["জন্মসন", `${biodata.age} বছর`],
                      ["উচ্চতা", `${heightToFt(biodata.height)} (${biodata.height} সেমি)`],
                      ["গায়ের রং", biodata.complexion],
                      ["ওজন", `${biodata.weight} কেজি`],
                      ["রক্তের গ্রুপ", biodata.bloodGroup || "জানা নেই"],
                      ["জাতীয়তা", biodata.nationality],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                        <td className="py-2.5 px-3 text-emerald-200 font-medium text-xs">{label}</td>
                        <td className="py-2.5 px-3 text-white font-semibold text-xs">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Buttons */}
              <div className="px-3 pb-3 space-y-2">
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl border-2 border-white/30 text-white font-bold text-xs hover:bg-white/10 transition flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    শর্টলিস্ট
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl border-2 border-white/30 text-white font-bold text-xs hover:bg-white/10 transition flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                    ইগনোর
                  </button>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs hover:bg-white/25 transition flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  Copy Biodata Link
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4">

            {/* ঠিকানা */}
            <CardSection title="ঠিকানা" items={[
              ["স্থায়ী ঠিকানা", `${biodata.permanentAddress.district}, ${biodata.permanentAddress.division}`],
              ["বর্তমান ঠিকানা", `${biodata.presentAddress.district}, ${biodata.presentAddress.division}`],
            ]} />

            {/* শিক্ষাগত যোগ্যতা */}
            <CardSection title="শিক্ষাগত যোগ্যতা" items={[
              ["অসাধারণ শিক্ষা মাধ্যম", biodata.educationMedium],
              ["শিক্ষাগত যোগ্যতা", biodata.educationLevel],
              ["প্রতিষ্ঠান", biodata.institution],
            ]} />

            {/* পারিবারিক তথ্য */}
            <CardSection title="পারিবারিক তথ্য" items={[
              ["আপনার বাবা কি জীবিত?", biodata.fatherAlive ? "হ্যাঁ, জীবিত" : "না, মৃত"],
              ["বাবার পেশা বিস্তারিত", biodata.fatherOccupation],
              ["আপনার মা কি জীবিত?", biodata.motherAlive ? "হ্যাঁ, জীবিত" : "না, মৃত"],
              ["মায়ের পেশা বিস্তারিত", biodata.motherOccupation],
              ["ভাইয়ের সংখ্যা", `${biodata.siblings} জন`],
              ["পরিবারের ধর্মীয় পরিবেশ", biodata.familyReligiousEnvironment],
              ["পরিবারের অর্থনৈতিক অবস্থা", biodata.familyFinancialCondition],
            ]} />

            {/* ব্যক্তিগত তথ্য */}
            <CardSection title="ব্যক্তিগত তথ্য" items={[
              ["ধর্ম", biodata.religion],
              ["মাযহাব", biodata.madhab],
              ["নামাজ", biodata.prayerRegularity],
              [isGroom ? "দাড়ি/লম্বা চুল" : "হিজাব", biodata.hijabOrBeard],
              ["কুরআন তিলাওয়াত", biodata.quranRecitation],
              ["দ্বীনি শিক্ষাগত যোগ্যতা", biodata.religiousQualification],
            ]} />

            {/* পেশাগত তথ্য */}
            <CardSection title="পেশাগত তথ্য" items={[
              ["পেশা", biodata.profession],
              ["পেশার বিস্তারিত বিবরণ", biodata.economicStatus],
              ["মাসিক আয়", `${biodata.monthlyIncome.toLocaleString()} টাকা`],
            ]} />

            {/* বিবাহ সম্পর্কিত তথ্য */}
            <CardSection title="বিবাহ সম্পর্কিত তথ্য" items={[
              ["বৈবাহিক অবস্থা", biodata.maritalStatus],
            ]} />

            {/* প্রত্যাশিত জীবনসঙ্গী */}
            <CardSection title="প্রত্যাশিত জীবনসঙ্গী" items={[
              ["বয়স", biodata.partnerPreferences.ageRange],
              ["গায়ের রং", biodata.partnerPreferences.complexion],
              ["উচ্চতা", biodata.partnerPreferences.height],
              ["শিক্ষাগত যোগ্যতা", biodata.partnerPreferences.education],
              ["জেলা", biodata.partnerPreferences.location],
              ["ধর্মীয় অবস্থা", biodata.partnerPreferences.religiousPractice],
            ]} />

            {/* যোগাযোগ */}
            <div className="bg-white rounded-xl border-2 border-emerald-600 p-6">
              <h2 className="text-lg font-bold text-emerald-800 text-center mb-4">যোগাযোগ</h2>
              <div className="bg-emerald-50 rounded-lg p-4 mb-4 text-center border border-emerald-200">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-emerald-700">সতর্কতা</span> — বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্বান্তিভাবে খোঁজ নিয়ে বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
                </p>
              </div>
              <p className="text-center text-gray-600 text-sm mb-5">
                এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কনেকশন খরচ হবে।
              </p>
              <button className="w-full py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all hover:shadow-xl" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
                যোগাযোগের তথ্য দেখুন
              </button>
              <div className="flex items-center gap-3 mt-4 bg-gray-50 rounded-xl p-3 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.17.16.15.26.36.28.58l.05.95.87-.6c.27-.18.57-.28.88-.28.33 0 .65.08.95.21.58.26 1.22.41 1.87.41 5.64 0 10-3.87 10-8.7C19.05 6.13 17.64 2 12 2z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Messenger</p>
                  <p className="text-xs text-gray-500">কিভাবে যোগাযোগ তথ্য দেখবেন</p>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="text-center pt-2 pb-8">
              <Link href="/biodata" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                বায়োডাটা তালিকায় ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardSection({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="bg-white rounded-xl border-2 border-emerald-600 overflow-hidden">
      <h2 className="text-lg font-bold text-emerald-800 text-center py-3 border-b-2 border-emerald-600">{title}</h2>
      <table className="w-full text-sm">
        <tbody>
          {items.map(([label, value], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-emerald-50/50" : ""}>
              <td className="py-3 px-4 text-gray-600 font-medium w-2/5 border-r border-gray-200">{label}</td>
              <td className="py-3 px-4 text-gray-800 font-semibold">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
