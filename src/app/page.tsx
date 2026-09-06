import Link from "next/link";

const stats = [
  { number: "10,000+", label: "Biodatas" },
  { number: "5,500+", label: "Groom" },
  { number: "4,500+", label: "Bride" },
  { number: "1,200+", label: "Successful Marriages" },
];

const steps = [
  { icon: "📝", title: "Create Profile", desc: "Fill in your biodata with accurate information" },
  { icon: "🔍", title: "Search Matches", desc: "Filter and find your ideal match" },
  { icon: "💌", title: "Send Interest", desc: "Connect with your chosen match" },
  { icon: "🤝", title: "Get Married", desc: "Start your journey together" },
];

const testimonials = [
  { name: "Ahmed & Fatima", location: "Dhaka", text: "Alhamdulillah, we found each other through BioGhar. May Allah bless this platform." },
  { name: "Karim & Ayesha", location: "Chittagong", text: "Simple, trustworthy, and family-friendly. Exactly what we were looking for." },
  { name: "Hasan & Nusrat", location: "Sylhet", text: "We got married within 3 months of connecting. JazakAllah Khair!" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-xl font-bold text-emerald-800">BioGhar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/biodata" className="hover:text-emerald-700 transition">Search</Link>
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 text-center">
          <p className="text-amber-300 text-sm font-medium mb-4">
            ﷽ &quot;And among His signs is that He created for you mates from among yourselves&quot;
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find Your <span className="text-amber-300">Half of Deen</span>
          </h1>
          <p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
            A trusted Islamic matrimony platform for Bangladeshi Muslims. Create your biodata, search matches, and begin your journey to a blessed marriage.
          </p>

          {/* Quick Search */}
          <div className="mt-10 mx-auto max-w-xl bg-white rounded-2xl p-4 shadow-2xl flex flex-col sm:flex-row gap-3">
            <select className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Looking For: All</option>
              <option>Groom Biodata (পাত্র)</option>
              <option>Bride Biodata (পাত্রী)</option>
            </select>
            <select className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Marital Status: All</option>
              <option>Unmarried</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widow</option>
              <option>Widower</option>
            </select>
            <Link href="/biodata" className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition text-center">
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-emerald-800">{s.number}</div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-900">How It Works</h2>
          <p className="text-center text-gray-500 mt-2">4 simple steps to find your match</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-emerald-600 mb-1">Step {i + 1}</div>
                <h3 className="font-bold text-emerald-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-3xl font-bold text-emerald-900">Ready to Find Your Match?</h2>
          <p className="mt-3 text-gray-600">Create your free biodata today and take the first step towards a blessed marriage.</p>
          <Link href="/register" className="mt-6 inline-flex items-center rounded-full bg-emerald-700 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-800 transition">
            Create Free Biodata ✨
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-900">Success Stories</h2>
          <p className="text-center text-gray-500 mt-2">Alhamdulillah, couples found their match</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <p className="text-gray-600 text-sm italic">&quot;{t.text}&quot;</p>
                <div className="mt-4">
                  <p className="font-bold text-emerald-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🕌</span>
                <span className="font-bold text-lg">BioGhar</span>
              </div>
              <p className="text-sm text-emerald-200">A trusted Islamic matrimony platform for Bangladeshi Muslims.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-emerald-200">
                <Link href="/biodata" className="block hover:text-white transition">Search Biodata</Link>
                <Link href="/about" className="block hover:text-white transition">About Us</Link>
                <Link href="/faq" className="block hover:text-white transition">FAQ</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <div className="space-y-2 text-sm text-emerald-200">
                <Link href="/privacy-policy" className="block hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-white transition">Terms & Conditions</Link>
                <Link href="/refund" className="block hover:text-white transition">Refund Policy</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-emerald-200">
                <p>info@bioghar.com</p>
                <p>+880 1XXX XXXXXX</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-emerald-700 pt-6 text-center text-sm text-emerald-300">
            © 2026 BioGhar. All rights reserved. Made with ❤️ for the Ummah.
          </div>
        </div>
      </footer>
    </div>
  );
}
