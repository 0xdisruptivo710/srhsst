import Link from "next/link";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label="SRH & SST Soluções Empresariais — página inicial"
      className="inline-flex items-center"
    >
      {variant === "dark" ? (
        <span className="inline-flex rounded-lg bg-white px-3 py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="SRH & SST Soluções Empresariais"
            className="h-8 w-auto"
          />
        </span>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/logo.png"
          alt="SRH & SST Soluções Empresariais"
          className="h-11 w-auto"
        />
      )}
    </Link>
  );
}
