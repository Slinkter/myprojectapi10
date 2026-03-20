import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/cn";

/**
 * @component EmptyState
 * @description Generic Empty State component for lists or pages.
 * @param {object} props
 * @param {string} props.title - Main message.
 * @param {string} [props.description] - Subtext description.
 * @param {string} [props.actionLabel] - Label for the action button.
 * @param {string} [props.to] - Route path for the action button.
 * @returns {JSX.Element}
 */
export function EmptyState({ title = "Sin resultados", description, actionLabel, to, className }) {
  return (
    <div
      className={cn(
        "flex min-h-[60vh] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center",
        className
      )}
    >
      <div
        className={cn("mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50")}
      >
        <svg
          className={cn("h-10 w-10 text-gray-400")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      </div>
      <h1 className={cn("mb-3 text-2xl font-bold text-gray-900")}>{title}</h1>
      {description && (
        <p className={cn("mb-8 max-w-md leading-relaxed text-gray-500")}>{description}</p>
      )}
      {actionLabel && to && (
        <Link to={to}>
          <button
            className={cn(
              "rounded-xl bg-indigo-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            )}
          >
            {actionLabel}
          </button>
        </Link>
      )}
    </div>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default EmptyState;
