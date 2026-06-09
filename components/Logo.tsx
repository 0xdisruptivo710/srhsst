import Link from "next/link";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const wordmark = variant === "dark" ? "text-white" : "text-brand-navy";
  const sub = variant === "dark" ? "text-slate-400" : "text-slate-500";
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
        <i className="ph-fill ph-shield-check text-2xl text-brand-green" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-tight ${wordmark}`}>
          SRH <span className="text-brand-green">&amp; SST</span>
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-wider ${sub}`}
        >
          Soluções Empresariais
        </span>
      </span>
    </Link>
  );
}
