import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Modern Çözümler
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800 block">
                  Yaratıcı Tasarımlar
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Dijital dünyada markanızı öne çıkaracak yenilikçi çözümler sunuyoruz.
              </p>
              <div className="space-x-4">
                <Link href="/iletisim" className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-300">
                  Başlayalım
                </Link>
                <Link href="/hakkimizda" className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                  Daha Fazla
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/web.jpg"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800">
              Neler Sunuyoruz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800">
              Projenizi Hayata Geçirelim
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Profesyonel ekibimizle hayalinizdeki projeyi gerçeğe dönüştürmek için hazırız.
            </p>
            <Link 
              href="/iletisim"
              className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-300 inline-block"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

const features = [
  {
    icon: <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'Yenilikçi Fikirler',
    description: 'Modern ve yaratıcı çözümlerle projelerinizi hayata geçiriyoruz.'
  },
  {
    icon: <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
    title: 'Özelleştirilebilir Tasarımlar',
    description: 'İhtiyaçlarınıza özel, benzersiz tasarımlar oluşturuyoruz.'
  },
  {
    icon: <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Hızlı Performans',
    description: 'Optimize edilmiş kodlama ile maksimum performans sağlıyoruz.'
  }
]

const stats = [
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '150+', label: 'Tamamlanan Proje' },
  { value: '24/7', label: 'Destek' },
  { value: '15+', label: 'Ödül' }
]