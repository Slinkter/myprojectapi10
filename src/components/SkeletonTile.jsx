const SkeletonTile = () => {
    return (
        <div className="flex flex-col rounded-xl overflow-hidden bg-surface-primary shadow-md h-full">
            {/* Image Placeholder */}
            <div className="h-40 w-full bg-gray-300 animate-pulse"></div>

            <div className="p-4 w-full flex flex-col flex-grow">
                {/* Category Placeholder */}
                <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>

                {/* Title Placeholder */}
                <div className="h-6 w-full bg-gray-300 rounded animate-pulse mt-2"></div>

                <div className="flex items-center justify-between w-full mt-auto pt-4">
                    {/* Price Placeholder */}
                    <div className="h-8 w-1/3 bg-gray-300 rounded animate-pulse"></div>

                    {/* Button Placeholder */}
                    <div className="h-10 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonTile;
