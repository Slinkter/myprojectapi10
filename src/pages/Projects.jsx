import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/cn";

/**
 * @description Custom hook for projects data.
 * @returns {{projectsData: Array}}
 */
function useProjects() {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Reimagined",
      category: "Web Development",
      description: "A high-performance online store built with React and FSD architecture.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
    },
    {
      id: 2,
      title: "Design System Glass",
      category: "UI/UX Design",
      description: "A comprehensive design system focusing on glassmorphism and semantic tokens.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "API V1.0 Core",
      category: "Backend",
      description: "Robust RESTful API implementation for modern shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      status: "Live",
    },
  ];
  return { projectsData };
}

/**
 * @page Projects
 * @description Projects page component showcasing the portfolio.
 * @returns {JSX.Element} The rendered Projects page.
 */
export default function Projects() {
  const { projectsData } = useProjects();

  return (
    <div className={cn("min-h-screen bg-bg-page px-6 py-16 sm:px-12")}>
      <header className={cn("mx-auto mb-16 max-w-7xl")}>
        <div
          className={cn(
            "mb-4 inline-flex animate-fade-in items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-bold text-primary"
          )}
        >
          <FaBriefcase className={cn("text-[10px]")} />
          <span>PORTFOLIO</span>
        </div>
        <h1
          className={cn(
            "mb-4 animate-fade-in-up text-4xl font-black tracking-tight text-text-primary md:text-5xl"
          )}
        >
          Nuestros <span className={cn("text-primary")}>Proyectos</span>
        </h1>
        <p
          className={cn("max-w-2xl animate-fade-in-up text-lg leading-relaxed text-text-secondary")}
          style={{ animationDelay: "100ms" }}
        >
          Explora nuestra colección de soluciones digitales diseñadas con los más altos estándares
          de calidad y rendimiento.
        </p>
      </header>

      <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3")}>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "group relative flex animate-fade-in-up flex-col overflow-hidden rounded-3xl border border-border bg-surface-card shadow-premium backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-glass"
            )}
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            {/* Image Wrapper */}
            <div className={cn("relative h-56 overflow-hidden")}>
              <img
                src={project.image}
                alt={project.title}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                )}
              />
              <div className={cn("absolute left-4 top-4")}>
                <span
                  className={cn(
                    "rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-md"
                  )}
                >
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={cn("flex flex-1 flex-col p-8")}>
              <h3
                className={cn(
                  "mb-2 text-xl font-bold text-text-primary transition-colors group-hover:text-primary"
                )}
              >
                {project.title}
              </h3>
              <p className={cn("mb-6 line-clamp-2 text-sm leading-relaxed text-text-secondary")}>
                {project.description}
              </p>

              <div className={cn("mt-auto flex items-center justify-between")}>
                <span className={cn("flex items-center gap-2 text-xs font-bold text-text-muted")}>
                  <div className={cn("h-2 w-2 animate-pulse rounded-full bg-primary")} />
                  {project.status}
                </span>

                <Link
                  to={`/projects/${project.id}`}
                  className={cn(
                    "flex items-center gap-2 text-sm font-black text-primary decoration-2 underline-offset-4 transition-all hover:gap-3"
                  )}
                >
                  Ver Detalle <FaArrowRight className={cn("text-[10px]")} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
