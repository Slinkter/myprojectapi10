/**
 * @description A skeleton loader component for the product tile.
 * @returns {JSX.Element} The JSX for the skeleton tile.
 */
const SkeletonTile = () => {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      {/* Header: Image Skeleton */}
      <div className="h-64 w-full bg-gray-200" />

      {/* Body: Content Skeleton */}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="h-3 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>

        {/* Footer: Price & Action Skeleton */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="h-9 w-24 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonTile;
