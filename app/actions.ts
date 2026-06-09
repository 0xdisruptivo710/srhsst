"use server";

export type LeadState = { ok: boolean; message: string } | null;

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const data = {
    nome: String(formData.get("nome") ?? "").trim(),
    empresa: String(formData.get("empresa") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    telefone: String(formData.get("telefone") ?? "").trim(),
    mensagem: String(formData.get("mensagem") ?? "").trim(),
  };

  if (!data.nome || !data.email || !data.telefone) {
    return { ok: false, message: "Preencha nome, e-mail e telefone." };
  }

  // Integração com CRM/AIOS via webhook configurável (env CRM_WEBHOOK_URL).
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          origem: "site-srhsst",
          recebidoEm: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
    } catch (err) {
      console.error("Falha ao enviar lead ao CRM:", err);
      return {
        ok: false,
        message: "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.",
      };
    }
  } else {
    // Sem webhook configurado ainda: registra o lead no log do servidor.
    console.warn("CRM_WEBHOOK_URL não configurada. Lead recebido:", data);
  }

  return {
    ok: true,
    message: "Recebemos seu contato! Em breve a equipe da SRH & SST retornará.",
  };
}
