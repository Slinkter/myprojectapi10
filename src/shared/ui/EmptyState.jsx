import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @description Generic Empty State component for lists or pages.
 * @param {object} props
 * @param {string} props.title - Main message.
 * @param {string} props.description - Subtext description.
 * @param {string} props.actionLabel - Label for the action button.
 * @param {string} props.to - Route path for the action button.
 */
const EmptyState = ({ title, description, actionLabel, to }) => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-dashed border-gray-200">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-gray-400"
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
      <h1 className="text-2xl font-bold mb-3 text-gray-900">{title}</h1>
      <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
        {description}
      </p>
      {actionLabel && to && (
        <Link to={to}>
          <button className="bg-indigo-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {actionLabel}
          </button>
        </Link>
      )}
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  to: PropTypes.string,
};

export default EmptyState;
