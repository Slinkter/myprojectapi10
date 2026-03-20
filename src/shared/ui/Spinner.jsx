import PropTypes from "prop-types";
import { cn } from "@/shared/lib/cn";

const SIZES = { sm: "w-4 h-4 border-2", md: "w-8 h-8 border-2", lg: "w-12 h-12 border-4" };
const COLORS = { primary: "border-blue-500", white: "border-white", gray: "border-gray-400" };

/**
 * @component Spinner
 * @description A customizable loading spinner.
 * @param {{size?:'sm'|'md'|'lg', color?:'primary'|'white'|'gray', label?:string}} props
 * @returns {JSX.Element}
 */
export function Spinner({ size = "md", color = "primary", label = "Cargando..." }) {
  return (
    <div role="status" aria-label={label} className="inline-flex items-center justify-center">
      <div
        className={cn(
          "animate-spin rounded-full border-transparent border-r-current border-t-current",
          SIZES[size],
          COLORS[color]
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "white", "gray"]),
  label: PropTypes.string,
};
