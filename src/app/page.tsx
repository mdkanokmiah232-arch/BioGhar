import Link from 'next/link';

const stats = [
  { number: '10000+', label: 'বায়োডাটা', icon: '📋' },
  { number: '5500+', label: 'পাত্র', icon: '👨' },
  { number: '4500+', label: 'পাত্রী', icon: '👩' },
  { number: '1200+', label: 'বিয়ে সম্পন্ন', icon: '💍' },
];

const steps = [
  {
    number: '১',
    title: 'বায়োডাটা তৈরি করুন',
    description: 'আপনার প্রোফাইল তৈরি করুন এবং বিস্তারিত তথ্য প্রদান করুন।',
    icon: '📝',
  },
  {
    number: '২',
    title: 'বায়োডাটা খুঁজুন',
    description: 'আপনার পছন্দের মাপদণ্ড অনুযায়ী বায়োডাটা সার্চ করুন।',
    icon: '🔍',
  },
  {
    number: '৩',
    title: 'যোগাযোগ করুন',
    description: 'পছন্দের বায়োডাটার সাথে যোগাযোগ করুন।',
    icon: '💬',
  },
  {
    number: '৪',
    title: 'বিয়ে সম্পন্ন করুন',
    description: 'আল্লাহর রহমতে আপনার জীবনসঙ্গীর সাথে বিয়ে সম্পন্ন করুন।',
    icon: '🎉',
  },
];

const testimonials = [
  {
    name: 'মোঃ আহমেদ হাসান',
    location: 'ঢাকা',
    text: 'BioGhar-এর মাধ্যমে আমি আমার জীবনসঙ্গীকে খুঁজে পেয়েছি। এটি সত্যিই একটি বিশ্বস্ত প্ল্যাটফর্ম।',
    rating: 5,
  },
  {
    name: 'ফাতিমা আক্তার',
    location: 'চট্টগ্রাম',
    text: 'আমার মেয়ের জন্য এখানে ভালো প্রোফাইল পেয়েছি। সেবা অনেক ভালো।',
    rating: 5,
  },
  {
    name: 'মোঃ রাকিবুল হাসান',
    location: 'সিলেট',
    text: 'ইসলামিক মূল্যবোধের উপর ভিত্তি করে কাজ করায় BioGhar-কে পছন্দ করি।',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="bg-pattern">
      {/* Hero Section */}
      <section className="bg-emerald-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Islamic Quote */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-emerald-100 font-medium leading-relaxed">
                &quot;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا&quot;
              </p>
              <p className="text-sm md:text-base text-emerald-200 mt-3 italic">
                &quot;এবং তাঁর নিদর্শনাবলীর মধ্যে রয়েছে যে, তিনি তোমাদের জন্য
                তোমাদের নিজেদের মধ্য থেকে স্ত্রী সৃষ্টি করেছেন, যাতে তোমরা
                তাদের নিকট শান্তি লাভ করো।&quot;
              </p>
              <p className="text-xs text-emerald-300 mt-2">— সূরা আর-রূম, ২১</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              আপনার জীবনসঙ্গী খুঁজুন
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8">
              ইসলামিক মূল্যবোধের উপর ভিত্তি করে বিশ্বস্ত বায়োডাটা প্ল্যাটফর্ম
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <select className="search-select flex-1">
                  <option value="">কার জন্য খুঁজছেন?</option>
                  <option value="groom">পাত্র</option>
                  <option value="bride">পাত্রী</option>
                </select>
                <select className="search-select w-full md:w-40">
                  <option value="">বয়স (থেকে)</option>
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>
                      {i + 18} বছর
                    </option>
                  ))}
                </select>
                <select className="search-select w-full md:w-40">
                  <option value="">বয়স (পর্যন্ত)</option>
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 20} value={i + 20}>
                      {i + 20} বছর
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn-primary w-full mt-4 text-lg">
                🔍 বায়োডাটা খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              কিভাবে কাজ করে?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              মাত্র ৪টি সহজ ধাপে আপনার জীবনসঙ্গীকে খুঁজে নিন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="step-circle">{step.number}</div>
                <div className="mt-4 mb-2 text-4xl">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-emerald-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            আজই বিনামূল্যে বায়োডাটা তৈরি করুন!
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            আমাদের প্ল্যাটফর্মে বিনামূল্যে বায়োডাটা তৈরি করুন এবং আপনার
            জীবনসঙ্গীকে খুঁজে নিন।
          </p>
          <Link
            href="/create-biodata"
            className="inline-block bg-white text-emerald-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg text-lg"
          >
            📝 বিনামূল্যে বায়োডাটা তৈরি করুন
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              তারা কী বলছেন?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমাদের সফল জুটির অভিজ্ঞতা
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              আমাদের বৈশিষ্ট্য
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              কেন BioGhar বেছে নেবেন?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-xl p-6 shadow-md border border-emerald-100">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                নিরাপদ ও গোপনীয়
              </h3>
              <p className="text-gray-600 text-sm">
                আপনার তথ্য সম্পূর্ণ নিরাপদ। শুধুমাত্র যাচাইকৃত ব্যবহারকারীরা
                আপনার প্রোফাইল দেখতে পাবেন।
              </p>
            </div>

            <div className="card-hover bg-white rounded-xl p-6 shadow-md border border-emerald-100">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                যাচাইকৃত বায়োডাটা
              </h3>
              <p className="text-gray-600 text-sm">
                সকল বায়োডাটা যাচাই করা হয়। আমরা প্রতিটি প্রোফাইলের তথ্য
                যাচাই করি।
              </p>
            </div>

            <div className="card-hover bg-white rounded-xl p-6 shadow-md border border-emerald-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                বিনামূল্যে সেবা
              </h3>
              <p className="text-gray-600 text-sm">
                বায়োডাটা তৈরি এবং ব্রাউজ করা সম্পূর্ণ বিনামূল্যে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            এখনই শুরু করুন!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            আপনার জীবনসঙ্গীকে খুঁজে নিতে আজই রেজিস্ট্রেশন করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="btn-primary text-lg"
            >
              রেজিস্ট্রেশন করুন
            </Link>
            <Link
              href="/search"
              className="btn-secondary text-lg"
            >
              বায়োডাটা খুঁজুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
