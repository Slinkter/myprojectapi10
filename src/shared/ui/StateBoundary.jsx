import PropTypes from "prop-types";
import { Spinner } from "./Spinner";
import { ErrorComponent } from "./ErrorComponent";
import { EmptyState } from "./EmptyState";

/**
 * @component StateBoundary
 * @description Orquestador de estados async. Patrón: State Boundary.
 * Evita ternarios anidados en todos los componentes consumidores.
 * @param {{isLoading: boolean, hasError: boolean, errorMessage?: string, isEmpty: boolean, emptyMessage?: string, children: React.ReactNode}} props
 * @returns {JSX.Element}
 * @example
 * <StateBoundary isLoading={isLoading} hasError={!!error} isEmpty={!items.length}>
 *   <ProductGrid />
 * </StateBoundary>
 */
export function StateBoundary({
  isLoading,
  hasError,
  errorMessage,
  isEmpty,
  emptyMessage = "Sin datos",
  children,
}) {
  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spinner size="lg" />
      </div>
    );
  if (hasError) return <ErrorComponent message={errorMessage} />;
  if (isEmpty) return <EmptyState message={emptyMessage} />;
  return children;
}

StateBoundary.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isEmpty: PropTypes.bool,
  emptyMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
};
