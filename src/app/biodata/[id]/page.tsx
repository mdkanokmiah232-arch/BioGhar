import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

function MaleIcon({ size = "w-28 h-28" }: { size?: string }) {
  return (
    <div className={`${size} rounded-full border-4 border-white/25 flex items-center justify-center overflow-hidden`} style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
      <svg viewBox="0 0 120 120" className="w-full h-full p-2">
        <circle cx="60" cy="38" r="22" fill="white" opacity="0.9"/>
        <ellipse cx="60" cy="28" rx="24" ry="10" fill="white" opacity="0.7"/>
        <rect x="38" y="20" width="44" height="12" rx="4" fill="white" opacity="0.7"/>
        <circle cx="52" cy="38" r="2" fill="#047857"/>
        <circle cx="68" cy="38" r="2" fill="#047857"/>
        <path d="M54 46 Q60 52 66 46" fill="none" stroke="#047857" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 65 C36 58 48 52 60 52 C72 52 84 58 84 65 L84 100 C84 105 80 108 76 108 L44 108 C40 108 36 105 36 100Z" fill="white" opacity="0.85"/>
        <path d="M52 52 L60 62 L68 52" fill="none" stroke="#059669" strokeWidth="2"/>
        <path d="M44 44 Q48 56 60 58 Q72 56 76 44" fill="white" opacity="0.5"/>
      </svg>
    </div>
  );
}

function FemaleIcon({ size = "w-28 h-28" }: { size?: string }) {
  return (
    <div className={`${size} rounded-full border-4 border-white/25 flex items-center justify-center overflow-hidden`} style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
      <svg viewBox="0 0 120 140" className="w-full h-full p-2">
        <ellipse cx="60" cy="40" rx="30" ry="32" fill="white" opacity="0.85"/>
        <ellipse cx="60" cy="42" rx="18" ry="20" fill="#D4A574" opacity="0.6"/>
        <circle cx="52" cy="40" r="2.5" fill="#047857"/>
        <circle cx="68" cy="40" r="2.5" fill="#047857"/>
        <path d="M48 36 Q52 34 56 36" fill="none" stroke="#047857" strokeWidth="1.2"/>
        <path d="M64 36 Q68 34 72 36" fill="none" stroke="#047857" strokeWidth="1.2"/>
        <path d="M54 48 Q60 54 66 48" fill="none" stroke="#047857" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 72 C32 62 44 56 60 56 C76 56 88 62 88 72 L88 130 C88 135 84 138 80 138 L40 138 C36 138 32 135 32 130Z" fill="white" opacity="0.85"/>
        <path d="M50 56 L60 66 L70 56" fill="none" stroke="#059669" strokeWidth="1.5"/>
        <path d="M30 58 Q25 80 30 120" fill="none" stroke="white" strokeWidth="3" opacity="0.4"/>
        <path d="M90 58 Q95 80 90 120" fill="none" stroke="white" strokeWidth="3" opacity="0.4"/>
      </svg>
    </div>
  );
}

function MaleSmallIcon() {
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

function FemaleSmallIcon() {
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* Main Profile Card - Emerald Green */}
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)" }}>
          <div className="text-center py-8 px-6">
            {isGroom ? <MaleIcon /> : <FemaleIcon />}
            <h1 className="text-2xl font-bold text-white mt-4 mb-2">{biodata.name}</h1>
            <div className="text-lg text-emerald-200 font-medium">
              বায়োডাটা নং : <span className="font-bold text-white">{biodata.biodataCode}</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm mx-4 mb-4 rounded-xl overflow-hidden">
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
                    <td className="py-3.5 px-4 text-emerald-100 font-medium w-2/5">{label}</td>
                    <td className="py-3.5 px-4 text-white font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3 px-4 pb-6">
            <button className="flex-1 py-3 rounded-xl border-2 border-white/30 text-white font-bold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              শর্টলিস্ট
            </button>
            <button className="flex-1 py-3 rounded-xl border-2 border-white/30 text-white font-bold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              ইগনোর
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-4">
          <Section title="🕌 ধর্মীয় তথ্য" items={[
            ["ধর্ম", biodata.religion], ["মাযহাব", biodata.madhab],
            ["নামাজ", biodata.prayerRegularity], [isGroom ? "দাড়ি/লম্বা চুল" : "হিজাব", biodata.hijabOrBeard],
            ["কুরআন তিলাওয়াত", biodata.quranRecitation], ["দ্বীনি শিক্ষা", biodata.religiousQualification],
          ]} />
          <Section title="🎓 শিক্ষা ও পেশা" items={[
            ["শিক্ষার মাধ্যম", biodata.educationMedium], ["শিক্ষাগত যোগ্যতা", biodata.educationLevel],
            ["প্রতিষ্ঠান", biodata.institution], ["পেশা", biodata.profession],
            ["মাসিক আয়", `${biodata.monthlyIncome.toLocaleString()} টাকা`], ["অর্থনৈতিক অবস্থা", biodata.economicStatus],
          ]} />
          <Section title="📍 ঠিকানা" items={[
            ["বর্তমান ঠিকানা", `${biodata.presentAddress.district}, ${biodata.presentAddress.division}`],
            ["স্থায়ী ঠিকানা", `${biodata.permanentAddress.district}, ${biodata.permanentAddress.division}`],
          ]} />

          {/* পারিবারিক */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3">👨‍👩‍👧‍👦 পারিবারিক তথ্য</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <InfoBox label="পরিবারের ধর্মীয় পরিবেশ" value={biodata.familyReligiousEnvironment} />
              <InfoBox label="পরিবারের অর্থনৈতিক অবস্থা" value={biodata.familyFinancialCondition} />
              <InfoBox label="পরিবারের সদস্য সংখ্যা" value={`${biodata.siblings} জন`} />
            </div>
          </div>

          {/* বাবা */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3">👨 বাবা</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <InfoBox label="নাম" value={biodata.fatherName} />
              <InfoBox label="পেশা" value={biodata.fatherOccupation} />
              <InfoBox label="বেঁচে আছেন" value={biodata.fatherAlive ? "হ্যাঁ" : "না"} />
            </div>
          </div>

          {/* মা */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3">👩 মা</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <InfoBox label="নাম" value={biodata.motherName} />
              <InfoBox label="পেশা" value={biodata.motherOccupation} />
              <InfoBox label="বেঁচে আছেন" value={biodata.motherAlive ? "হ্যাঁ" : "না"} />
            </div>
          </div>

          {/* ভাই-বোন */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3">👨‍👩‍👧 ভাই-বোন</h2>
            <div className="text-sm bg-emerald-50 rounded-lg px-3 py-2">
              <p className="font-semibold text-gray-800">মোট ভাই-বোন: {biodata.siblings} জন</p>
            </div>
          </div>

          {/* জীবনসঙ্গী */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3">💖 যে ধরনের জীবনসঙ্গী খুঁজছেন</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <InfoBox label="বয়স" value={biodata.partnerPreferences.ageRange} />
              <InfoBox label="উচ্চতা" value={biodata.partnerPreferences.height} />
              <InfoBox label="গায়ের রং" value={biodata.partnerPreferences.complexion} />
              <InfoBox label="শিক্ষাগত যোগ্যতা" value={biodata.partnerPreferences.education} />
              <InfoBox label="অবস্থান" value={biodata.partnerPreferences.location} />
              <InfoBox label="বৈবাহিক অবস্থা" value={biodata.maritalStatus} />
              <InfoBox label="পেশা" value={biodata.profession} />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-bold text-emerald-900 mb-4 text-center">💬 যোগাযোগ</h2>
            <div className="bg-emerald-50 rounded-lg p-4 mb-4 text-center">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-emerald-700">সতর্কতা</span> - বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্বান্তিভাবে খোঁজ নিয়ে বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
              </p>
            </div>
            <p className="text-center text-gray-600 text-sm mb-5">এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কনেকশন খরচ হবে।</p>
            <button className="w-full py-3.5 rounded-full text-white font-bold text-sm shadow-lg transition-all hover:shadow-xl" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
              যোগাযোগের তথ্য দেখুন
            </button>
            <div className="flex items-center gap-3 mt-4 bg-gray-50 rounded-xl p-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.17.16.15.26.36.28.58l.05.95.87-.6c.27-.18.57-.28.88-.28.33 0 .65.08.95.21.58.26 1.22.41 1.87.41 5.64 0 10-3.87 10-8.7C19.05 6.13 17.64 2 12 2z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Messenger</p>
                <p className="text-xs text-gray-500">কিভাবে যোগাযোগ তথ্য দেখবেন</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 pb-8">
            <Link href="/biodata" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              বায়োডাটা তালিকায় ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-base font-bold text-emerald-900 mb-3">{title}</h2>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {items.map(([label, value], i) => <InfoBox key={i} label={label} value={value} />)}
      </div>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-emerald-50 rounded-lg px-3 py-2">
      <span className="text-gray-500 block text-xs">{label}</span>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}

export { MaleSmallIcon, FemaleSmallIcon };
