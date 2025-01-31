import Image from 'next/image'

export default function Hizmetler() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Hizmetlerimiz</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-blue-900">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <svg 
                        className="w-5 h-5 text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Size özel çözümler için hemen iletişime geçin.
          </p>
          <button className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-300">
            İletişime Geçin
          </button>
        </div>
      </div>
    </div>
  )
}

const mainServices = [
  {
    title: 'Web Geliştirme',
    description: 'Modern ve responsive web siteleri geliştiriyoruz. En son teknolojileri kullanarak hızlı, güvenli ve kullanıcı dostu web uygulamaları oluşturuyoruz.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
    features: [
      'Özel Tasarım',
      'Responsive Yapı',
      'SEO Uyumlu',
      'Hızlı Performans'
    ]
  },
  {
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için native uygulamalar geliştiriyoruz. Modern teknolojilerle cross-platform çözümler sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    features: [
      'Cross-Platform',
      'Native Performans',
      'Özelleştirilebilir UI',
      'Push Bildirimler'
    ]
  },
  {
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı arayüz tasarımları oluşturuyoruz. Modern ve etkileyici tasarımlarla markanızı öne çıkarıyoruz.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    features: [
      'Modern Tasarım',
      'Kullanıcı Deneyimi',
      'Wireframe & Prototyping',
      'Design System'
    ]
  }
]