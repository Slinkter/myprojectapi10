import PropTypes from 'prop-types';

/**
 * @description A component to display an error message.
 * @param {{title: string, message: string}} props - The props for the component.
 * @param {string} props.title - The title of the error.
 * @param {string} props.message - The error message.
 * @returns {JSX.Element} The JSX for the error component.
 */
const ErrorComponent = ({ title, message }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div
                className="error-alert"
                role="alert"
            >
                <h1 className="font-bold">{title}</h1>
                <span className="block sm:inline">{message}</span>
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