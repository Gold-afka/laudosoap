// Rastreamento de conversões (Google tag / Google Ads)
// ID da conta Google Ads instalada no <head> em src/routes/__root.tsx
export const GOOGLE_ADS_ID = "AW-18354127780";

// Cole aqui os "rótulos de conversão" gerados no Google Ads
// (Ferramentas > Conversões > criar ação > o snippet mostra "AW-XXXX/ABC123").
// Basta a parte depois da barra. Enquanto estiverem vazios, só o evento comum é enviado.
export const CONVERSION_LABELS = {
  whatsapp: "", // ex.: "AbCdEfGhIj"
  formulario: "", // ex.: "KlMnOpQrSt"
};

type GtagParams = Record<string, unknown>;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

export function trackEvent(name: string, params: GtagParams = {}) {
  gtag("event", name, params);
}

/** Clique em qualquer botão que abre o WhatsApp */
export function trackWhatsappClick(origem: string) {
  trackEvent("whatsapp_click", { origem });
  if (CONVERSION_LABELS.whatsapp) {
    trackEvent("conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.whatsapp}`,
    });
  }
}

/** Envio do formulário "Solicite seu orçamento" */
export function trackQuoteSubmit(servico: string) {
  trackEvent("generate_lead", { origem: "formulario_orcamento", servico });
  if (CONVERSION_LABELS.formulario) {
    trackEvent("conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.formulario}`,
    });
  }
}
