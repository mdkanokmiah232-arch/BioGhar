import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

function MaleIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-white/80">
      <circle cx="50" cy="32" r="18" fill="currentColor"/>
      <path d="M50 52 C30 52 18 65 18 80 L18 88 L38 88 L38 78 C38 72 44 68 50 68 C56 68 62 72 62 78 L62 88 L82 88 L82 80 C82 65 70 52 50 52Z" fill="currentColor"/>
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 100 120" className="w-full h-full text-white/80">
      <circle cx="50" cy="28" r="16" fill="currentColor"/>
      <ellipse cx="50" cy="20" rx="20" ry="6" fill="currentColor" opacity="0.5"/>
      <path d="M30 48 C30 48 25 60 25 85 C25 100 35 110 50 110 C65 110 75 100 75 85 C75 60 70 48 70 48Z" fill="currentColor"/>
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
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%)" }}>
          {/* Icon + Name + Biodata No */}
          <div className="text-center py-8 px-6">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/15 border-4 border-white/25 flex items-center justify-center overflow-hidden">
              {isGroom ? <MaleIcon /> : <FemaleIcon />}
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">{biodata.name}</h1>

            <div className="text-lg text-purple-200 font-medium">
              বায়োডাটা নং : <span className="font-bold text-white">{biodata.biodataCode}</span>
            </div>
          </div>

          {/* Info Table */}
          <div className="bg-white/10 backdrop-blur-sm mx-4 mb-4 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium w-2/5">বায়োডাটার ধরন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{isGroom ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">বৈবাহিক অবস্থা</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.maritalStatus}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">জন্মসন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.age} বছর</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">উচ্চতা</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{heightToFt(biodata.height)}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">গায়ের রং</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.complexion}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">ওজন</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.weight} কেজি</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 px-4 text-purple-200 font-medium">রক্তের গ্রুপ</td>
                  <td className="py-3.5 px-4 text-white font-semibold">{biodata.bloodGroup || "জানা নেই"}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 text-purple-200 font-medium">জাতীয়তা</td>
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
