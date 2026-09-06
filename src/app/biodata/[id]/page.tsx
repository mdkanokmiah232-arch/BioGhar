import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

export default async function BiodataDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const biodata = biodatas.find((b) => b.id === id);

  if (!biodata) {
    notFound();
  }

  const isGroom = biodata.type === "GROOM";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-800">BioGhar</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/biodata" className="text-emerald-700 font-semibold">Search</Link>
            <Link href="/about" className="hover:text-emerald-700 transition">About</Link>
            <Link href="/faq" className="hover:text-emerald-700 transition">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-emerald-700 transition">Login</Link>
            <Link href="/register" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/biodata" className="hover:text-emerald-700 transition">বায়োডাটা</Link>
          <span>/</span>
          <span className="text-emerald-700 font-medium">{biodata.name}</span>
        </div>

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-60 rounded-xl overflow-hidden">
                <img
                  src={biodata.photoUrl}
                  alt={biodata.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-emerald-900">{biodata.name}</h1>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    isGroom ? "bg-blue-600" : "bg-pink-600"
                  }`}
                >
                  {isGroom ? "পাত্র" : "পাত্রী"}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                বায়োডাটা ID: <span className="font-bold text-emerald-700">#{biodata.biodataCode}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-emerald-50 rounded-lg px-3 py-2">
                  <span className="text-gray-500">বয়স</span>
                  <p className="font-semibold text-emerald-900">{biodata.age} বছর</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-3 py-2">
                  <span className="text-gray-500">উচ্চতা</span>
                  <p className="font-semibold text-emerald-900">{biodata.height} সেমি</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-3 py-2">
                  <span className="text-gray-500">পেশা</span>
                  <p className="font-semibold text-emerald-900">{biodata.profession}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-3 py-2">
                  <span className="text-gray-500">জেলা</span>
                  <p className="font-semibold text-emerald-900">{biodata.presentAddress.district}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                👤 ব্যক্তিগত তথ্য
              </h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-500 w-1/3">বয়স</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.age} বছর</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-500">উচ্চতা</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.height} সেমি ({Math.floor(biodata.height / 30.48)}&apos;{(biodata.height % 30.48 / 2.54).toFixed(0)}&quot;)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-500">ওজন</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.weight} কেজি</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-500">গায়ের রং</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.complexion}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-500">রক্তের গ্রুপ</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.bloodGroup}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-500">বৈবাহিক অবস্থা</td>
                    <td className="py-3 font-medium text-gray-800">{biodata.maritalStatus}</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Address */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                📍 ঠিকানা
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">বর্তমান ঠিকানা</h3>
                  <p className="text-sm text-gray-700">{biodata.presentAddress.district}, {biodata.presentAddress.division}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">স্থায়ী ঠিকানা</h3>
                  <p className="text-sm text-gray-700">{biodata.permanentAddress.district}, {biodata.permanentAddress.division}</p>
                </div>
              </div>
            </section>

            {/* Religious Info */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                🕋 ধর্মীয় তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">মাযহাব</span>
                  <p className="font-semibold text-gray-800">{biodata.madhab}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">নামাজ</span>
                  <p className="font-semibold text-gray-800">{biodata.prayerRegularity}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">{isGroom ? "দাড়ি" : "হিজাব"}</span>
                  <p className="font-semibold text-gray-800">{biodata.hijabOrBeard}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">কুরআন মুখস্থ</span>
                  <p className="font-semibold text-gray-800">{biodata.quranRecitation}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3 md:col-span-2">
                  <span className="text-gray-500 text-xs">ধর্মীয় শিক্ষা</span>
                  <p className="font-semibold text-gray-800">{biodata.religiousQualification}</p>
                </div>
              </div>
            </section>

            {/* Education & Profession */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                🎓 শিক্ষা ও পেশা
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">শিক্ষামাধ্যম:</span>
                  <span className="font-medium text-gray-800">{biodata.educationMedium}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">শিক্ষাগত যোগ্যতা:</span>
                  <span className="font-medium text-gray-800">{biodata.educationLevel}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">প্রতিষ্ঠান:</span>
                  <span className="font-medium text-gray-800">{biodata.institution}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">পেশা:</span>
                  <span className="font-medium text-gray-800">{biodata.profession}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">মাসিক আয়:</span>
                  <span className="font-medium text-gray-800">৳{biodata.monthlyIncome.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">অর্থনৈতিক অবস্থা:</span>
                  <span className="font-medium text-gray-800">{biodata.economicStatus}</span>
                </div>
              </div>
            </section>

            {/* Family Info */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                👨‍👩‍👧‍👦 পরিবারের তথ্য
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">বাবা:</span>
                  <span className="font-medium text-gray-800">
                    {biodata.fatherName}
                    {!biodata.fatherAlive && <span className="text-red-500 ml-2">(মৃত)</span>}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">পেশা:</span>
                  <span className="font-medium text-gray-800">{biodata.fatherOccupation}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">মা:</span>
                  <span className="font-medium text-gray-800">
                    {biodata.motherName}
                    {!biodata.motherAlive && <span className="text-red-500 ml-2">(মৃত)</span>}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">পেশা:</span>
                  <span className="font-medium text-gray-800">{biodata.motherOccupation}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">ভাই-বোন:</span>
                  <span className="font-medium text-gray-800">{biodata.siblings} জন</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">পারিবারিক ধর্মীয় পরিবেশ:</span>
                  <span className="font-medium text-gray-800">{biodata.familyReligiousEnvironment}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-32">পারিবারিক অর্থনৈতিক:</span>
                  <span className="font-medium text-gray-800">{biodata.familyFinancialCondition}</span>
                </div>
              </div>
            </section>

            {/* Partner Preferences */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                💍 জীবনসঙ্গীর পছন্দ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">বয়স পরিসীমা</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.ageRange} বছর</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">উচ্চতা</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.height} সেমি</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">গায়ের রং</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.complexion}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">শিক্ষা</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.education}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-gray-500 text-xs">অবস্থান</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.location}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg px-4 py-3 md:col-span-2">
                  <span className="text-gray-500 text-xs">ধর্মীয় অনুশীলন</span>
                  <p className="font-semibold text-gray-800">{biodata.partnerPreferences.religiousPractice}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Info - Locked */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                📞 যোগাযোগের তথ্য
              </h2>
              <div className="space-y-3">
                <div className="relative">
                  <div className="blur-sm select-none pointer-events-none">
                    <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-600">
                      <p className="font-medium">{biodata.phone}</p>
                      <p className="text-xs text-gray-400 mt-1">{biodata.email}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition shadow-lg">
                      🔒 যোগাযোগ তথ্য দেখুন
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">
                  যোগাযোগের তথ্য দেখতে লগইন করুন
                </p>
              </div>
            </section>

            {/* Guardian Info */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                👨‍👦 অভিভাবক
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-20">নাম:</span>
                  <span className="font-medium text-gray-800">{biodata.guardianName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-20">সম্পর্ক:</span>
                  <span className="font-medium text-gray-800">{biodata.guardianRelation}</span>
                </div>
              </div>
            </section>

            {/* Send Interest */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                💌 আগ্রহ প্রকাশ
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {isGroom ? "এই পাত্র" : "এই পাত্রী"}-এর প্রতি আপনার আগ্রহ প্রকাশ করুন
              </p>
              <button className="w-full bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md text-sm">
                আগ্রহ প্রকাশ করুন 💌
              </button>
            </section>

            {/* Quick Info */}
            <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h3 className="text-sm font-bold text-emerald-800 mb-3">দ্রুত তথ্য</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">বায়োডাটা ID</span>
                  <span className="font-bold text-emerald-700">#{biodata.biodataCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ধরন</span>
                  <span className={`font-bold ${isGroom ? "text-blue-600" : "text-pink-600"}`}>
                    {isGroom ? "পাত্র" : "পাত্রী"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">বয়স</span>
                  <span className="font-medium text-gray-800">{biodata.age} বছর</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">জেলা</span>
                  <span className="font-medium text-gray-800">{biodata.presentAddress.district}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-emerald-300">
          © 2026 BioGhar. All rights reserved. Made with ❤️ for the Ummah.
        </div>
      </footer>
    </div>
  );
}
