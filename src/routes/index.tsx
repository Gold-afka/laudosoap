import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-engenheiro.jpg";
import droneImg from "@/assets/obra-drone.jpg";
import trincaImg from "@/assets/trinca.jpg";
import avcbImg from "@/assets/avcb.jpg";

const TITLE = "Laudos Técnicos com Engenheiro CREA | Oap Engenharia";
const DESCRIPTION =
  "Laudos de engenharia civil, AVCB, perícias, LTA e programas de segurança do trabalho com ART e validade jurídica. Orçamento rápido com engenheiro responsável, em todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Oap Engenharia",
          description: DESCRIPTION,
          areaServed: "BR",
          serviceType: [
            "Laudo de Vistoria Técnica",
            "Laudo de Acessibilidade",
            "Laudo de Patologias Construtivas",
            "Laudo de Conformidade Técnica",
            "Perícia Técnica",
            "AVCB e CLCB",
            "LTCAT",
            "PCMSO",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5500000000000";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const DEFAULT_WA = waLink(
  "Olá! Vim pelo site da Oap Engenharia e preciso de um orçamento de laudo técnico.",
);

const heroBullets = [
  "ART emitida quando exigido",
  "Engenheiro responsável no atendimento",
  "Atendimento em todo o Brasil",
  "Orçamento no mesmo dia útil",
];

const publicos = [
  "Condomínios",
  "Hospitais",
  "Indústrias",
  "Escolas",
  "Igrejas",
  "Construtoras",
];

const problemas = [
  { t: "AVCB vencido", d: "O Corpo de Bombeiros exigiu regularização da edificação." },
  { t: "Trincas na estrutura", d: "Fissuras apareceram e você precisa saber se há risco." },
  { t: "Infiltração", d: "Umidade que sempre volta e ninguém identifica a origem." },
  { t: "Venda ou locação", d: "Registro do estado do imóvel antes de fechar negócio." },
  { t: "Processo judicial", d: "O juiz ou seu advogado pediu documento pericial." },
  { t: "Vigilância Sanitária", d: "LTA exigido para liberar clínica, hospital ou consultório." },
  { t: "Fiscalização do trabalho", d: "GRO, LTCAT, PCMSO ou PPP cobrados pela fiscalização." },
  { t: "Acessibilidade", d: "Adequação obrigatória à NBR 9050 em prédios e condomínios." },
];

const catalogoCivil = [
  {
    n: "Laudo de Vistoria Técnica",
    d: "Registra o estado do imóvel antes de reformas, locações ou negociações.",
  },
  {
    n: "Laudo de Acessibilidade",
    d: "Verifica conformidade com as normas de acessibilidade para pessoas com deficiência.",
  },
  {
    n: "Laudo de Patologias Construtivas",
    d: "Identifica fissuras, infiltrações, recalques e outros problemas.",
  },
  {
    n: "Laudo de Conformidade Técnica",
    d: "Confirma se a obra atende às normas da ABNT e às legislações locais.",
  },
  {
    n: "PAE – Plano de Abandono em Emergência",
    d: "Procedimentos de evacuação e resposta a emergências da edificação.",
  },
  {
    n: "Laudo de Impacto de Vizinhança",
    d: "Avalia os efeitos do empreendimento sobre o entorno urbano.",
  },
  {
    n: "LTA – Laudo Técnico de Avaliação",
    d: "Documento técnico exigido pela Vigilância Sanitária.",
  },
  {
    n: "Laudo de Perícia Técnica",
    d: "Análise detalhada para processos judiciais e administrativos.",
  },
  {
    n: "Laudo de Bombeiro (AVCB / CLCB)",
    d: "Regularização da edificação junto ao Corpo de Bombeiros.",
  },
];

const catalogoTrabalho = [
  {
    n: "GRO",
    d: "Gerenciamento de Riscos Ocupacionais: processo contínuo de identificação, avaliação e controle de riscos.",
  },
  {
    n: "LTCAT",
    d: "Laudo Técnico das Condições Ambientais do Trabalho: usado para aposentadoria especial, identifica exposição a agentes nocivos.",
  },
  {
    n: "PCMSO",
    d: "Programa de Controle Médico de Saúde Ocupacional: monitoramento da saúde dos trabalhadores.",
  },
  {
    n: "PPP",
    d: "Perfil Profissiográfico Previdenciário: histórico laboral exigido pelo INSS.",
  },
  {
    n: "AET",
    d: "Análise Ergonômica do Trabalho: avalia condições ergonômicas e riscos relacionados.",
  },
  {
    n: "PCMAT",
    d: "Programa de Condições e Meio Ambiente de Trabalho na Construção Civil: obrigatório em obras com mais de 20 trabalhadores.",
  },
];

const setores = [
  {
    t: "Arquitetura",
    d: "Projeto que valoriza o metro quadrado antes da primeira parede subir.",
    i: ["Projetos residenciais, comerciais e industriais", "Interiores e paisagismo", "Projeto em BIM"],
  },
  {
    t: "Engenharia Civil",
    d: "Estrutura calculada para não virar problema (nem processo) depois.",
    i: ["Projeto e cálculo estrutural", "Fundações", "Obras hidráulicas e saneamento"],
  },
  {
    t: "Engenharia Elétrica e Mecânica",
    d: "Energia e clima dimensionados para a carga real da sua operação.",
    i: ["Instalações elétricas", "Iluminação e automação predial", "Climatização e ventilação"],
  },
  {
    t: "Engenharia Ambiental",
    d: "Conformidade ambiental sem interditar sua obra. Engenheiro ambiental próprio.",
    i: ["Gestão de resíduos", "Drenagem urbana", "Saneamento e sustentabilidade"],
  },
  {
    t: "Construção de Edifícios",
    d: "Obra tocada com prazo, custo e qualidade em relatório — não em promessa.",
    i: ["Residenciais e comerciais", "Industriais", "CNAE Divisão 41"],
  },
  {
    t: "Infraestrutura",
    d: "Obra pesada com engenharia que aguenta carga, tráfego e fiscalização.",
    i: ["Estradas e pontes", "Ferrovias", "Portos e aeroportos"],
  },
  {
    t: "Serviços Especializados",
    d: "A execução técnica que a maioria das construtoras terceiriza mal.",
    i: [
      "Alvenaria, chapisco, reboco e revestimentos",
      "Impermeabilização e limpeza de fachada",
      "Andaimes, poços e manutenção predial",
    ],
  },
  {
    t: "Mão de Obra Operacional",
    d: "Equipe qualificada e regularizada, pronta para entrar na sua obra.",
    i: [
      "Pedreiros, eletricistas e encanadores",
      "Pintores e acabamento",
      "Operadores de guindaste, grua e elevador de obra",
    ],
  },
];

const perfis = [
  {
    t: "Condomínios e síndicos",
    d: "Fissura, infiltração ou AVCB vencido viram responsabilidade do síndico. Documentamos o risco antes da assembleia cobrar.",
    i: ["Inspeção predial", "Laudo de fachada", "AVCB / acessibilidade"],
  },
  {
    t: "Escritórios de advocacia",
    d: "Assistência técnica que não deixa o laudo do perito passar sem contestação.",
    i: ["Assistente técnico", "Quesitos e impugnação", "Usucapião / retificação"],
  },
  {
    t: "Construtoras e incorporadoras",
    d: "Vizinho reclamando de trinca custa muito mais caro do que uma cautelar feita antes.",
    i: ["Cautelar de vizinhança", "Qualidade de obra", "Manual do proprietário"],
  },
  {
    t: "Imobiliárias e bancos",
    d: "Valor de imóvel defendido com metodologia NBR 14653 — não com achismo de mercado.",
    i: ["Avaliação de imóveis", "Vistoria de entrada e saída", "Conflitos"],
  },
  {
    t: "Indústrias e empresas",
    d: "Fiscalização não avisa que vem. Deixamos a documentação técnica pronta antes.",
    i: ["Laudos NR", "LTCAT / GRO", "Conformidade elétrica"],
  },
  {
    t: "Pessoa física",
    d: "Comprou, reformou e apareceu problema? A gente prova tecnicamente de quem é a culpa.",
    i: ["Vício construtivo", "Patologias", "Auditoria de contrato"],
  },
];

const preparar = [
  { t: "Endereço completo", d: "Local exato da vistoria, com cidade e CEP." },
  { t: "Há quanto tempo acontece", d: "Quando o problema apareceu e se está piorando." },
  { t: "Fotos do local", d: "Mesmo de celular: fissuras, manchas, infiltrações." },
  { t: "Plantas, se existirem", d: "Projeto, memorial ou documentos anteriores ajudam no escopo." },
];



const tiposDoc = [

  {
    t: "Laudo Técnico",
    f: "Documento conclusivo sobre condições, defeitos ou causas em obras e ambientes.",
    s: "Cliente, empresa ou órgão público",
  },
  {
    t: "Perícia Técnica",
    f: "Análise detalhada, geralmente em processos judiciais ou administrativos.",
    s: "Juiz ou autoridade competente",
  },
  {
    t: "Vistoria Técnica",
    f: "Inspeção visual e descritiva do estado de conservação ou conformidade.",
    s: "Livre, conforme contrato",
  },
];

const pontos = [
  {
    t: "Obrigatoriedade da ART",
    d: "Todo laudo ou perícia deve ser vinculado a um engenheiro registrado no CREA.",
  },
  {
    t: "Validade jurídica",
    d: "Laudos e perícias têm valor probatório em disputas judiciais e administrativas.",
  },
  {
    t: "Segurança e conformidade",
    d: "Além de proteger trabalhadores e usuários, são exigidos por órgãos públicos e seguradoras.",
  },
];

const etapas = [
  { t: "Solicite o orçamento", d: "Você descreve a situação em 1 minuto, pelo formulário ou WhatsApp." },
  { t: "Diagnóstico do engenheiro", d: "Analisamos a necessidade e indicamos o documento correto." },
  { t: "Agendamento da vistoria", d: "Definimos data, escopo e prazo antes de qualquer cobrança." },
  { t: "Inspeção técnica", d: "Levantamento em campo com registro fotográfico e medições." },
  { t: "Emissão do laudo e ART", d: "Documento assinado por profissional habilitado." },
  { t: "Entrega e pós-venda", d: "Orientação sobre o que fazer e suporte até a resolução." },
];

const comparativo = [
  ["Atendimento genérico por atendente", "Atendimento consultivo com engenheiro responsável"],
  ["Só respondem preço", "Diagnóstico inicial antes do orçamento"],
  ["Orçamento demora dias", "Retorno no mesmo dia útil"],
  ["Processo não explicado", "Cada etapa explicada por escrito"],
  ["Entrega o PDF e encerra", "Orientação e pós-venda até a conclusão"],
];

const indicadores = [
  { n: "+320", l: "empresas atendidas" },
  { n: "+1.500", l: "laudos emitidos" },
  { n: "12 anos", l: "de experiência técnica" },
  { n: "18", l: "estados atendidos" },
];

const faq = [
  {
    q: "Quanto custa um laudo técnico?",
    a: "O valor depende da finalidade, metragem, localização e complexidade. Por isso fechamos o orçamento após um diagnóstico inicial rápido e gratuito, sem compromisso.",
  },
  {
    q: "Quanto tempo demora?",
    a: "A vistoria costuma ser agendada em poucos dias e o laudo é entregue após a inspeção. O prazo exato vai por escrito no orçamento.",
  },
  {
    q: "Precisa de ART?",
    a: "Sim, sempre que a finalidade exigir. A ART é emitida e vinculada ao engenheiro responsável registrado no CREA.",
  },
  {
    q: "O documento tem validade jurídica?",
    a: "Sim. Assinado por profissional habilitado e seguindo as normas da ABNT, tem valor probatório em disputas judiciais e administrativas.",
  },
  {
    q: "Serve em processo judicial?",
    a: "Sim. Elaboramos perícias e laudos com a fundamentação técnica exigida por juízos e órgãos administrativos.",
  },
  {
    q: "Quem pode emitir?",
    a: "Somente engenheiro registrado no CREA, dentro das suas atribuições profissionais.",
  },
  {
    q: "Posso resolver tudo online?",
    a: "Atendimento, diagnóstico, orçamento e entrega são online. A inspeção é presencial quando o tipo de documento exige.",
  },
  {
    q: "Vocês atendem minha cidade?",
    a: "Atendemos empresas, condomínios, indústrias e imóveis em todo o Brasil. Confirme sua cidade no primeiro contato.",
  },
];

const servicosSelect = [
  ...catalogoCivil.map((c) => c.n),
  ...catalogoTrabalho.map((c) => `${c.n} – Segurança do Trabalho`),
  ...setores.map((s) => `${s.t} – projeto/obra`),
  "Ainda não sei qual preciso",
];


function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`size-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-4 shrink-0 text-muted-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  );
}

function QuoteForm() {
  const [form, setForm] = useState({
    nome: "",
    servico: servicosSelect[0],
    cidade: "",
    tipo: "",
    metragem: "",
    tempo: "",
    descricao: "",
  });

  const mensagem = `Olá! Sou ${form.nome || "(nome)"} e preciso de um orçamento.
Serviço: ${form.servico}
Cidade: ${form.cidade || "-"}
Tipo do imóvel: ${form.tipo || "-"}
Metragem: ${form.metragem || "-"}
Há quanto tempo acontece: ${form.tempo || "-"}
Situação: ${form.descricao || "-"}`;


  const field =
    "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <form
      className="card-elevated rounded-xl p-6 sm:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(mensagem), "_blank", "noopener");
      }}
    >
      <h3 className="text-xl">Solicite seu orçamento</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Seis campos, resposta de um engenheiro no mesmo dia útil.
      </p>
      <div className="mt-5 grid gap-3">
        <input
          className={field}
          placeholder="Seu nome"
          required
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <select
          className={field}
          value={form.servico}
          onChange={(e) => setForm({ ...form, servico: e.target.value })}
        >
          {servicosSelect.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className={field}
            placeholder="Cidade / UF"
            value={form.cidade}
            onChange={(e) => setForm({ ...form, cidade: e.target.value })}
          />
          <input
            className={field}
            placeholder="Tipo do imóvel"
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          />
          <input
            className={field}
            placeholder="Metragem aproximada"
            value={form.metragem}
            onChange={(e) => setForm({ ...form, metragem: e.target.value })}
          />
          <input
            className={field}
            placeholder="Há quanto tempo o problema acontece"
            value={form.tempo}
            onChange={(e) => setForm({ ...form, tempo: e.target.value })}
          />
        </div>
        <textarea
          className={`${field} min-h-[88px] resize-y`}
          placeholder="Descreva rapidamente a situação (o que apareceu, quem está exigindo o documento, prazo)"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        />

      </div>
      <button type="submit" className="btn-pill btn-green mt-5 w-full font-semibold">
        Enviar e falar com o engenheiro
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Sem compromisso. Você recebe o diagnóstico inicial antes de qualquer valor.
      </p>
    </form>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo" className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight">Oap</span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Engenharia
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#problemas">
              Problemas
            </a>
            <a className="transition-colors hover:text-foreground" href="#laudos">
              Laudos
            </a>
            <a className="transition-colors hover:text-foreground" href="#setores">
              Serviços
            </a>
            <a className="transition-colors hover:text-foreground" href="#paraquem">
              Para quem
            </a>


            <a className="transition-colors hover:text-foreground" href="#processo">
              Como funciona
            </a>
            <a className="transition-colors hover:text-foreground" href="#faq">
              Dúvidas
            </a>
          </nav>
          <a href="#orcamento" className="btn-pill btn-dark">
            Solicitar orçamento
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="surface-deep-panel relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-deep-foreground/25 bg-surface-deep-foreground/10 px-3 py-1 text-xs font-medium">
                <span className="size-1.5 rounded-full bg-accent" />
                Engenheiro responsável registrado no CREA
              </span>
              <h1 className="mt-5 text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
                Resolva seu problema com um laudo técnico que tem ART e validade jurídica.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-surface-deep-foreground/75">
                Segurança técnica, conformidade e atendimento rápido para empresas,
                condomínios, indústrias e imóveis — em todo o Brasil.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#orcamento" className="btn-pill btn-green px-7 py-3.5 font-semibold">
                  Solicitar orçamento
                </a>
                <a
                  href={DEFAULT_WA}
                  className="btn-pill btn-outline border-surface-deep-foreground/30 bg-transparent px-7 py-3.5 text-surface-deep-foreground"
                >
                  Falar com um engenheiro
                </a>
              </div>
            </div>
            <figure className="relative">
              <img
                src={heroImg}
                alt="Engenheiro civil da Oap Engenharia em vistoria de fachada com trinca estrutural"
                width={1408}
                height={1104}
                className="w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
              />
              <figcaption className="absolute bottom-4 left-4 max-w-[16rem] rounded-lg bg-background/95 p-4 text-xs leading-relaxed text-foreground">
                <strong className="font-semibold">Vistoria real.</strong> Todo laudo nasce de
                uma inspeção em campo feita por engenheiro, nunca de um modelo pronto.
              </figcaption>
            </figure>
          </div>
        </section>


        {/* PÚBLICOS */}
        <section className="border-b border-border bg-secondary/70">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-9 gap-y-3 px-5 py-5">
            <span className="eyebrow">Atendemos</span>
            {publicos.map((p) => (
              <span key={p} className="text-sm font-medium text-foreground/70">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* PROBLEMAS */}
        <section id="problemas" className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">O ponto de partida</p>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
            Qual problema você precisa resolver?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Ninguém acorda querendo comprar um laudo. Escolha a situação parecida com a sua
            e um engenheiro responde com o caminho técnico correto.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problemas.map((p) => (
              <a
                key={p.t}
                href="#orcamento"
                className="card-elevated group flex flex-col rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
              >
                <h3 className="text-base font-semibold">{p.t}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
                <span className="mt-4 text-xs font-semibold text-accent-deep">
                  Resolver isso →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* LAUDOS */}
        <section id="laudos" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="eyebrow">Laudos em engenharia civil</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">O que emitimos</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Cada documento é elaborado por engenheiro responsável, com ART quando exigido e
              validade jurídica. O valor final é definido após o diagnóstico inicial, sem custo.
            </p>
            <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {catalogoCivil.map((c) => (
                <div key={c.n} className="card-elevated flex flex-col rounded-xl p-6">
                  <h3 className="text-base font-semibold">{c.n}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.d}
                  </p>
                  <a
                    href="#orcamento"
                    className="btn-pill btn-outline mt-4 w-full text-sm hover:bg-secondary"
                  >
                    Orçar este laudo
                  </a>
                </div>
              ))}
            </div>

            <h3 className="mt-14 text-2xl">Segurança e saúde do trabalho</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Programas e laudos obrigatórios para manter sua empresa em conformidade com as
              NRs e com o INSS.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {catalogoTrabalho.map((c) => (
                <div key={c.n} className="rounded-xl bg-card p-5 ring-1 ring-border">
                  <span className="font-mono text-sm font-medium">{c.n}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SETORES */}
        <section id="setores" className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Projeto, obra e mão de obra</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Do desenho à entrega das chaves, com um único responsável técnico
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Contratar cinco fornecedores diferentes é o jeito mais caro de atrasar uma obra.
            Aqui, arquitetura, engenharia, execução e equipe respondem para o mesmo engenheiro.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {setores.map((s) => (
              <div key={s.t} className="card-elevated flex flex-col rounded-xl p-5">
                <h3 className="text-sm font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {s.i.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[11px] leading-tight text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 rounded-xl bg-secondary/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Não achou o seu serviço na lista? Descreva a obra — se for engenharia, a gente
              resolve ou diz na hora quem resolve.
            </p>
            <a href="#orcamento" className="btn-pill btn-green shrink-0 font-semibold">
              Pedir orçamento agora
            </a>
          </div>
        </section>

        {/* PARA QUEM */}
        <section id="paraquem" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="eyebrow">Para quem atendemos</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              O laudo certo depende de quem vai ler ele
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Juiz, síndico, banco e fiscal não leem o mesmo documento. Escolha o seu perfil e
              já falamos a sua língua no primeiro contato.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perfis.map((p) => (
                <div key={p.t} className="card-elevated flex flex-col rounded-xl p-6">
                  <h3 className="text-base font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  <ul className="mt-4 grid gap-1.5">
                    {p.i.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="text-accent-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#orcamento"
                    className="mt-5 text-sm font-semibold text-accent-deep hover:underline"
                  >
                    Solicitar orçamento →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* DIFERENÇA ENTRE DOCUMENTOS */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Entenda antes de contratar</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Laudo, perícia e vistoria</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="hidden grid-cols-[1fr_2fr_1.2fr] bg-secondary text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:grid">
              <div className="px-5 py-3">Tipo</div>
              <div className="px-5 py-3">Finalidade</div>
              <div className="px-5 py-3">Solicitante</div>
            </div>
            {tiposDoc.map((t) => (
              <div
                key={t.t}
                className="grid gap-1 border-t border-border bg-card px-5 py-4 text-sm sm:grid-cols-[1fr_2fr_1.2fr] sm:gap-0 sm:px-0"
              >
                <div className="font-semibold sm:px-5">{t.t}</div>
                <div className="text-muted-foreground sm:px-5">{t.f}</div>
                <div className="text-muted-foreground sm:px-5">{t.s}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {pontos.map((p) => (
              <div key={p.t} className="rounded-xl bg-secondary/70 p-5">
                <h3 className="text-sm font-semibold">{p.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESSO + FOTOS */}
        <section id="processo" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Do primeiro contato à documentação</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {etapas.map((e, i) => (
                <div key={e.t} className="card-elevated rounded-xl p-6">
                  <span className="font-mono text-sm text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold">{e.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <img
                src={droneImg}
                alt="Inspeção de fachada de condomínio com drone"
                width={900}
                height={700}
                loading="lazy"
                className="h-48 w-full rounded-xl object-cover"
              />
              <img
                src={trincaImg}
                alt="Medição de trinca em parede de concreto com fissurômetro"
                width={900}
                height={700}
                loading="lazy"
                className="h-48 w-full rounded-xl object-cover"
              />
              <img
                src={avcbImg}
                alt="Vistoria de segurança contra incêndio em corredor hospitalar"
                width={900}
                height={700}
                loading="lazy"
                className="h-48 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* INDICADORES */}
        <section className="surface-deep-panel">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4">
            {indicadores.map((i) => (
              <div key={i.l}>
                <p className="text-3xl font-semibold tracking-tight">{i.n}</p>
                <p className="mt-1 text-sm text-surface-deep-foreground/70">{i.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARATIVO */}
        <section className="mx-auto max-w-4xl px-5 py-20">
          <p className="eyebrow">Comparativo</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Por que fechar com a Oap</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-2 bg-card">
              <div className="border-r border-border px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Outras empresas
              </div>
              <div className="bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                Oap Engenharia
              </div>
            </div>
            {comparativo.map(([a, b]) => (
              <div key={b} className="grid grid-cols-2 border-t border-border bg-card">
                <div className="flex items-start gap-2.5 border-r border-border px-5 py-4 text-sm text-muted-foreground">
                  <Cross />
                  {a}
                </div>
                <div className="flex items-start gap-2.5 px-5 py-4 text-sm font-medium">
                  <Check className="mt-0.5 text-accent-deep" />
                  {b}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Orçamento</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Antes de falar de preço, entendemos o seu problema.
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Preencha os dados ao lado e o engenheiro responsável retorna com o documento
                indicado, o prazo e o valor fechado — sem custo pelo diagnóstico inicial.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {[
                  "Resposta no mesmo dia útil",
                  "Escopo e prazo por escrito antes da cobrança",
                  "ART emitida quando exigido",
                  "Suporte até a conclusão do processo",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm font-medium">
                    <Check className="text-accent-deep" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Tenha isso em mãos e o orçamento sai hoje
                </h3>
                <ul className="mt-4 grid gap-3">
                  {preparar.map((p) => (
                    <li key={p.t} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 text-accent-deep" />
                      <span>
                        <strong className="font-semibold">{p.t}</strong>{" "}
                        <span className="text-muted-foreground">— {p.d}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={DEFAULT_WA} className="btn-pill btn-outline mt-7 bg-card">
                Prefiro chamar no WhatsApp
              </a>

            </div>
            <QuoteForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Perguntas que todo cliente faz</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {faq.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {f.q}
                  <span className="text-accent-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="surface-deep-panel">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl">Não espere o problema aumentar.</h2>
            <p className="mt-3 text-surface-deep-foreground/75">
              Fale agora com o engenheiro responsável e receba o diagnóstico inicial antes
              mesmo do orçamento.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={DEFAULT_WA} className="btn-pill btn-green px-8 py-3.5 font-semibold">
                Chamar no WhatsApp
              </a>
              <a
                href="#orcamento"
                className="btn-pill btn-outline border-surface-deep-foreground/25 px-8 py-3.5 text-surface-deep-foreground hover:bg-surface-deep-foreground/10"
              >
                Preencher formulário
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-foreground">Oap Engenharia</span> —
            especialistas em proteger patrimônios e garantir conformidade.
          </p>
          <p>Engenheiro responsável registrado no CREA · Atendimento em todo o Brasil</p>
        </div>
      </footer>

      <a
        href={DEFAULT_WA}
        aria-label="Falar no WhatsApp"
        className="btn-pill btn-green fixed bottom-5 right-5 z-50 px-5 py-3.5 text-sm font-semibold shadow-lg"
      >
        Falar com engenheiro
      </a>
    </div>
  );
}
