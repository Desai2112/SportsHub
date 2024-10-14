
import Skeleton from "react-loading-skeleton";

const SkeletonTable = () => {
  return (
    <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            {Array.from({ length: 5 }).map((_, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium">
                <Skeleton width={100} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-300">
              {Array.from({ length: 5 }).map((__, i) => (
                <td key={i} className="px-6 py-4">
                  <Skeleton width={200} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
