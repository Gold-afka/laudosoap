import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-engenheiro.jpg";
import droneImg from "@/assets/obra-drone.jpg";
import trincaImg from "@/assets/trinca.jpg";
import avcbImg from "@/assets/avcb.jpg";

const TITLE = "Laudo Técnico com Engenheiro CREA | BDS Engenharia";
const DESCRIPTION =
  "Laudos técnicos, AVCB, perícias e avaliações com validade jurídica e ART. Engenheiro responsável do diagnóstico ao pós-venda, em todo o Brasil.";

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
          name: "BDS Engenharia",
          description: DESCRIPTION,
          areaServed: "BR",
          serviceType: [
            "Laudo Técnico",
            "Perícia de Engenharia",
            "AVCB",
            "Avaliação de Imóveis",
            "Segurança do Trabalho",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000";

const beneficios = [
  "ART quando aplicável",
  "Atendimento em todo Brasil",
  "Orçamento rápido",
  "Atendimento por Engenheiro",
  "Suporte até a conclusão",
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
  { t: "AVCB", d: "O Corpo de Bombeiros exigiu regularização do seu imóvel." },
  { t: "Trincas", d: "Apareceram fissuras e você precisa saber se há risco." },
  { t: "Infiltração", d: "Umidade que volta sempre e ninguém identifica a origem." },
  { t: "Avaliação de imóvel", d: "Precisa do valor de mercado com respaldo técnico." },
  { t: "Vistoria", d: "Registro do estado do imóvel antes de obra, locação ou venda." },
  { t: "Processo judicial", d: "O juiz ou seu advogado pediu um documento pericial." },
  { t: "Vigilância Sanitária", d: "Exigência de LTA para liberação do funcionamento." },
  { t: "Adequação NR", d: "Fiscalização, GRO, LTCAT e demais exigências trabalhistas." },
];

const etapas = [
  "Solicite um orçamento",
  "Um engenheiro analisa sua necessidade",
  "Agendamos a vistoria",
  "Realizamos a inspeção",
  "Emitimos o laudo",
  "Entregamos toda a documentação",
];

const indicadores = [
  { n: "+320", l: "empresas atendidas" },
  { n: "+1.500", l: "laudos emitidos" },
  { n: "12", l: "anos de experiência" },
  { n: "18", l: "estados atendidos" },
];

const servicos = [
  {
    area: "Engenharia Civil",
    itens: [
      "Laudo de Vistoria Técnica",
      "Laudo de Patologias Construtivas",
      "Laudo de Conformidade Técnica",
      "Laudo de Acessibilidade",
      "Laudo de Perícia Técnica",
      "Laudo de Impacto de Vizinhança",
      "Avaliação de Imóveis",
    ],
  },
  { area: "Segurança Contra Incêndio", itens: ["AVCB", "CLCB", "PAE"] },
  {
    area: "Segurança do Trabalho",
    itens: ["GRO", "LTCAT", "PCMSO", "PPP", "AET", "PCMAT"],
  },
  { area: "Vigilância Sanitária", itens: ["LTA"] },
];

const comparativo = [
  ["Atendimento genérico", "Atendimento consultivo"],
  ["Apenas respondem perguntas", "Engenheiro responsável no atendimento"],
  ["Demoram no orçamento", "Diagnóstico inicial imediato"],
  ["Cliente fala com atendente", "Processo explicado do início ao fim"],
  ["Não explicam o processo", "Suporte completo"],
  ["Entregam e somem", "Pós-venda e orientação"],
];

const glossario = [
  { t: "Laudo", d: "Documento conclusivo sobre a condição técnica avaliada." },
  { t: "Perícia", d: "Documento utilizado em processos judiciais ou administrativos." },
  { t: "Vistoria", d: "Inspeção visual e descritiva do estado do imóvel." },
];

const faq = [
  {
    q: "Quanto custa um laudo técnico?",
    a: "O valor depende da finalidade, metragem, localização e complexidade. Fazemos três perguntas rápidas e enviamos um orçamento correto — sem surpresa depois.",
  },
  {
    q: "Quanto tempo demora?",
    a: "A vistoria costuma ser agendada em poucos dias e o laudo é entregue após a inspeção, conforme a complexidade do caso. O prazo é informado no orçamento.",
  },
  {
    q: "Precisa de ART?",
    a: "Sempre que exigido pela finalidade do documento, a ART é emitida e vinculada ao engenheiro responsável.",
  },
  {
    q: "O laudo tem validade jurídica?",
    a: "Sim. Assinado por profissional habilitado e seguindo as normas técnicas da ABNT, o documento tem validade jurídica.",
  },
  {
    q: "Serve em processo judicial?",
    a: "Sim. Elaboramos documentos para uso judicial e administrativo, com a fundamentação técnica exigida.",
  },
  {
    q: "Quem pode emitir?",
    a: "Somente profissional habilitado e registrado no CREA, dentro das suas atribuições.",
  },
  {
    q: "Posso fazer online?",
    a: "O atendimento, o diagnóstico e a entrega são online. A inspeção é presencial, quando o tipo de laudo exige.",
  },
  {
    q: "Como funciona o processo?",
    a: "Diagnóstico inicial, vistoria, emissão da ART, laudo, orientação sobre o que fazer e acompanhamento pós-entrega.",
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`size-5 shrink-0 ${className}`}
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
      className="size-5 shrink-0 text-muted-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#topo" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-black tracking-tight">BDS</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Engenharia
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#problemas">
              Problemas
            </a>
            <a className="transition-colors hover:text-foreground" href="#processo">
              Como funciona
            </a>
            <a className="transition-colors hover:text-foreground" href="#servicos">
              Serviços
            </a>
            <a className="transition-colors hover:text-foreground" href="#faq">
              Dúvidas
            </a>
          </nav>
          <a
            href={WHATSAPP}
            className="rounded-sm bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Solicitar orçamento
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="surface-deep-panel">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div>
              <p className="eyebrow">Engenheiro responsável · CREA</p>
              <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                Resolva seu problema com um Laudo Técnico emitido por Engenheiro Civil
                registrado no CREA.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-surface-deep-foreground/75">
                Segurança técnica, validade jurídica e atendimento rápido para empresas,
                condomínios, indústrias e imóveis.
              </p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-medium">
                    <Check className="text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="rounded-sm bg-accent px-7 py-4 text-sm font-black uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                </a>
                <a
                  href={WHATSAPP}
                  className="rounded-sm border border-surface-deep-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-surface-deep-foreground/10"
                >
                  Falar com um engenheiro
                </a>
              </div>
            </div>
            <figure className="relative">
              <img
                src={heroImg}
                alt="Engenheiro civil da BDS Engenharia realizando vistoria em fachada com trinca estrutural"
                width={1408}
                height={1104}
                className="w-full rounded-sm object-cover shadow-[var(--shadow-lift)]"
              />
              <figcaption className="absolute bottom-0 left-0 m-4 max-w-[15rem] rounded-sm bg-background/95 p-4 text-xs leading-relaxed text-foreground">
                <strong className="font-display">Vistoria real.</strong> Cada laudo nasce
                de uma inspeção feita por engenheiro, nunca de um modelo pronto.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* PÚBLICOS */}
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Atendemos
            </span>
            {publicos.map((p) => (
              <span key={p} className="font-display text-lg font-bold text-primary/70">
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
            Ninguém acorda querendo comprar um laudo. Escolha a situação parecida com a
            sua e um engenheiro responde com o caminho técnico.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemas.map((p) => (
              <a
                key={p.t}
                href={WHATSAPP}
                className="card-elevated group flex flex-col rounded-sm p-5 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <h3 className="text-lg">{p.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
                  Resolver isso →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* DIFERENCIAL + FOTOS */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Diferencial</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Outras empresas entregam um documento. Nós acompanhamos todo o processo.
              </h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Diagnóstico inicial",
                  "Vistoria",
                  "ART",
                  "Laudo",
                  "Orientação",
                  "Pós-venda",
                ].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 rounded-sm bg-card px-4 py-3 text-sm font-semibold"
                  >
                    <Check className="text-success" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={droneImg}
                alt="Inspeção de fachada de condomínio com drone"
                width={900}
                height={700}
                loading="lazy"
                className="col-span-2 h-56 w-full rounded-sm object-cover"
              />
              <img
                src={trincaImg}
                alt="Medição de trinca em parede de concreto com fissurômetro"
                width={900}
                height={700}
                loading="lazy"
                className="h-44 w-full rounded-sm object-cover"
              />
              <img
                src={avcbImg}
                alt="Vistoria de segurança contra incêndio em corredor hospitalar"
                width={900}
                height={700}
                loading="lazy"
                className="h-44 w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Do primeiro contato à documentação</h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {etapas.map((e, i) => (
              <li key={e} className="bg-card p-6">
                <span className="font-display text-3xl font-black text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold">{e}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* INDICADORES */}
        <section className="surface-deep-panel">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4">
            {indicadores.map((i) => (
              <div key={i.l}>
                <p className="font-display text-4xl font-black text-accent">{i.n}</p>
                <p className="mt-1 text-sm text-surface-deep-foreground/70">{i.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">O que emitimos</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {servicos.map((s) => (
              <div key={s.area} className="card-elevated rounded-sm p-6">
                <h3 className="text-xl">{s.area}</h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.itens.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-px size-4 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-sm border-l-2 border-accent bg-secondary/60 px-5 py-4 text-sm text-muted-foreground">
            Todos os laudos possuem ART quando exigido, seguem as normas técnicas
            aplicáveis, têm validade jurídica e são assinados por profissional habilitado.
          </p>
        </section>

        {/* COMPARATIVO */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-4xl px-5 py-20">
            <p className="eyebrow">Comparativo</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Por que a BDS converte confiança</h2>
            <div className="mt-9 overflow-hidden rounded-sm border border-border">
              <div className="grid grid-cols-2 bg-card">
                <div className="border-r border-border px-5 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Outras empresas
                </div>
                <div className="bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  BDS Engenharia
                </div>
              </div>
              {comparativo.map(([a, b]) => (
                <div key={b} className="grid grid-cols-2 border-t border-border bg-card">
                  <div className="flex items-center gap-2.5 border-r border-border px-5 py-4 text-sm text-muted-foreground">
                    <Cross />
                    {a}
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 text-sm font-semibold">
                    <Check className="text-success" />
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOSSÁRIO */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Entenda a diferença</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Laudo, perícia e vistoria</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {glossario.map((g) => (
              <div key={g.t} className="card-elevated rounded-sm p-6">
                <h3 className="text-lg">{g.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Perguntas que todo cliente faz</h2>
            <div className="mt-8 divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
              {faq.map((f) => (
                <details key={f.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
                    {f.q}
                    <span className="text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="surface-deep-panel">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl">Não espere o problema aumentar.</h2>
            <p className="mt-3 text-surface-deep-foreground/75">
              Fale agora com o engenheiro responsável e receba um diagnóstico inicial antes
              mesmo do orçamento.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP}
                className="rounded-sm bg-whatsapp px-8 py-4 text-sm font-black uppercase tracking-wider text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="tel:+550000000000"
                className="rounded-sm border border-surface-deep-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-surface-deep-foreground/10"
              >
                Ligar agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-display font-black text-foreground">BDS Engenharia</span>{" "}
            — especialistas em proteger patrimônios e garantir conformidade.
          </p>
          <p>Engenheiro responsável registrado no CREA · Atendimento em todo o Brasil</p>
        </div>
      </footer>
    </div>
  );
}
