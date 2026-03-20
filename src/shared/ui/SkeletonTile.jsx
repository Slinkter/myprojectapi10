import { cn } from "@/shared/lib/cn";
import PropTypes from "prop-types";

/**
 * @component SkeletonTile
 * @description A skeleton loader component for the product tile.
 * @param {object} props
 * @param {string} [props.className]
 * @returns {JSX.Element} The JSX for the skeleton tile.
 */
export function SkeletonTile({ className }) {
  return (
    <div
      className={cn(
        "flex h-full animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm",
        className
      )}
    >
      {/* Header: Image Skeleton */}
      <div className={cn("h-64 w-full bg-gray-200")} />

      {/* Body: Content Skeleton */}
      <div className={cn("flex flex-grow flex-col space-y-4 p-5")}>
        <div className={cn("flex flex-col space-y-2")}>
          <div className={cn("h-3 w-1/3 rounded bg-gray-200")} />
          <div className={cn("h-4 w-3/4 rounded bg-gray-200")} />
        </div>

        {/* Footer: Price & Action Skeleton */}
        <div
          className={cn("mt-auto flex items-center justify-between border-t border-gray-50 pt-4")}
        >
          <div className={cn("h-6 w-1/4 rounded bg-gray-200")} />
          <div className={cn("h-9 w-24 rounded-lg bg-gray-200")} />
        </div>
      </div>
    </div>
  );
}

SkeletonTile.propTypes = {
  className: PropTypes.string,
};

export default SkeletonTile;
