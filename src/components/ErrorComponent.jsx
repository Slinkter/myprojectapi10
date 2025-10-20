import PropTypes from 'prop-types';

const ErrorComponent = ({ title, message }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div
                className="bg-red-100 border border-accent text-accent px-4 py-3 rounded relative text-center"
                role="alert"
            >
                <h1 className="font-bold">{title}</h1>
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};

ErrorComponent.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorComponent;