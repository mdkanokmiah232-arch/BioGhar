import { notFound } from "next/navigation";
import Link from "next/link";
import { biodatas } from "@/data/biodatas";

export function generateStaticParams() {
  return biodatas.map((b) => ({ id: b.id }));
}

function MaleIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Green circle border */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#059669" strokeWidth="4"/>
      {/* White background inside circle */}
      <circle cx="50" cy="50" r="46" fill="white"/>
      {/* Shoulders and upper body */}
      <ellipse cx="50" cy="82" rx="22" ry="16" fill="#059669"/>
      {/* Neck */}
      <rect x="44" y="60" width="12" height="12" rx="2" fill="#059669"/>
      {/* Head */}
      <ellipse cx="50" cy="46" rx="15" ry="17" fill="#059669"/>
      {/* Islamic topi/cap - flat top rounded edges */}
      <rect x="36" y="28" width="28" height="10" rx="3" fill="#059669"/>
      <rect x="34" y="32" width="32" height="5" rx="2" fill="#059669"/>
      {/* Beard - draping from chin */}
      <path d="M37 52 Q38 64 50 66 Q62 64 63 52" fill="#059669"/>
      {/* Ears */}
      <ellipse cx="35" cy="46" rx="3" ry="5" fill="#059669"/>
      <ellipse cx="65" cy="46" rx="3" ry="5" fill="#059669"/>
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Green circle border */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#059669" strokeWidth="4"/>
      {/* Black background */}
      <circle cx="50" cy="50" r="46" fill="#1a1a2e"/>
      {/* Hijab draping down */}
      <path d="M20 92 C20 72 28 60 36 54 C42 50 50 48 50 48 C50 48 58 50 64 54 C72 60 80 72 80 92 L80 96 C80 98 78 98 76 98 L24 98 C22 98 20 98 20 96 Z" fill="#059669"/>
      {/* Hijab head */}
      <ellipse cx="50" cy="36" rx="22" ry="24" fill="#059669"/>
      {/* Face opening - oval niqab style */}
      <ellipse cx="50" cy="40" rx="9" ry="12" fill="#1a1a2e"/>
      {/* Eyes */}
      <ellipse cx="44" cy="38" rx="2.5" ry="1.8" fill="white"/>
      <ellipse cx="56" cy="38" rx="2.5" ry="1.8" fill="white"/>
      <circle cx="44" cy="38" r="1.2" fill="#1a1a2e"/>
      <circle cx="56" cy="38" r="1.2" fill="#1a1a2e"/>
    </svg>
  );
}

export default async function BiodataDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const biodata = biodatas.find((b) => b.id === id);
  if (!biodata) notFound();

  const isGroom = biodata.type === "GROOM";
  const h = (cm: number) => { const f = Math.floor(cm / 30.48); const i = Math.round((cm % 30.48) / 2.54); return `${f}'${i}"`; };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Card */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-700" style={{ background: "linear-gradient(180deg, #059669 0%, #047857 50%, #065f46 100%)" }}>
              <div className="text-center py-8 px-5">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center overflow-hidden">
                  {isGroom ? <MaleIcon /> : <FemaleIcon />}
                </div>
                <h1 className="text-xl font-bold text-white mb-1">{biodata.name}</h1>
                <div className="bg-yellow-400 text-emerald-900 font-bold text-sm px-4 py-1 rounded-full inline-block mt-2">বায়োডাটা নং : {biodata.biodataCode}</div>
              </div>
              <div className="bg-white/10 mx-3 mb-3 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["বায়োডাটার ধরন", isGroom ? "পাত্রের বায়োডাটা" : "পাত্রীর বায়োডাটা"],
                      ["বৈবাহিক অবস্থা", biodata.maritalStatus],
                      ["জন্মসন", `${biodata.age} বছর`],
                      ["উচ্চতা", `${h(biodata.height)} (${biodata.height} সেমি)`],
                      ["গায়ের রং", biodata.complexion],
                      ["ওজন", `${biodata.weight} কেজি`],
                      ["রক্তের গ্রুপ", biodata.bloodGroup],
                      ["জাতীয়তা", biodata.nationality],
                    ].map(([l, v], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                        <td className="py-2.5 px-3 text-emerald-200 font-medium text-xs">{l}</td>
                        <td className="py-2.5 px-3 text-white font-semibold text-xs">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-3 pb-3 space-y-2">
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl border-2 border-white/30 text-white font-bold text-xs hover:bg-white/10 transition">⭐ শর্টলিস্ট</button>
                  <button className="flex-1 py-2.5 rounded-xl border-2 border-white/30 text-white font-bold text-xs hover:bg-white/10 transition">✖ ইগনোর</button>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs hover:bg-white/25 transition">📋 Copy Biodata Link</button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4">

            {/* ঠিকানা */}
            <Section title="ঠিকানা" items={[
              ["স্থায়ী ঠিকানা", `${biodata.permanentAddress.district}, ${biodata.permanentAddress.division}`],
              ["এলাকার নাম", biodata.permanentAddress.area],
              ["বর্তমান ঠিকানা", `${biodata.presentAddress.district}, ${biodata.presentAddress.division}`],
              ["এলাকার নাম", biodata.presentAddress.area],
              ["কোথায় বড় হয়েছেন?", biodata.grownUpIn],
            ]} />

            {/* শিক্ষাগত যোগ্যতা */}
            <Section title="শিক্ষাগত যোগ্যতা" items={[
              ["শিক্ষা মাধ্যম", biodata.educationMedium],
              ["শিক্ষাগত যোগ্যতা", biodata.educationLevel],
              ["শিক্ষাপ্রতিষ্ঠানের নাম", biodata.institution],
            ]} />

            {/* পারিবারিক তথ্য */}
            <Section title="পারিবারিক তথ্য" items={[
              ["পিতা কি জীবিত?", biodata.fatherAlive ? "জি, জীবিত" : "না, মৃত"],
              ["পিতার পেশা", biodata.fatherOccupation],
              ["মাতা কি জীবিত?", biodata.motherAlive ? "জি, জীবিত" : "না, মৃত"],
              ["মাতার পেশা", biodata.motherOccupation],
              ["ভাইয়ের সংখ্যা", `${biodata.brothers} জন`],
              ["ভাইদের তথ্য", biodata.brothersInfo],
              ["বোনের সংখ্যা", `${biodata.sisters} জন`],
              ["বোনদের তথ্য", biodata.sistersInfo],
              ["চাচা-মামাদের পেশা", biodata.uncleProfessions],
              ["পরিবারের অর্থনৈতিক অবস্থা", biodata.familyFinancialCondition],
              ["বাড়ির ধরণ", biodata.familyHousing],
              ["সম্পদ", biodata.familyLand],
              ["পরিবারের দ্বীনি পরিবেশ", biodata.familyReligiousEnvironment],
            ]} />

            {/* ব্যক্তিগত তথ্য */}
            <Section title="ব্যক্তিগত তথ্য" items={[
              ["পোশাক", biodata.personalClothing],
              ["নিকাব/পর্দা", biodata.personalNikab],
              ["নামাজের বিবরণ", biodata.personalNamazDetail],
              ["সপ্তাহে নামাজ", biodata.personalNamazWeekly],
              ["মাহরাম/নন-মাহরাম", biodata.personalMahram],
              ["কুরআন তিলাওয়াত", biodata.personalQuranRecite],
              ["ফিকহ", biodata.personalFiqh],
              ["নাটক/সিনেমা/গান", biodata.personalEntertainment],
              ["শারীরিক/মানসিক রোগ", biodata.personalHealth],
              ["দ্বীনের মেহনত", biodata.personalDawahWork],
              ["মাজার বিশ্বাস", biodata.personalMazarBelief],
              ["পড়া বই", biodata.personalBooksRead],
              ["পছন্দের আলেম", biodata.personalFavScholars],
              ["শখ/পছন্দ-অপছন্দ", biodata.personalHobbies],
            ]} />

            {/* পেশাগত তথ্য */}
            <Section title="পেশাগত তথ্য" items={[
              ["পেশা", biodata.profession],
              ["পেশার বিবরণ", biodata.professionDetail],
              ["মাসিক আয়", `${biodata.monthlyIncome.toLocaleString()} টাকা`],
              ["অর্থনৈতিক অবস্থা", biodata.economicStatus],
            ]} />

            {/* বিবাহ সম্পর্কিত */}
            <Section title="বিবাহ সম্পর্কিত তথ্য" items={[
              ["অভিভাবক রাজি?", biodata.marriageGuardianConsent],
              ["বিয়ের পর চাকরি?", biodata.marriageJobAfter],
              ["বিয়ের পর পড়াশোনা?", biodata.marriageStudyAfter],
              ["কেন বিয়ে করছেন?", biodata.marriageWhy],
            ]} />

            {/* প্রত্যাশিত জীবনসঙ্গী */}
            <Section title="প্রত্যাশিত জীবনসঙ্গী" items={[
              ["বয়স", biodata.partnerPreferences.ageRange],
              ["গায়ের রং", biodata.partnerPreferences.complexion],
              ["উচ্চতা", biodata.partnerPreferences.height],
              ["শিক্ষাগত যোগ্যতা", biodata.partnerPreferences.education],
              ["জেলা", biodata.partnerPreferences.location],
              ["বৈবাহিক অবস্থা", biodata.partnerPreferences.maritalStatus],
              ["পেশা", biodata.partnerPreferences.profession],
              ["অর্থনৈতিক অবস্থা", biodata.partnerPreferences.economicStatus],
              ["যেসব বৈশিষ্ট্য প্রত্যাশা", biodata.partnerPreferences.qualities],
            ]} />

            {/* অঙ্গীকারনামা */}
            <div className="bg-white rounded-xl border-2 border-emerald-600 overflow-hidden">
              <h2 className="text-lg font-bold text-emerald-800 text-center py-3 border-b-2 border-emerald-600">অঙ্গীকারনামা</h2>
              <div className="p-5 space-y-3 text-sm">
                <p><span className="font-medium text-gray-600">BioGhar-এ বায়োডাটা জমা দিচ্ছেন, তা আপনার অভিভাবক জানেন?</span> <span className="font-bold text-emerald-700">{biodata.commitment1}</span></p>
                <p><span className="font-medium text-gray-600">আল্লাহ&apos;র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব সত্য?</span> <span className="font-bold text-emerald-700">{biodata.commitment2}</span></p>
                <p><span className="font-medium text-gray-600">কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের দায়ভার BioGhar কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?</span> <span className="font-bold text-emerald-700">{biodata.commitment3}</span></p>
              </div>
            </div>

            {/* যোগাযোগ */}
            <div className="bg-white rounded-xl border-2 border-emerald-600 overflow-hidden">
              <h2 className="text-lg font-bold text-emerald-800 text-center py-3 border-b-2 border-emerald-600">যোগাযোগ</h2>
              <div className="p-5">
                <div className="bg-emerald-50 rounded-lg p-4 mb-4 text-center border border-emerald-200">
                  <p className="text-sm text-gray-700"><span className="font-bold text-emerald-700">সতর্কতা</span> — বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্বান্তিভাবে খোঁজ নিয়ে বায়োডাটার সমস্ত তথ্য যাচাই করবেন।</p>
                </div>
                <p className="text-center text-gray-600 text-sm mb-5">এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কনেকশন খরচ হবে।</p>
                <button className="w-full py-3 rounded-full text-white font-bold text-sm shadow-lg" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>যোগাযোগের তথ্য দেখুন</button>
                <div className="flex items-center gap-3 mt-4 bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.17.16.15.26.36.28.58l.05.95.87-.6c.27-.18.57-.28.88-.28.33 0 .65.08.95.21.58.26 1.22.41 1.87.41 5.64 0 10-3.87 10-8.7C19.05 6.13 17.64 2 12 2z"/></svg>
                  </div>
                  <div><p className="text-sm font-semibold text-gray-800">Messenger</p><p className="text-xs text-gray-500">কিভাবে যোগাযোগ তথ্য দেখবেন</p></div>
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

function Section({ title, items }: { title: string; items: [string, string][] }) {
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
