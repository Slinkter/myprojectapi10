import PropTypes from "prop-types";
import { cn } from "@/shared/lib/cn";

/**
 * @component ErrorComponent
 * @description A component to display an error message.
 * @param {object} props - The props for the component.
 * @param {string} [props.title] - The title of the error.
 * @param {string} [props.message] - The error message.
 * @returns {JSX.Element} The JSX for the error component.
 */
export function ErrorComponent({
  title = "Error",
  message = "Ha ocurrido un error inesperado.",
  className,
}) {
  return (
    <div className={cn("flex min-h-[50vh] w-full items-center justify-center p-4", className)}>
      <div
        className={cn(
          "w-full max-w-md rounded-2xl border border-red-100 bg-red-50 px-6 py-8 text-center text-red-900 shadow-sm"
        )}
      >
        <div
          className={cn(
            "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
          )}
        >
          <svg
            className={cn("h-6 w-6 text-red-600")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h3 className={cn("mb-2 text-lg font-bold leading-6 text-red-900")}>{title}</h3>
        <p className={cn("text-sm text-red-600")}>{message}</p>
      </div>
    </div>
  );
}

ErrorComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorComponent;
