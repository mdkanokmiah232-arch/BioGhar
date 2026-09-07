export interface Biodata {
  id: string;
  biodataCode: string;
  type: 'GROOM' | 'BRIDE';
  name: string;
  age: number;
  height: number;
  weight: number;
  complexion: string;
  maritalStatus: string;
  bloodGroup: string;
  nationality: string;
  presentAddress: { district: string; division: string; area: string };
  permanentAddress: { district: string; division: string; area: string };
  grownUpIn: string;
  religion: string;
  madhab: string;
  prayerRegularity: string;
  hijabOrBeard: string;
  quranRecitation: string;
  religiousQualification: string;
  educationMedium: string;
  educationLevel: string;
  institution: string;
  profession: string;
  monthlyIncome: number;
  economicStatus: string;
  fatherName: string;
  fatherOccupation: string;
  fatherAlive: boolean;
  motherName: string;
  motherOccupation: string;
  motherAlive: boolean;
  brothers: number;
  brothersInfo: string;
  sisters: number;
  sistersInfo: string;
  uncleProfessions: string;
  familyReligiousEnvironment: string;
  familyFinancialCondition: string;
  familyHousing: string;
  familyLand: string;
  personalClothing: string;
  personalNikab: string;
  personalNamazDetail: string;
  personalNamazWeekly: string;
  personalMahram: string;
  personalQuranRecite: string;
  personalFiqh: string;
  personalEntertainment: string;
  personalHealth: string;
  personalDawahWork: string;
  personalMazarBelief: string;
  personalBooksRead: string;
  personalFavScholars: string;
  personalHobbies: string;
  professionDetail: string;
  marriageGuardianConsent: string;
  marriageJobAfter: string;
  marriageStudyAfter: string;
  marriageWhy: string;
  partnerPreferences: {
    ageRange: string;
    height: string;
    complexion: string;
    education: string;
    location: string;
    maritalStatus: string;
    profession: string;
    economicStatus: string;
    qualities: string;
  };
  commitment1: string;
  commitment2: string;
  commitment3: string;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  phone: string;
  email: string;
  photoUrl: string;
  photoVisibility: string;
  bio: string;
}

export const biodatas: Biodata[] = [
  {
    id: "33836",
    biodataCode: "ODF-33836",
    type: "BRIDE",
    name: "ফাতিমা আক্তার",
    age: 23,
    height: 157,
    weight: 50,
    complexion: "উজ্জ্বল শ্যামলা",
    maritalStatus: "অবিবাহিত",
    bloodGroup: "O+",
    nationality: "বাংলাদেশী",
    presentAddress: { district: "ঢাকা", division: "ঢাকা", area: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়" },
    permanentAddress: { district: "সুনামগঞ্জ", division: "সিলেট", area: "বিছরাকান্দা" },
    grownUpIn: "গ্রামে",
    religion: "ইসলাম",
    madhab: "হানাফি",
    prayerRegularity: "নিয়মিত",
    hijabOrBeard: "কালো বোরকা, কালো হিজাব, কালো নিকাব, হাত মোজা ও পা মোজা",
    quranRecitation: "কুরআনের ৩০ তম পারা হিফজ করেছি। আমলীয়তের সূরা মূলক করেছি, ওয়াকিয়া চলছে। হিফজ চালিয়ে যাওয়ার নিয়ত আছে। ৪০ হাদিস মুখস্থ চলছে। আসমাউল হুসনা চলছে। আলহামদুলিল্লাহ",
    religiousQualification: "দ্বীনের ফরজ জ্ঞান আছে",
    educationMedium: "জেনারেল",
    educationLevel: "স্নাতক (সম্মান) - চতুর্থ বর্ষ",
    institution: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    profession: "পেশা নেই",
    monthlyIncome: 0,
    economicStatus: "নিম্ন মধ্যবিত্ত",
    fatherName: "মোঃ আব্দুল করিম",
    fatherOccupation: "কৃষি",
    fatherAlive: true,
    motherName: "বেগম রোকেয়া",
    motherOccupation: "গৃহিণী",
    motherAlive: true,
    brothers: 2,
    brothersInfo: "বড় ভাই জাহাঙ্গীরনগর বিশ্ববিদ্যালয় থেকে স্নাতকোত্তর সম্পন্ন করেছে। বর্তমানে জব সিকার। ছোটভাই জাতীয় বিশ্ববিদ্যালয়ে অনার্স প্রথম বর্ষে অধ্যয়নরত।",
    sisters: 6,
    sistersInfo: "বড় আপু: বিবাহিত। বড় দুলাভাই: ব্যবসায়ী। ২য় বোন: বিবাহিত। ২য় দুলাভাই: কৃষি ও ব্যবসা। ৩য় বোন: বিবাহিত। ৩য় দুলাভাই: কোম্পানিতে চাকরি করে ও কৃষিকাজ। ৪র্থ বোন: বিবাহিত। ৪র্থ দুলাভাই: বেসরকারি। ৫ম: পাত্রী নিজে। ৬ষ্ঠ বোন: মাদ্রাসায় পড় মিজান শ্রেণী।",
    uncleProfessions: "২জন চাচা একজন মারা গিয়েছেন। আরেকজন কৃষক। ২জন মামা তারা কৃষক।",
    familyReligiousEnvironment: "নামাজ কুরআন পড়া হয়। পরিবারের সদস্যদের পর্দাটা কঠোরভাবে মানা হয়না। তবে শালীন। আমার পর্দা করার জন্য অনেক ছাড় দেয়। মাহরাম, নন মাহরাম কঠোরভাবে মানা হয় না। তবে বুঝিয়ে বললে শোনে।",
    familyFinancialCondition: "নিম্ন মধ্যবিত্ত",
    familyHousing: "হাফবিল্ডিং, উপরে টিনশেট, ৪২ হাত লম্বা",
    familyLand: "নিজস্ব ৪৮ কাটা কৃষি জমি আছে। নগদ কিছু টাকা আছে।",
    personalClothing: "কালো বোরকা, কালো হিজাব, কালো নিকাব, হাত মোজা ও পা মোজা",
    personalNikab: "৪ বছর ধরে আলহামদুলিল্লাহ",
    personalNamazDetail: "অষ্টম শ্রেণীর পড় থেকে পড়া হয় আলহামদুলিল্লাহ। তবে নিয়মিত ইন্টার থেকে পড়া হচ্ছে",
    personalNamazWeekly: "ফজরটা মাঝে মাঝে হয় রুটিন মেনে না ঘুমালে, রাতে পড়াশোনা করলে। কিন্তু আমি চেষ্টা করি তাড়াতাড়ি ঘুমিয়ে পড়ি ১০টার ভিতরেই",
    personalMahram: "জি আলহামদুলিল্লাহ।",
    personalQuranRecite: "আলহামদুলিল্লাহ কুরআনের ৩০ তম পারাটা হিফজ করেছি। আমলীয়তের সূরা মূলক করেছি, ওয়াকিয়া চলছে। হিফজ চালিয়ে যাওয়ার নিয়ত আছে। ৪০ হাদিস মুখস্থ চলছে। আসমাউল হুসনা চলছে। আলহামদুলিল্লাহ",
    personalFiqh: "হানাফি",
    personalEntertainment: "দেখা হয় না আলহামদুলিল্লাহ",
    personalHealth: "নাহ আলহামদুলিল্লাহ",
    personalDawahWork: "জি হলে কুরআন শিখানোর মজলিসে মেহনত করছি, সাপ্তাহিক তালিমে যাওয়া হয়",
    personalMazarBelief: "মাজার জিয়ারতে কোন কিছু চাওয়া শিরক তবে গিয়ে নামাজ পড়ে তাদের জন্য দোয়া করা জায়েজ। কবরবাসীর কাছে কিছু চাওয়া শিরক।",
    personalBooksRead: "নারীর ফরজ ঈলম, দ্বীনে ফেরার পর হারিয়ে যেও না, আত্মার পরিচর্যা",
    personalFavScholars: "শায়খ আহমাদুল্লাহ, আবু ত্বহা আদনান, জাকির নায়েক, মাওলানা তাকী উসমান",
    personalHobbies: "পছন্দ: আমার নতুন নতুন বিষয় জানতে ভালো লাগে সেটা দ্বীনের বিষয় আবার দুনিয়ার প্রাসঙ্গিক কোন বিষয়। আমার কোমলতা ভালো লাগে, মানুষের সাথে কোমল হতে চেষ্টা করি, আব্বা আম্মার সাথে সময় দিতে পছন্দ করি, বাচ্চাদের নতুন কোন কিছু শিখাতে পছন্দ করি। দান করতে পছন্দ করি। আল্লাহর সন্তুষ্টিতে দান করার পর মানুষের মুখের হাসিতে তৃপ্তি খুঁজে পাই। অপছন্দ: আমার ভুল কে সবার সামনে বলাকে অপছন্দ করি। কিছু সময় একা থাকতে পছন্দ করি তাতে নিজের নফসের বিষয়ে চিন্তা করা যায়। স্বপ্ন: যেহেতু আমি জেনারেল থেকে পড়ছি। আমার দ্বীনের জ্ঞান সামান্য। ভবিষ্যতে দ্বীনি প্রতিষ্ঠানের সহুবতে থেকে দ্বীন শিখা ও শিখানোর ইচ্ছে। দ্বীনের জন্য কিছু করা। কুরআন শিখানো ইত্যাদি",
    professionDetail: "এখন পড়াশোনা করছি। মাঝে মাঝে টিউশনি করানোর চেষ্টা করি",
    marriageGuardianConsent: "জি। পাত্র খোঁজা হচ্ছে",
    marriageJobAfter: "এটা পরিস্থিতি বিবেচনা করে শরীয়াহ মেনে, সবার হক মেনে, যদি নারীর জন্য উপযুক্ত কোন চাকরি করা সম্ভব হয় তাহলে করব। পাত্রের আর্থিক অবস্থা সচ্ছল হলে আমার ইচ্ছা নেই। যদি চাকরি করি তাহলে সেটা আল্লাহর দ্বীনের জন্য কিছু করার পিছে ব্যয় করা পাশাপাশি আমার বাবা মায়ের জন্য খরচ করা",
    marriageStudyAfter: "এটাও পরিস্থিতির উপর নির্ভর করবে",
    marriageWhy: "বিয়ে একটি বন্ধন যেটা আল্লাহর সন্তুষ্টির উদ্দেশ্যে একটি ছেলে একটি মেয়ে নতুন জীবনে প্রবেশ করা। সেই জীবনের প্রতিটি ধাপে ধাপে সুন্নাত মোতাবেক আল্লাহর বিধান বাস্তবায়ন করা। বিয়ে মানে ইনসাফ প্রতিষ্ঠা করা, ধৈর্য ধরা, ছেড়ে দেওয়ার মানসিকতা প্রতিষ্ঠা করা। তবে এই সব গুলো স্বামী স্ত্রী দুজনেরি থাকতে হয়। আমার বিয়ে করার কারণ এটা সুন্নাত। দ্বীন শিখতে ও শিখাতে বিয়ে আমার জন্য শক্তিশালী ব্যবস্থা হবে ইনশাআল্লাহ। তাছাড়া বর্তমান সময়ের অনেক পাপ থেকে বাঁচতে বিয়ে করতে চাই।",
    partnerPreferences: {
      ageRange: "২৬-৩৪",
      height: "৫'/৬,৭,৮",
      complexion: "উজ্জ্বল শ্যামলা",
      education: "দ্বীনের অন্তত ফরজ জ্ঞান থাকা আবশ্যক তবে বেশি হলে সমস্যা নাই। তার থেকে দ্বীনের জ্ঞান শিখার আগ্রহ আছে ইনশাআল্লাহ। জীবনসঙ্গী জেনারেল থেকে কোন বিশ্ববিদ্যালয়ে পড়াশোনা করেছেন",
      location: "ময়মনসিংহ, নেত্রকোনা, মোহনগঞ্জ, সুনামগঞ্জ। তবে ময়মনসিংহ ও নেত্রকোনাকে প্রাধান্য দেওয়া হবে",
      maritalStatus: "অবিবাহিত",
      profession: "সরকারি চাকুরিজীবী, শিক্ষাগত যোগ্যতা সাথে সামঞ্জস্য হলে ব্যবসায়ী হলেও চলবে। তবে ব্যাংকার না, এনজিও না, ইনকাম হালাল হতে হবে",
      economicStatus: "মধ্যবিত্ত বা উচ্চ মধ্যবিত্ত",
      qualities: "দ্বীনের জ্ঞান থাকবে, দ্বীন শিখার ব্যাপারে আগ্রহী, পাঁচ ওয়াক্ত সালাত সাওম, নফলে আগ্রহী, দান করার অভ্যাস, সুন্নাতে পাবন্দি, দাঁড়ি থাকতে হবে, আত্মীয়দের সাথে সুসম্পর্ক, বদমেজাজি না, কোমল মনের, নজরের হেফাজত করেন, মাহরাম, নন মাহরাম মেনে চলেন। আমাকে হাত খরচ দেওয়ার ক্ষেত্রে যেন উদার হন। সব মিলে জীবনসঙ্গী যেন আমাকে বুঝে, আমার ঘরের কাজে যেন সাহায্যের হাত বাড়িয়ে দেন। কিন্তু আমি খুব বেশি দুনিয়ামুখি নয়, উচ্চ আকাঙ্ক্ষিও নয়",
    },
    commitment1: "হ্যাঁ",
    commitment2: "হ্যাঁ",
    commitment3: "হ্যাঁ",
    guardianName: "মোঃ আব্দুল করিম",
    guardianRelation: "বাবা",
    guardianPhone: "+8801354316246",
    phone: "+8801354316246",
    email: "fatima@bioghar.com",
    photoUrl: "",
    photoVisibility: "hidden",
    bio: "ইসলামিক মূল্যবোধে পরিপূর্ণ একজন মেয়ে যিনি দ্বীনের জ্ঞান অর্জনে আগ্রহী।",
  },
  {
    id: "35005",
    biodataCode: "ODF-35005",
    type: "BRIDE",
    name: "নুসরাত জাহান",
    age: 21,
    height: 165,
    weight: 48,
    complexion: "উজ্জ্বল ফর্সা",
    maritalStatus: "অবিবাহিত",
    bloodGroup: "A+",
    nationality: "বাংলাদেশী",
    presentAddress: { district: "ঢাকা", division: "ঢাকা", area: "আগারগাঁও, তালতলা" },
    permanentAddress: { district: "শেরপুর", division: "ময়মনসিংহ", area: "ফটিয়ামারি" },
    grownUpIn: "ঢাকা",
    religion: "ইসলাম",
    madhab: "হানাফি",
    prayerRegularity: "নিয়মিত",
    hijabOrBeard: "বোরকা, নিকাবসহ হিজাব, হাত-পা মোজা",
    quranRecitation: "জ্বি আলহামদুলিল্লাহ।",
    religiousQualification: "ইসলামিক অনলাইন মাদরাসায় (IOM) এ আলিম কোর্স চলমান। ২য় সেমিস্টার শেষ করেছি, আলহামদুলিল্লাহ। ৩য় সেমিস্টার চলমান। Batch -2514",
    educationMedium: "জেনারেল",
    educationLevel: "স্নাতক (সম্মান) - ১ম বর্ষে ফাইনাল এক্সাম দিয়েছি",
    institution: "লালমাটিয়া সরকারি মহিলা কলেজ, ঢাকা",
    profession: "শিক্ষার্থী",
    monthlyIncome: 0,
    economicStatus: "মধ্যবিত্ত",
    fatherName: "মৃত",
    fatherOccupation: "কাপরের ব্যবসা ছিল। কিন্তু একটা অনেক বড় ক্ষতি হওয়ার ফলে ব্যবসা বাদ দিয়ে সিএনজি ড্রাইভার কাজে কর্মরত ছিলো।",
    fatherAlive: false,
    motherName: "গৃহিনী",
    motherOccupation: "গৃহিনী।",
    motherAlive: true,
    brothers: 1,
    brothersInfo: "বড় ভাই বিবাহিত, একটা ছেলে আছে। গ্রামে শিক্ষকতা করেন।",
    sisters: 1,
    sistersInfo: "বড় বোন: বিবাহিত। পড়াশোনা: honors complete। স্বামী: ইতালি প্রবাসী। আমার বোন IELTS করতাছে। ২-৩ বছরের মধ্যে স্টুডেন্ট ভিসাই ইতালি চলে যাওয়ার চেষ্টা করতেছেন। আপাতত UNDP তে একটা জব করতেছে। আমার বড় বোনের ইনকামেই আমাদের খরচ চলে।",
    uncleProfessions: "চাচা নেই। জেঠা ছিলো এখন মৃত। মামা ২ টা। বড় মামা-সৌদি প্রবাসী ছিল। এখন অবসর। ছোট মামা-সৌদি প্রবাসী ছিল। এখন মৃত।",
    familyReligiousEnvironment: "পরিবারে দ্বীনী পরিবেশ মোটামুটি পরিপূর্ণ। দ্বীনের প্রতি সহনশীল। আমাকে পর্দা করতে এবং মাহরাম-ননমাহরাম মেইনটেইন করতে পুরোপুরি সাহায্য করে।",
    familyFinancialCondition: "মধ্যবিত্ত",
    familyHousing: "৪ তলা ফ্ল্যাটে ভাড়া থাকি।",
    familyLand: "মধ্যবিত্ত, আলহামদুলিল্লাহ। গ্রামের বাড়িতে তিন রুমের পাকা করা বাড়ি আছে। আর কিছু জমি আছে।",
    personalClothing: "বোরকা, নিকাবসহ হিজাব, হাত-পা মোজা পড়ি। আলহামদুলিল্লাহ।",
    personalNikab: "আট বছর যাবৎ আলহামদুলিল্লাহ।",
    personalNamazDetail: "জ্বি আলহামদুলিল্লাহ, ২০২১ সাল থেকেই পাঁচ ওয়াক্ত নামাজ পড়ি।",
    personalNamazWeekly: "২ ওয়াক্ত। মাঝে মাঝে হঠাৎ ঘুমের জন্য ফজর কাযা হয়ে যায়। আল্লাহ মাফ করুক।",
    personalMahram: "জ্বি আলহামদুলিল্লাহ।",
    personalQuranRecite: "জ্বি আলহামদুলিল্লাহ।",
    personalFiqh: "হানাফি",
    personalEntertainment: "এগুলো থেকে যথাসম্ভব বিরত থাকার চেষ্টা করি, আলহামদুলিল্লাহ।",
    personalHealth: "আলহামদুলিল্লাহ নাই।",
    personalDawahWork: "না। তবে ইচ্ছা আছে, আল্লাহর সন্তুষ্টি ও মুসলিম উম্মাহের জন্য নিজের জ্ঞানকে কাজে লাগাতে চাই।",
    personalMazarBelief: "মাজার পূজা শিরক। তবে মাজার জিয়ারতকে সমর্থন করি।",
    personalBooksRead: "রাহে বেলায়াত, ইসলামি জীবনব্যবস্থা, আইনে রাসুল (সল্লাল্লাহু আলাইহি ওয়াসাল্লাম)",
    personalFavScholars: "মুহাম্মাদ আব্দুল মালেক (হাফিজাহুল্লাহ), খন্দকার আবদুল্লাহ জাহাঙ্গীর (রহিমাহুল্লাহ), শাইখ হারুন ইজহার (হাফি:)",
    personalHobbies: "আল্লাহর হুকুম-আহকাম ও ইসলামি রিতী-নীতি মেনে জীবনযাপন করতে চাই। প্রচুর ইসলামিক জ্ঞান অর্জন করার ইচ্ছা। সাধাসিধে জীবনযাপন পছন্দ করি। পরিষ্কার-পরিচ্ছন্নতা পছন্দ করি। দুনিয়াবি বিষয়ে যতটুকু প্রয়োজন ততটুকু সন্তুষ্ট থাকার চেষ্টা করি। সর্বোপরি, মহান আল্লাহ তা'য়ালার সন্তুষ্টি অর্জন করায় আমার জীবনের লক্ষ্য। হিংসা, অহংকার, রাগ, মিথ্যা বলা পছন্দ করি না। অহংকারী মানুষ একদম পছন্দ না। স্বপ্ন: এই ক্ষণস্থায়ী দুনিয়ায় পরিপূর্ণভাবে আল্লাহর সন্তুষ্টি অর্জন করে, আখিরাতে চিরস্থায়ী জান্নাত লাভ করা। হজ্জে যাওয়ার ইচ্ছে আছে।",
    professionDetail: "কয়েকটা টিউশন করাই। ক্লাস প্লে- সপ্তম।",
    marriageGuardianConsent: "জ্বি, আলহামদুলিল্লাহ।",
    marriageJobAfter: "একদম না।",
    marriageStudyAfter: "জেনারেল পড়াশোনা করার ইচ্ছে নেই। IOM এর আলিম কোর্স চলমান রাখতে চাই।",
    marriageWhy: "অর্ধেকদ্বীন পূরন করতে চাই। নবীর সুন্নাত পালন করতে চাই। নেককার জীবনসঙ্গী এবং একজন উত্তম অভিভাবক পেতে এবং সাদকায়ে জারিয়াহ রেখে যেতে চাই। রাসুলুল্লাহ সাল্লাল্লাহু 'আলাইহি ওয়াসাল্লাম বলেছেন- যে বিয়ে করল, সে তার অর্ধেকদ্বীন পূরন করে ফেললো। বাকি অর্ধেকের জন্য যে যেন আল্লাহকে ভয় করে। [বায়হাকি, শুআবুলইমান]",
    partnerPreferences: {
      ageRange: "২২-৩০",
      height: "৫.৫-৬ ফিট বা এর উপরে।",
      complexion: "কালো, শ্যামলা, উজ্জ্বল শ্যামলা, ফর্সা, উজ্জ্বল ফর্সা",
      education: "স্নাতক অথবা স্নাতকোত্তর ডিগ্রি অথবা এর সমমান। অথবা মাদ্রাসায় শিক্ষা গ্রহন করছে এমন।",
      location: "টাঙ্গাইল, শেরপুর, ময়মনসিংহ, ঢাকা। সকল",
      maritalStatus: "অবিবাহিত",
      profession: "হালাল ও সম্মানজনক আয় থাকতে হবে। ব্যবসায়ি, মাদ্রাসার শিক্ষক, ফ্রিলেন্সার। আয় কম হলেও সমস্যা নাই কিন্তু আয় হালাল হতে হবে।",
      economicStatus: "মধ্যবিত্ত বা উচ্চ মধ্যবিত্ত।",
      qualities: "অবশ্যই আল্লাহর হুকুম-আহকাম মেনে চলতে হবে। জামাতের সাথে পাঁচ ওয়াক্ত নামাজের প্রতি যত্নশীল হতে হবে। উত্তম, দ্বীনদার, গয়রতপুর্ন, উত্তম চরিত্রের অধিকারী, চক্ষুশীতলকারী, দৃষ্টি হেফাজতকারী এবং রাগ নিয়ন্ত্রণ করার ক্ষমতা থাকতে হবে। পূর্নদায়িত্বশীল এবং নিজের দায়িত্ব পালনে সচেষ্ট থাকতে হবে। যিনি আমাকে দ্বীনের পরিবেশে চলতে সহায়তা করবেন। মাহরাম-ননমাহরাম মেইনটেইন করেন এমন কেউ। হালাল উপার্জন ও হালাল জিবনযাপন করতে হবে।",
    },
    commitment1: "হ্যাঁ",
    commitment2: "হ্যাঁ",
    commitment3: "হ্যাঁ",
    guardianName: "মৃত",
    guardianRelation: "বাবা",
    guardianPhone: "+8801354316246",
    phone: "+8801354316246",
    email: "nusrat@bioghar.com",
    photoUrl: "",
    photoVisibility: "hidden",
    bio: "ইসলামিক মূল্যবোধে পরিপূর্ণ একজন মেয়ে যিনি দ্বীনের জ্ঞান অর্জনে আগ্রহী।",
  },
  {
    id: "2298",
    biodataCode: "ODF-2298",
    type: "BRIDE",
    name: "মুসফিকা আক্তার",
    age: 23,
    height: 168,
    weight: 50,
    complexion: "উজ্জ্বল শ্যামলা",
    maritalStatus: "অবিবাহিত",
    bloodGroup: "O+",
    nationality: "বাংলাদেশী",
    presentAddress: { district: "নওগাঁ", division: "রাজশাহী", area: "পার নওগাঁ" },
    permanentAddress: { district: "নওগাঁ", division: "রাজশাহী", area: "পার নওগাঁ" },
    grownUpIn: "পার নওগাঁ",
    religion: "ইসলাম",
    madhab: "হানাফি",
    prayerRegularity: "নিয়মিত",
    hijabOrBeard: "বোরখা, হিজাব, নিকাব, হাত মোজা, পা মোজা",
    quranRecitation: "হ্যা আলহামদুলিল্লাহ",
    religiousQualification: "স্নাতক (সন্মান)",
    educationMedium: "জেনারেল",
    educationLevel: "স্নাতক (সন্মান) - ৪র্থ বর্ষ",
    institution: "নওগাঁ সরকারি কলেজ",
    profession: "শিক্ষার্থী",
    monthlyIncome: 0,
    economicStatus: "মধ্যবিত্ত",
    fatherName: "মোঃ আব্দুল হামিদ",
    fatherOccupation: "প্রবাসি। দেশের বাহিরে থাকেন।",
    fatherAlive: true,
    motherName: "রোকেয়া বেগম",
    motherOccupation: "গৃহিণী",
    motherAlive: true,
    brothers: 2,
    brothersInfo: "জমজ ভাই। ১০ম শ্রেণিতে পড়াশোনা করছে।",
    sisters: 0,
    sistersInfo: "বোন নেই",
    uncleProfessions: "N/A",
    familyReligiousEnvironment: "আলহামদুলিল্লাহ চলার মতো। একেবারে দ্বীনদার পরিবার নয়। তবে বাসার প্রায় সব মেয়েই বাহিরে গেলে বোরখা পরিধান করে।",
    familyFinancialCondition: "মধ্যবিত্ত",
    familyHousing: "নিজস্ব বাসা, একতলা।",
    familyLand: "মধ্যবিত্ত",
    personalClothing: "বোরখা, হিজাব, নিকাব, হাত মোজা, পা মোজা",
    personalNikab: "২০১৯ সাল থেকে একদম নিয়মিত।",
    personalNamazDetail: "হ্যা পড়ি। একদম নিয়মিত ২০১৯ সাল থেকে",
    personalNamazWeekly: "হয় না। খুব কম।",
    personalMahram: "হ্যা আলহামদুলিল্লাহ",
    personalQuranRecite: "হ্যা আলহামদুলিল্লাহ",
    personalFiqh: "হানাফি",
    personalEntertainment: "না",
    personalHealth: "না",
    personalDawahWork: "না",
    personalMazarBelief: "শিরক",
    personalBooksRead: "ফেরা, প্রদীপ্ত কুটির, হিজাব আমার পরিচয়",
    personalFavScholars: "তারিক জামিল, শায়েখ আহমাদুল্লাহ, মিজানুর রহমান আজহারি",
    personalHobbies: "সাধারণ ঠান্ডা স্বভাবের মেয়ে। বই পড়তে পছন্দ করি। ফুল, প্রকৃতি এসব আমার ভীষন প্রিয়। গাছপালা অনেক পছন্দের। ছোট্ট ছাদবাগান আছে আমার। আগে দ্বীন সম্পর্কে তেমন জ্ঞান ছিলো না, তাই পর্দা করা হতো না, তবে শালীনভাবে চলতাম। নামাজ পড়া হতো কিন্তু একদম রেগুলার ছিলাম না। আল্লাহ তাআলার ইচ্ছেতে এখন দ্বীন সম্পর্কে জানি এবং সম্পূর্ণ মানার চেষ্টা করি। আল্লাহ তাআলার ইচ্ছেতেই তিনি আমার মাঝে হিদায়াহ দান করেন এবং আমি এক ঘোর অন্ধকার জগৎ থেকে আলোর পথে ফিরে আসি। ২০১৯ সাল থেকে নিজেকে সম্পূর্ণ চেন্জ করে ফেলি এবং নিজেকে পরিপূর্ণ পর্দায় আবৃত করে ফেলি। মাহরাম-ননমাহরাম মেনে পর্দা করি।",
    professionDetail: "অনার্স ৩য় বর্ষে পড়ছি।",
    marriageGuardianConsent: "হ্যা",
    marriageJobAfter: "পার্সোনালি কোন ইচ্ছে নেই। তবে পারমিশন থাকতে হবে।",
    marriageStudyAfter: "জ্বি ইংশাআল্লাহ, গ্রাজুয়েশন শেষ করতে চাই। পরবর্তীতে দ্বীনি জ্ঞান অর্জনের জন্য কিছু করার ইচ্ছে আছে।",
    marriageWhy: "অর্ধেক দ্বীন পূরনের জন্য, দুনিয়ার ফেতনাসমূহ থেকে বাঁচতে।",
    partnerPreferences: {
      ageRange: "25-30",
      height: "অবশ্যই ৫.৭ / এর বেশি",
      complexion: "শ্যামলা, উজ্জল শ্যামলা, ফর্সা",
      education: "স্নাতক",
      location: "নওগাঁর আশেপাশে, উত্তরবঙ্গে হলে ভালো হয়।",
      maritalStatus: "অবিবাহিত",
      profession: "হালাল ভালো চাকরি (ব্যাংক এবং পুলিশ ব্যতীত)",
      economicStatus: "সচ্ছল, মানানসই",
      qualities: "দ্বীনদার, চরিত্রবান, তাকওয়াবান, উত্তম আখলাকের অধিকারী। ৫ ওয়াক্ত নামাজী, হালাল উপার্জনকারী, দানশীল, দ্বীনি জ্ঞান থাকতে হবে। আর অবশ্যই অবশ্যই নজরের হেফাজতকারী। লেবাসধারী নয়, অন্তরে দ্বীন থাকতে হবে। আমাকে আমার দ্বীনদারিতায় সম্পূর্ণ সাপোর্ট করবে। বাসায় পর্দার পরিবেশ থাকতে হবে। আমি যেহেতু সম্পূর্ণ, নন মাহরাম মেইনটেইন করি, অবশ্যই এই বিষয়ে সাপোর্ট করতে হবে। যেমন, যদি কোনো দেবর থাকে তাহলে তার সামনেও পর্দা মেইনটেইন করে চলবো। দেবর মৃত্যু সমতুল্য, দেবরের সামনে পর্দা করা ফরজ। এইসব বিষয়ে আমাকে সম্পূর্ণ সাপোর্ট করতে হবে। স্বভাবে খুব বেশি রাগী/বদমেজাজী, মিথ্যা বলার অভ্যাস, অশ্লীল ভাষাকারী, দানশীল নয়, কৃপন, অহংকারী, দাম্ভিক এরকম একদমই নয়।",
    },
    commitment1: "হ্যাঁ",
    commitment2: "হ্যাঁ",
    commitment3: "হ্যাঁ",
    guardianName: "মোঃ আব্দুল হামিদ",
    guardianRelation: "বাবা",
    guardianPhone: "+8801354316246",
    phone: "+8801354316246",
    email: "musfika@bioghar.com",
    photoUrl: "",
    photoVisibility: "hidden",
    bio: "ইসলামিক মূল্যবোধে পরিপূর্ণ একজন মেয়ে।",
  },
];

export const districts = ["Dhaka","Chittagong","Sylhet","Rajshahi","Khulna","Barishal","Rangpur","Mymensingh","Comilla","Bogra","Coxs Bazar","Gazipur"];
