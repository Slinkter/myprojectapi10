import PropTypes from "prop-types";

/**
 * @description A component to display an error message.
 * @param {{title: string, message: string}} props - The props for the component.
 * @param {string} props.title - The title of the error.
 * @param {string} props.message - The error message.
 * @returns {JSX.Element} The JSX for the error component.
 */
const ErrorComponent = ({ title, message }) => {
  return (
    <div className="min-h-[50vh] w-full flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-red-50 border border-red-100 text-red-900 px-6 py-8 rounded-2xl shadow-sm text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
          <svg
            className="h-6 w-6 text-red-600"
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
        <h3 className="text-lg leading-6 font-bold text-red-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-red-600">{message}</p>
      </div>
    </div>
  );
};

ErrorComponent.propTypes = {
  /**
   * The title of the error.
   */
  title: PropTypes.string.isRequired,
  /**
   * The error message.
   */
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
