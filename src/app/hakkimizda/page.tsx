import Image from 'next/image'

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/webss.webp"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority

        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Hakkımızda</h1>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Misyonumuz</h2>
            <p className="text-slate-600 leading-relaxed">
              Müşterilerimize en yüksek kalitede dijital çözümler sunarak, 
              onların online başarılarına katkıda bulunmak ve dijital dünyada 
              öne çıkmalarını sağlamak.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Vizyonumuz</h2>
            <p className="text-slate-600 leading-relaxed">
              Dijital dönüşümde öncü, yenilikçi çözümlerle sektörde lider konumda olmak 
              ve müşterilerimizin dijital yolculuklarında güvenilir bir partner olmak.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800">
          Değerlerimiz
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const values = [
  {
    icon: <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'Güvenilirlik',
    description: 'Sözümüz söz, kalitemiz garantidir.'
  },
  {
    icon: <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Hız',
    description: 'Zamanında teslimat bizim için önemli.'
  },
  {
    icon: <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'Yenilikçilik',
    description: 'Her zaman en son teknolojileri kullanırız.'
  },
  {
    icon: <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Takım Çalışması',
    description: 'Birlikte daha güçlüyüz.'
  }
]