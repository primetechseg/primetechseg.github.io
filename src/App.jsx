import React, { useState } from "react";
import {
  Cctv,
  Zap,
  Wifi,
  Siren,
  Cable,
  Phone,
  Headset,
  MapPin,
  CheckCircle2,
  Wrench,
  Home,
  Tractor,
  ShoppingCart,
  ShieldCheck,
  Mail,
  Menu,
  X,
  Pill,
  Shirt,
  ChevronLeft,
  AlertTriangle,
  Settings,
  Award,
  MessageCircle,
  Store,
} from "lucide-react";
import "./App.css";

const phoneNumber = "5579998478570";

const whatsapp1 = `https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20suporte%20t%C3%A9cnico.`;
const whatsapp2 = `https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;

const services = [
  {
    icon: Cctv,
    title: "Instalação de câmeras de segurança",
    text: "Sistemas de CFTV para residências, comércios, empresas e propriedades.",
  },
  {
    icon: Siren,
    title: "Sistemas de alarme",
    text: "Alarmes, sensores e sirenes para proteção contra invasões e acessos indevidos.",
  },
  {
    icon: Zap,
    title: "Cerca elétrica e concertina",
    text: "Proteção perimetral para muros, fachadas, imóveis residenciais e comerciais.",
  },
  {
    icon: Wifi,
    title: "Redes e internet",
    text: "Configuração de roteadores, pontos de rede, Wi‑Fi e conectividade estruturada.",
  },
  {
    icon: Cable,
    title: "Cabeamento estruturado",
    text: "Organização de cabos, eletrodutos, infraestrutura de rede e CFTV.",
  },
  {
    icon: Wrench,
    title: "Manutenção e suporte técnico",
    text: "Correção de falhas, melhorias, troca de equipamentos e ajustes em sistemas existentes.",
  },
];

const segments = [
  {
    icon: ShoppingCart,
    title: "Supermercados",
    text: "Controle de perdas e gestão de operações.",
    detailTitle: "Segurança inteligente para supermercados",
    subtitle: "Reduza perdas, controle operações e proteja seu supermercado com câmeras e infraestrutura profissional.",
    description:
      "Supermercados enfrentam desafios diários como furtos, controle de estoque, acompanhamento de caixas, recebimento de mercadorias e circulação intensa de clientes. Um sistema de segurança bem planejado ajuda a proteger o patrimônio e melhorar o controle operacional.",
    alerts: [
      "Furtos internos e externos podem gerar perdas constantes.",
      "Áreas de caixa, estoque e recebimento precisam de visibilidade.",
    ],
    solutions: [
      "Câmeras em corredores, caixas e entradas",
      "Acesso remoto pelo celular",
      "Rede estruturada para CFTV",
      "Manutenção e suporte técnico",
    ],
  },
  {
    icon: Pill,
    title: "Farmácias",
    text: "Proteção de medicamentos e controle de conformidade.",
    detailTitle: "Segurança eletrônica para farmácias",
    subtitle: "Mais controle para atendimento, estoque, medicamentos e áreas sensíveis.",
    description:
      "Farmácias precisam de segurança e controle visual para proteger produtos, acompanhar o fluxo de clientes e manter melhor visibilidade sobre áreas de atendimento, caixa e estoque.",
    alerts: [
      "Medicamentos e produtos de alto giro exigem maior controle.",
      "Ambientes compactos precisam de câmeras bem posicionadas.",
    ],
    solutions: [
      "CFTV interno e externo",
      "Alarmes e sensores",
      "Acesso remoto",
      "Organização da infraestrutura",
    ],
  },
  {
    icon: Shirt,
    title: "Lojas de roupas",
    text: "Prevenção de furtos e controle de fluxo.",
    detailTitle: "Segurança para lojas de roupas",
    subtitle: "Proteja mercadorias, acompanhe o atendimento e monitore áreas de circulação.",
    description:
      "Lojas de roupas possuem grande circulação de pessoas e produtos expostos. A segurança eletrônica contribui para reduzir perdas, acompanhar o atendimento e proteger o patrimônio.",
    alerts: [
      "Produtos expostos aumentam o risco de perdas.",
      "Entrada, caixa e área de vendas precisam de acompanhamento.",
    ],
    solutions: ["Câmeras em pontos estratégicos", "Alarmes", "Rede e infraestrutura", "Suporte técnico"],
  },
  {
    icon: Home,
    title: "Residências",
    text: "Tranquilidade para sua família.",
    detailTitle: "Segurança residencial completa",
    subtitle: "Proteja sua casa com câmeras, alarmes, cerca elétrica e acesso remoto.",
    description:
      "Residências precisam de soluções práticas e confiáveis. Com câmeras, alarmes e proteção perimetral, é possível acompanhar o imóvel e aumentar a segurança da família.",
    alerts: [
      "Entradas, garagem, quintal e área externa precisam de atenção.",
      "Acesso remoto ajuda no acompanhamento mesmo fora de casa.",
    ],
    solutions: ["Câmeras residenciais", "Alarmes e sensores", "Cerca elétrica", "Rede Wi‑Fi e cabeamento"],
  },
  {
    icon: Tractor,
    title: "Fazendas",
    text: "Câmeras para grandes propriedades.",
    detailTitle: "Segurança para propriedades rurais",
    subtitle: "Soluções para monitorar entradas, galpões, áreas externas e pontos estratégicos.",
    description:
      "Propriedades rurais exigem planejamento técnico por causa de distância, estrutura, cobertura de sinal e pontos de instalação. A solução precisa considerar ambiente externo, cabeamento, energia e conectividade.",
    alerts: [
      "Áreas amplas exigem planejamento dos pontos de câmera.",
      "Galpões, porteiras e entradas precisam de controle visual.",
    ],
    solutions: ["CFTV para áreas externas", "Rede e internet", "Cabeamento estruturado", "Manutenção técnica"],
  },
  {
    icon: Store,
    title: "Comércios",
    text: "Segurança e gestão para seu negócio.",
    detailTitle: "Segurança eletrônica para comércios",
    subtitle: "Proteção para lojas, depósitos, escritórios e pontos comerciais.",
    description:
      "Comércios precisam proteger patrimônio, equipe, clientes e mercadorias. Um sistema técnico bem instalado contribui para segurança, controle de acesso e acompanhamento das operações.",
    alerts: [
      "Caixas, entradas e estoque são pontos sensíveis.",
      "Cada tipo de comércio exige posicionamento adequado dos equipamentos.",
    ],
    solutions: ["Câmeras de segurança", "Alarmes", "Controle de acesso", "Redes e infraestrutura"],
  },
];

const differentials = [
  { icon: Zap, title: "Atendimento rápido", text: "Atendimento rápido em Penedo e região." },
  { icon: Award, title: "Equipamentos de qualidade", text: "Equipamentos de alta qualidade e durabilidade." },
  { icon: Wrench, title: "Instalação profissional", text: "Instalação profissional e organizada." },
  { icon: Headset, title: "Suporte especializado", text: "Suporte técnico especializado sempre disponível." },
  { icon: Settings, title: "Soluções personalizadas", text: "Soluções personalizadas para cada cliente." },
];

const faqs = [
  {
    q: "Quanto custa instalar câmeras de segurança?",
    a: "O valor depende da quantidade de câmeras, estrutura do local, distância dos cabos e equipamentos necessários. Solicite um orçamento pelo WhatsApp para avaliarmos seu caso.",
  },
  {
    q: "Posso acessar as câmeras pelo celular?",
    a: "Sim. Quando há internet no local, o sistema pode ser configurado para acesso remoto pelo celular.",
  },
  {
    q: "Vocês instalam cerca elétrica?",
    a: "Sim. Realizamos instalação de cerca elétrica e concertina conforme a necessidade do imóvel.",
  },
  {
    q: "Atende em quais regiões?",
    a: "Atendimento em Penedo e região, conforme disponibilidade e tipo de serviço.",
  },
  {
    q: "Também trabalham com redes e elétrica?",
    a: "Sim. Além de segurança eletrônica, também realizamos serviços de redes, cabeamento estruturado, internet e elétrica.",
  },
];

const gallery = [
  {
    src: "https://www.magrihome.com.br/imagens/informacoes/instalacao-cftv-03.webp?auto=format&fit=crop&w=1200&q=80",
    title: "Instalação de CFTV",
    category: "Câmeras",
  },
  {
    src: "https://ticoopbrasil.coop.br/wp-content/uploads/2024/02/redes-de-computadores.jpg?auto=format&fit=crop&w=1200&q=80",
    title: "Infraestrutura técnica",
    category: "Redes",
  },
  {
    src: "https://revistaoeste.com/oestegeral/wp-content/uploads/2026/02/Imagem-138.jpg?auto=format&fit=crop&w=1200&q=80",
    title: "Equipamentos e automação",
    category: "Tecnologia",
  },
  {
    src: "https://eletricamedeiros.com.br/wp-content/uploads/2023/02/servicos_eletrica_residencial2.jpg?auto=format&fit=crop&w=1200&q=80",
    title: "Serviços elétricos",
    category: "Elétrica",
  },
  {
    src: "https://sunergia.com.br/blog/wp-content/uploads/sites/2/2024/12/instalacao-manutencao-e-suporte-em-energia-solar-fotovoltaica-1.png?auto=format&fit=crop&w=1200&q=80",
    title: "Manutenção em campo",
    category: "Suporte",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    title: "Configuração e redes",
    category: "Internet",
  },
];

function Header({ onNavigateHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const goHome = () => {
    closeMenu();
    if (onNavigateHome) onNavigateHome();
  };

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <button className="logoText" onClick={goHome} type="button" aria-label="Voltar ao início">
          PRIME<span>TECH</span>
        </button>

        <nav className={`navMenu ${menuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={goHome}>Início</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#segmentos" onClick={closeMenu}>Segmentos</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>

        <a className="supportButton" href={whatsapp1} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Suporte Prioritário
        </a>

        <button
          className="mobileMenu"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default function App() {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [openFaq, setOpenFaq] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quoteData, setQuoteData] = useState({ nome: "", telefone: "", servico: "" });

  const quoteMessage = `Olá, gostaria de solicitar um orçamento.%0A%0ANome: ${encodeURIComponent(
    quoteData.nome || "Não informado"
  )}%0ATelefone: ${encodeURIComponent(quoteData.telefone || "Não informado")}%0AServiço desejado: ${encodeURIComponent(
    quoteData.servico || "Não informado"
  )}`;
  const quoteLink = `https://wa.me/${phoneNumber}?text=${quoteMessage}`;

  const goToHome = () => {
    setSelectedSegment(null);
    window.setTimeout(() => {
      document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  if (selectedSegment) {
    const Icon = selectedSegment.icon;

    return (
      <main>
        <Header onNavigateHome={goToHome} />

        <section className="segmentPageHero">
          <div className="container">
            <button className="backButton" onClick={goToHome} type="button">
              <ChevronLeft size={18} /> Voltar ao início
            </button>
            <div className="segmentPageIcon"><Icon size={42} /></div>
            <h1>{selectedSegment.detailTitle}</h1>
            <p>{selectedSegment.subtitle}</p>
          </div>
        </section>

        <section className="segmentPageContent">
          <div className="container segmentPageGrid">
            <div>
              <h2>Desafios do segmento</h2>
              <p>{selectedSegment.description}</p>

              <div className="alertGrid">
                {selectedSegment.alerts.map((item) => (
                  <div className="alertBox" key={item}>
                    <AlertTriangle size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="solutionBox">
              <h2>Soluções indicadas</h2>
              {selectedSegment.solutions.map((item) => (
                <div className="solutionItem" key={item}>
                  <CheckCircle2 size={18} /> {item}
                </div>
              ))}
              <a href={whatsapp2} className="greenBtn" target="_blank" rel="noreferrer">Solicitar orçamento</a>
            </aside>
          </div>
        </section>

        <a href={whatsapp1} className="whatsappFloat" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
          <MessageCircle size={30} />
        </a>
      </main>
    );
  }

  return (
    <main>
      <Header onNavigateHome={goToHome} />

      <section id="inicio" className="heroRef">
        <div className="container heroRefContent">
          <div className="locationPill">Segurança eletrônica em Penedo e região</div>

          <div className="brandHero">
            <h1>PRIME<span>TECH</span></h1>
            <p>Soluções Profissionais em Segurança Eletrônica</p>
            <div className="heroIcons">
              <div><Cctv size={44} /><small>CFTV</small></div>
              <div><Siren size={44} /><small>Alarmes</small></div>
              <div><Wifi size={44} /><small>Redes</small></div>
              <div><Zap size={44} /><small>Cerca Elétrica</small></div>
            </div>
          </div>

          <h2>Segurança eletrônica profissional em Penedo e região</h2>
          <p className="heroSubtitle">
            Proteja sua casa, empresa ou propriedade com instalação profissional de câmeras, alarmes, cerca elétrica, redes e infraestrutura técnica.
          </p>

          <ul className="heroList">
            <li>📹 Câmeras com acesso remoto pelo celular</li>
            <li>⚡ Cerca elétrica e concertina</li>
            <li>🌐 Rede estruturada e internet</li>
            <li>🏠 Residencial, Comercial e Rural</li>
            <li>📍 Penedo e região</li>
          </ul>

          <div className="heroActions">
            <a className="greenBtn" href={whatsapp1} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Suporte Prioritário
            </a>
            <a className="outlineBtn" href="#contato">Orçamento Grátis</a>
          </div>
        </div>
      </section>

      <section id="servicos" className="darkSection servicesRef">
        <div className="container">
          <div className="centerTitle">
            <span>Nossos serviços</span>
            <h2>Soluções completas em segurança eletrônica</h2>
            <p>Serviços para proteger, conectar e organizar sua casa, empresa ou propriedade.</p>
          </div>

          <div className="cardsGrid servicesCards">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="darkCard" key={service.title}>
                  <div className="redIcon"><Icon size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="segmentos" className="softSection">
        <div className="container">
          <div className="centerTitle">
            <h2>Soluções por segmento</h2>
            <p>Cada ambiente exige uma solução adequada. Conheça os principais tipos de atendimento.</p>
          </div>

          <div className="segmentCards">
            {segments.map((item) => {
              const Icon = item.icon;
              return (
                <button className="segmentBox" key={item.title} onClick={() => setSelectedSegment(item)} type="button">
                  <div className="roundIcon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="darkSection differentialsSection">
        <div className="container">
          <div className="centerTitle">
            <span>Diferenciais</span>
            <h2>Por que escolher a PrimeTech?</h2>
          </div>

          <div className="differentialsGrid">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <article className="diffCard" key={item.title}>
                  <div className="roundIcon small"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="aboutRef">
        <div className="container aboutRefInner">
          <span>Sobre nós</span>
          <h2>Sobre a PrimeTech</h2>
          <div className="aboutShield"><ShieldCheck size={34} /></div>
          <p>
            A PrimeTech é especializada em soluções completas de segurança eletrônica em Penedo e região. Trabalhamos com instalação de câmeras, alarmes, cerca elétrica, redes e infraestrutura técnica para residências, comércios, empresas e propriedades. Nosso objetivo é oferecer mais proteção, organização e tranquilidade por meio de tecnologia moderna e serviços profissionais.
          </p>
        </div>
      </section>

      <section id="galeria" className="softSection gallerySection">
        <div className="container">
          <div className="centerTitle">
            <span>Nosso trabalho</span>
            <h2>Galeria de instalações e soluções técnicas</h2>
            <p>Veja exemplos de serviços relacionados a segurança eletrônica, infraestrutura, redes e elétrica.</p>
          </div>

          <div className="galleryPremiumGrid">
            {gallery.map((item, index) => (
              <button
                className={`galleryPremiumCard ${index === 0 ? "featured" : ""}`}
                key={item.src}
                onClick={() => setSelectedImage(item)}
                type="button"
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="galleryOverlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <small>Ampliar imagem</small>
                </div>
              </button>
            ))}
          </div>

          <div className="galleryCta">
            <p>Quer uma solução parecida para seu imóvel?</p>
            <a className="greenBtn" href="#contato">Solicite um orçamento grátis</a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="galleryModal" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
          <button className="modalClose" onClick={() => setSelectedImage(null)} type="button" aria-label="Fechar imagem">×</button>
          <div className="modalImageBox" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div>
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <section className="darkSection faqRef">
        <div className="container smallContainer">
          <div className="centerTitle">
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas dúvidas sobre segurança eletrônica em Penedo e região.</p>
          </div>
          <div className="faqList">
            {faqs.map((item, index) => (
              <div className={`faqItem ${openFaq === index ? "active" : ""}`} key={item.q}>
                <button className="faqQuestion" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} type="button">
                  <span>{item.q}</span>
                  <span className="faqArrow">🔻</span>
                </button>
                {openFaq === index && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="budgetSection">
        <div className="container smallContainer">
          <div className="centerTitle">
            <span>Orçamento</span>
            <h2>Solicite seu orçamento sem compromisso</h2>
            <p>Preencha o formulário abaixo e fale diretamente com a nossa equipe pelo WhatsApp.</p>
          </div>
          <form className="budgetForm" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Seu nome"
              value={quoteData.nome}
              onChange={(e) => setQuoteData({ ...quoteData, nome: e.target.value })}
              aria-label="Seu nome"
            />
            <input
              placeholder="Seu telefone"
              value={quoteData.telefone}
              onChange={(e) => setQuoteData({ ...quoteData, telefone: e.target.value })}
              aria-label="Seu telefone"
            />
            <select
              value={quoteData.servico}
              onChange={(e) => setQuoteData({ ...quoteData, servico: e.target.value })}
              aria-label="Serviço desejado"
            >
              <option value="" disabled>Serviço desejado</option>
              <option value="Câmeras de segurança">Câmeras de segurança</option>
              <option value="Alarmes">Alarmes</option>
              <option value="Cerca elétrica">Cerca elétrica</option>
              <option value="Redes e internet">Redes e internet</option>
              <option value="Manutenção técnica">Manutenção técnica</option>
            </select>
            <a href={quoteLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Chamar no WhatsApp
            </a>
          </form>
        </div>
      </section>

      <footer className="footerRef">
        <div className="container footerGrid">
          <div>
            <div className="footerLogo">PRIME<span>TECH</span></div>
            <p>Soluções profissionais em segurança eletrônica para Penedo e região.</p>
          </div>
          <div>
            <h3>Links rápidos</h3>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#segmentos">Segmentos</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h3>Serviços</h3>
            <a href="#servicos">Câmeras de segurança</a>
            <a href="#servicos">Sistemas de alarme</a>
            <a href="#servicos">Cerca elétrica</a>
            <a href="#servicos">Redes e internet</a>
          </div>
          <div>
            <h3>Contato</h3>
            <p><Phone size={16} /> (79) 9 9847-8570</p>
            <p><Mail size={16} /> primetech360al@gmail.com</p>
            <p><MapPin size={16} /> Penedo e região</p>
          </div>
        </div>
        <div className="copyright">© 2026 PrimeTech. Todos os direitos reservados.</div>
      </footer>

      
      </main>
  );
}
