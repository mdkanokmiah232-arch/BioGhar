import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

function MaleIcon() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full">
      {/* Face */}
      <circle cx="60" cy="45" r="28" fill="#F5D0A9"/>
      {/* Hair */}
      <path d="M32 38 C32 18 88 18 88 38 C88 28 32 28 32 38Z" fill="#2D2D2D"/>
      {/* Kufi/Cap */}
      <rect x="35" y="18" width="50" height="16" rx="8" fill="#059669"/>
      <rect x="38" y="30" width="44" height="5" rx="2" fill="#047857"/>
      {/* Eyes */}
      <ellipse cx="48" cy="44" rx="3" ry="3.5" fill="#2D2D2D"/>
      <ellipse cx="72" cy="44" rx="3" ry="3.5" fill="#2D2D2D"/>
      <circle cx="49" cy="43" r="1" fill="white"/>
      <circle cx="73" cy="43" r="1" fill="white"/>
      {/* Beard */}
      <path d="M40 55 C40 55 42 72 60 72 C78 72 80 55 80 55" fill="#2D2D2D" opacity="0.8"/>
      {/* Smile */}
      <path d="M50 54 Q60 62 70 54" fill="none" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Body/Shirt */}
      <path d="M30 80 C30 72 90 72 90 80 L95 140 L25 140Z" fill="white"/>
      {/* Collar */}
      <path d="M45 78 L60 92 L75 78" fill="none" stroke="#ddd" strokeWidth="1.5"/>
      {/* Tie */}
      <polygon points="56,78 64,78 62,100 58,100" fill="#059669"/>
      <polygon points="58,100 62,100 60,112" fill="#047857"/>
      {/* Arms */}
      <path d="M30 82 L18 120" stroke="white" strokeWidth="12" strokeLinecap="round"/>
      <path d="M90 82 L102 120" stroke="white" strokeWidth="12" strokeLinecap="round"/>
      {/* Hands */}
      <circle cx="18" cy="122" r="7" fill="#F5D0A9"/>
      <circle cx="102" cy="122" r="7" fill="#F5D0A9"/>
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full">
      {/* Hijab */}
      <ellipse cx="60" cy="42" rx="34" ry="32" fill="#059669"/>
      {/* Inner hijab layer */}
      <ellipse cx="60" cy="42" rx="30" ry="28" fill="#047857"/>
      {/* Face */}
      <ellipse cx="60" cy="46" rx="22" ry="24" fill="#F5D0A9"/>
      {/* Hijab drape */}
      <path d="M26 38 C26 20 94 20 94 38 L94 50 C94 50 80 42 60 42 C40 42 26 50 26 50Z" fill="#059669"/>
      {/* Hijab fold lines */}
      <path d="M32 35 Q42 28 52 32" fill="none" stroke="#047857" strokeWidth="1" opacity="0.5"/>
      <path d="M68 32 Q78 28 88 35" fill="none" stroke="#047857" strokeWidth="1" opacity="0.5"/>
      {/* Eyes */}
      <ellipse cx="50" cy="44" rx="3" ry="4" fill="#2D2D2D"/>
      <ellipse cx="70" cy="44" rx="3" ry="4" fill="#2D2D2D"/>
      <circle cx="51" cy="43" r="1.2" fill="white"/>
      <circle cx="71" cy="43" r="1.2" fill="white"/>
      {/* Eyelashes */}
      <path d="M45 40 L47 42" stroke="#2D2D2D" strokeWidth="0.8"/>
      <path d="M55 40 L53 42" stroke="#2D2D2D" strokeWidth="0.8"/>
      <path d="M65 40 L67 42" stroke="#2D2D2D" strokeWidth="0.8"/>
      <path d="M75 40 L73 42" stroke="#2D2D2D" strokeWidth="0.8"/>
      {/* Nose */}
      <path d="M58 48 Q60 52 62 48" fill="none" stroke="#D4A987" strokeWidth="1" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M52 55 Q60 62 68 55" fill="none" stroke="#E88A8A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="42" cy="52" rx="5" ry="3" fill="#FFB5B5" opacity="0.4"/>
      <ellipse cx="78" cy="52" rx="5" ry="3" fill="#FFB5B5" opacity="0.4"/>
      {/* Dress/Abaya */}
      <path d="M28 75 C28 68 92 68 92 75 L98 140 L22 140Z" fill="#059669"/>
      {/* Dress details */}
      <path d="M40 80 L60 95 L80 80" fill="none" stroke="#047857" strokeWidth="1.5"/>
      {/* Sleeves */}
      <path d="M28 80 L14 118" stroke="#059669" strokeWidth="14" strokeLinecap="round"/>
      <path d="M92 80 L106 118" stroke="#059669" strokeWidth="14" strokeLinecap="round"/>
      {/* Hands */}
      <circle cx="14" cy="120" r="6" fill="#F5D0A9"/>
      <circle cx="106" cy="120" r="6" fill="#F5D0A9"/>
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Main Profile Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)" }}>
          {/* Icon + Name + Biodata No */}
          <div className="text-center py-8 px-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/15 border-4 border-white/25 flex items-center justify-center overflow-hidden">
              {isGroom ? <MaleIcon /> : <FemaleIcon />}
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">{biodata.name}</h1>

            <div className="text-lg text-emerald-200 font-medium">
              বায়োডাটা নং : <span className="font-bold text-white">{biodata.biodataCode}</span>
            </div>
          </div>

          {/* Info Table */}
          <div className="bg-white/10 backdrop-blur-sm mx-4 mb-4 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium w-2/5">বায়োডাটার ধরন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{isGroom ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">বৈবাহিক অবস্থা</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.maritalStatus}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">জন্মসন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.age} বছর</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">উচ্চতা</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{heightToFt(biodata.height)}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">গায়ের রং</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.complexion}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">ওজন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.weight} কেজি</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">রক্তের গ্রুপ</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.bloodGroup || "জানা নেই"}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 text-emerald-200 font-medium">জাতীয়তা</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.nationality}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
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

        {/* Detailed Sections */}
        <div className="mt-6 space-y-4">
          {/* ধর্মীয় তথ্য */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">🕌 ধর্মীয় তথ্য</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">ধর্ম</span><p className="font-semibold text-gray-800">{biodata.religion}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">মাযহাব</span><p className="font-semibold text-gray-800">{biodata.madhab}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">নামাজ</span><p className="font-semibold text-gray-800">{biodata.prayerRegularity}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">{isGroom ? "দাড়ি/লম্বা চুল" : "হিজাব"}</span><p className="font-semibold text-gray-800">{biodata.hijabOrBeard}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">কুরআন তিলাওয়াত</span><p className="font-semibold text-gray-800">{biodata.quranRecitation}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">দ্বীনি শিক্ষা</span><p className="font-semibold text-gray-800">{biodata.religiousQualification}</p></div>
            </div>
          </div>

          {/* শিক্ষা ও পেশা */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">🎓 শিক্ষা ও পেশা</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">শিক্ষার মাধ্যম</span><p className="font-semibold text-gray-800">{biodata.educationMedium}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">শিক্ষাগত যোগ্যতা</span><p className="font-semibold text-gray-800">{biodata.educationLevel}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">প্রতিষ্ঠান</span><p className="font-semibold text-gray-800">{biodata.institution}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">পেশা</span><p className="font-semibold text-gray-800">{biodata.profession}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">মাসিক আয়</span><p className="font-semibold text-gray-800">{biodata.monthlyIncome.toLocaleString()} টাকা</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">অর্থনৈতিক অবস্থা</span><p className="font-semibold text-gray-800">{biodata.economicStatus}</p></div>
            </div>
          </div>

          {/* ঠিকানা */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">📍 ঠিকানা</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">বর্তমান ঠিকানা</span><p className="font-semibold text-gray-800">{biodata.presentAddress.district}, {biodata.presentAddress.division}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">স্থায়ী ঠিকানা</span><p className="font-semibold text-gray-800">{biodata.permanentAddress.district}, {biodata.permanentAddress.division}</p></div>
            </div>
          </div>

          {/* পারিবারিক তথ্য */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">👨‍👩‍👧‍👦 পারিবারিক তথ্য</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">পরিবারের ধর্মীয় পরিবেশ</span><p className="font-semibold text-gray-800">{biodata.familyReligiousEnvironment}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">পরিবারের অর্থনৈতিক অবস্থা</span><p className="font-semibold text-gray-800">{biodata.familyFinancialCondition}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">বাবার নাম</span><p className="font-semibold text-gray-800">{biodata.fatherName}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">বাবার পেশা</span><p className="font-semibold text-gray-800">{biodata.fatherOccupation}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">মায়ের নাম</span><p className="font-semibold text-gray-800">{biodata.motherName}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">মায়ের পেশা</span><p className="font-semibold text-gray-800">{biodata.motherOccupation}</p></div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2"><span className="text-gray-500 block">ভাই-বোন</span><p className="font-semibold text-gray-800">{biodata.siblings} জন</p></div>
            </div>
          </div>

          {/* অন্যান্য */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">ℹ️ অন্যান্য তথ্য</h2>
            <div className="text-sm text-gray-600 bg-emerald-50 rounded-lg px-3 py-2">
              <p>বিস্তারিত তথ্য জানতে যোগাযোগ করুন।</p>
            </div>
          </div>

          {/* Back */}
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
