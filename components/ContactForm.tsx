"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-navy transition-all placeholder:text-slate-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    null,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="nome" className="block text-sm font-semibold text-slate-700">
            Nome completo <span className="text-brand-green">*</span>
          </label>
          <input id="nome" name="nome" type="text" required className={inputCls} placeholder="Seu nome" />
        </div>
        <div className="space-y-2">
          <label htmlFor="empresa" className="block text-sm font-semibold text-slate-700">
            Empresa
          </label>
          <input id="empresa" name="empresa" type="text" className={inputCls} placeholder="Nome da sua empresa" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
            E-mail <span className="text-brand-green">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="voce@empresa.com.br" />
        </div>
        <div className="space-y-2">
          <label htmlFor="telefone" className="block text-sm font-semibold text-slate-700">
            Telefone / WhatsApp <span className="text-brand-green">*</span>
          </label>
          <input id="telefone" name="telefone" type="tel" required className={inputCls} placeholder="(00) 00000-0000" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-700">
          Como podemos ajudar?
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          className={`${inputCls} resize-none`}
          placeholder="Ex.: preciso atualizar o PGR e o PCMSO e enviar ao eSocial."
        />
      </div>

      {state && (
        <div
          className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${
            state.ok
              ? "bg-brand-green/10 text-brand-green-dark"
              : "bg-red-50 text-red-600"
          }`}
        >
          <i className={`ph-fill ${state.ok ? "ph-check-circle" : "ph-warning-circle"} text-lg`} />
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy py-4 font-bold text-white shadow-md transition-colors hover:bg-brand-navy-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          <>
            <i className="ph-bold ph-spinner animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Solicitar diagnóstico gratuito
            <i className="ph-bold ph-paper-plane-right" />
          </>
        )}
      </button>
      <p className="text-center text-xs font-medium text-slate-400">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
}
