import { FaBook, FaPaperPlane } from "react-icons/fa";
import { cn } from "@/shared/lib/cn";

/**
 * @page ReclamationBook
 * @description Reclamation Book (Libro de Reclamaciones) feature page.
 * @returns {JSX.Element} The rendered Reclamation Book page.
 */
export default function ReclamationBook() {
  return (
    <div
      className={cn(
        "flex min-h-screen animate-fade-in items-center justify-center bg-bg-page px-6 py-16 sm:px-12"
      )}
    >
      <div
        className={cn(
          "w-full max-w-2xl rounded-[2.5rem] border border-border bg-surface-card p-10 shadow-premium backdrop-blur-3xl transition-all duration-500 hover:shadow-glass md:p-14"
        )}
      >
        <header className={cn("mb-10 animate-fade-in-up text-center")}>
          <div
            className={cn(
              "mb-6 inline-flex h-16 w-16 rotate-3 transform items-center justify-center rounded-3xl bg-accent/10 text-accent transition-transform duration-300 hover:rotate-0"
            )}
          >
            <FaBook className={cn("text-2xl")} />
          </div>
          <h1 className={cn("mb-2 text-3xl font-black tracking-tight text-text-primary")}>
            Libro de <span className={cn("text-accent")}>Reclamaciones</span>
          </h1>
          <p className={cn("text-sm text-text-secondary")}>
            Tu opinión nos ayuda a mejorar. Registra aquí tus quejas o reclamos oficiales.
          </p>
        </header>

        <form
          className={cn("animate-fade-in-up space-y-6")}
          style={{ animationDelay: "100ms" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2")}>
            <div className={cn("space-y-2")}>
              <label
                className={cn("px-1 text-xs font-black uppercase tracking-widest text-text-muted")}
              >
                Nombres
              </label>
              <input
                type="text"
                className={cn(
                  "h-14 w-full rounded-2xl border border-border bg-bg-subtle px-5 text-sm font-semibold text-text-primary outline-none transition-all placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
                )}
                placeholder="Jose Luis"
              />
            </div>
            <div className={cn("space-y-2")}>
              <label
                className={cn("px-1 text-xs font-black uppercase tracking-widest text-text-muted")}
              >
                DNI / RUC
              </label>
              <input
                type="text"
                className={cn(
                  "h-14 w-full rounded-2xl border border-border bg-bg-subtle px-5 text-sm font-semibold text-text-primary outline-none transition-all placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
                )}
                placeholder="12345678"
              />
            </div>
          </div>

          <div className={cn("space-y-2")}>
            <label
              className={cn("px-1 text-xs font-black uppercase tracking-widest text-text-muted")}
            >
              Email de contacto
            </label>
            <input
              type="email"
              className={cn(
                "h-14 w-full rounded-2xl border border-border bg-bg-subtle px-5 text-sm font-semibold text-text-primary outline-none transition-all placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
              )}
              placeholder="contacto@ejemplo.com"
            />
          </div>

          <div className={cn("space-y-2")}>
            <label
              className={cn("px-1 text-xs font-black uppercase tracking-widest text-text-muted")}
            >
              Detalle del Reclamo
            </label>
            <textarea
              rows={4}
              className={cn(
                "w-full resize-none rounded-2xl border border-border bg-bg-subtle p-5 text-sm font-semibold text-text-primary outline-none transition-all placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-accent"
              )}
              placeholder="Describe detalladamente lo ocurrido..."
            />
          </div>

          <button
            type="submit"
            className={cn(
              "flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-accent font-black uppercase tracking-tighter text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-600 active:scale-95"
            )}
          >
            Enviar Reclamo <FaPaperPlane className={cn("text-xs")} />
          </button>

          <p className={cn("text-center text-[10px] font-bold tracking-tight text-text-muted")}>
            PROTECCIÓN DE DATOS PERSONALES - LEY Nº 29733
          </p>
        </form>
      </div>
    </div>
  );
}
