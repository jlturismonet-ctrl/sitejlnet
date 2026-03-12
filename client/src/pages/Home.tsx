import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

/**
 * JL Consultoria Landing Page
 * 
 * Design Philosophy: Elegância Corporativa com Luxo
 * - Paleta: Azul Marinho (confiança) + Dourado (exclusividade)
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Layout: Assimétrico e dinâmico com storytelling visual
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/jl-consultoria-logo-eNjLgkfxvnnSSupbrJNxn9.webp"
              alt="JL Consultoria"
              className="w-10 h-10"
            />
            <span className="font-bold text-lg text-blue-900">JL Consultoria</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium hover:text-blue-900 transition">Serviços</a>
            <a href="#processo" className="text-sm font-medium hover:text-blue-900 transition">Processo</a>
            <a href="#contato" className="text-sm font-medium hover:text-blue-900 transition">Contato</a>
          </div>
          <a href="https://wa.me/5511981408408" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">Solicitar Roteiro</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-50 rounded-full">
              <span className="text-sm font-semibold text-amber-900">✨ Consultoria Especializada</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
              Suas Viagens,<br />
              <span className="text-amber-500">Perfeitamente Planejadas</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Na JL Consultoria, transformamos seus sonhos de viagem em experiências inesquecíveis. Com atendimento consultivo e especializado, cuidamos de cada detalhe para que você viaje com tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5511981408408" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white h-12 px-8 text-base flex items-center gap-2">
                  Simule Agora <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://wa.me/5511981408408" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-8 text-base border-blue-900 text-blue-900 hover:bg-blue-50">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/hero-international_0af34226.png"
              alt="Viagens Internacionais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold text-lg">50+ Destinos</p>
                <p className="text-sm text-slate-600">Internacionais e nacionais</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">1000+ Clientes</p>
                <p className="text-sm text-slate-600">Satisfeitos e retornando</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">4.9/5 Avaliação</p>
                <p className="text-sm text-slate-600">Baseado em 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Especializados em criar experiências de viagem únicas e personalizadas para cada cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/luxury-destination_d95f5b8f.png)'}}>              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Viagens Internacionais</h3>
                <p className="text-slate-600 mb-6">
                  Roteiros exclusivos para os destinos mais desejados do mundo, com hospedagem de luxo e experiências autênticas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Vistos e documentação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Seguro viagem incluído</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Suporte 24/7 no exterior</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/national-travel_78a9d53a.jpg)'}}>              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Viagens Nacionais</h3>
                <p className="text-slate-600 mb-6">
                  Descubra a riqueza do Brasil com roteiros personalizados que exploram cultura, natureza e gastronomia local.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Destinos exclusivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Guias especializados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Experiências autênticas</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/business-travel_cb272ca4.jpg)'}}>              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Viagens de Negócios</h3>
                <p className="text-slate-600 mb-6">
                  Planejamento eficiente para viagens corporativas com foco em logística, conforto e produtividade.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Hotéis corporativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Transfers executivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" />
                    <span>Gestão de despesas</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Destinations Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Destinos Populares
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore alguns dos destinos mais procurados por nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Destination 1 - Paris */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/D1guwhy060vm_d4e2b3a3.jpg"
                alt="Paris"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Paris</h3>
                <p className="text-blue-100 text-sm">A Cidade da Luz</p>
                <p className="text-amber-400 font-semibold mt-2">A partir de R$ 4.500</p>
              </div>
            </div>

            {/* Destination 2 - Maldivas */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/uwAkhrOUeZhf_95447a95.jpg"
                alt="Maldivas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Maldivas</h3>
                <p className="text-blue-100 text-sm">Paraíso Tropical</p>
                <p className="text-amber-400 font-semibold mt-2">A partir de R$ 6.200</p>
              </div>
            </div>

            {/* Destination 3 - Rio de Janeiro */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/C6sP2py9iSUt_c8dd5b0e.jpg"
                alt="Rio de Janeiro"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Rio de Janeiro</h3>
                <p className="text-blue-100 text-sm">Maravilha do Brasil</p>
                <p className="text-amber-400 font-semibold mt-2">A partir de R$ 2.800</p>
              </div>
            </div>

            {/* Destination 4 - Maldivas Resort */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/e3TxlMHnh30c_c2271729.jpg"
                alt="Resort Maldivas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Resort Luxo</h3>
                <p className="text-blue-100 text-sm">Experiência Premium</p>
                <p className="text-amber-400 font-semibold mt-2">A partir de R$ 8.500</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://wa.me/5511981408408" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white h-12 px-8 text-base flex items-center gap-2 mx-auto">
                Ver Todos os Destinos <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nosso processo consultivo garante que cada viagem seja perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Consulta Inicial", desc: "Entendemos seus desejos e necessidades" },
              { step: 2, title: "Planejamento", desc: "Criamos um roteiro personalizado" },
              { step: 3, title: "Confirmação", desc: "Confirmamos todos os detalhes" },
              { step: 4, title: "Viagem", desc: "Aproveite com suporte completo" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-blue-900 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Silva",
                role: "Executiva",
                text: "A JL Consultoria transformou minha viagem de negócios em uma experiência memorável. Cada detalhe foi cuidadosamente planejado.",
                rating: 5,
              },
              {
                name: "Carlos Mendes",
                role: "Casal em Lua de Mel",
                text: "Nosso roteiro pela Europa foi simplesmente perfeito! A equipe se preocupou com cada aspecto da nossa viagem.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                role: "Viajante Frequente",
                text: "Já viajei com várias agências, mas a JL Consultoria realmente se destaca pelo atendimento personalizado e atenção aos detalhes.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-md p-8">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Sua Próxima Aventura?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Entre em contato conosco hoje e comece a planejar a viagem dos seus sonhos
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6"
              >
                Solicitar Roteiro
              </Button>
            </form>

            {submitted && (
              <p className="mt-4 text-amber-200 font-medium animate-pulse">
                ✓ Obrigado! Entraremos em contato em breve.
              </p>
            )}

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <p className="font-bold text-lg mb-2">📞 Telefone</p>
                <p className="text-blue-100">(11) 98140-8408</p>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">📧 Email</p>
                <p className="text-blue-100">joao@jlturismo.net.br</p>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">📍 Localização</p>
                <p className="text-blue-100">Salto, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663214887340/5JbSBbonHZWweH953xTukb/jl-consultoria-logo-eNjLgkfxvnnSSupbrJNxn9.webp"
                alt="JL Consultoria"
                className="w-8 h-8"
              />
              <span className="font-bold">JL Consultoria</span>
            </div>
            <p className="text-sm">© 2026 JL Consultoria. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/jlconsultoriaemturismo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://wa.me/5511981408408" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
