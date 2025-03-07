import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";
import "animate.css";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-gray-100 to-blue-50">
            <div>
                <img className="w-80" src={errorImg} alt="Error 404" />
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-wide text-gray-800 md:text-5xl">
                Oops! Page Not Found.
            </h1>

            <p className="mt-4 text-lg text-gray-600 md:text-xl">
                Sorry, the page you’re looking for doesn’t exist or has been
                moved.
            </p>

            <Link
                to="/"
                className="relative px-6 py-3 mt-6 overflow-hidden text-lg font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-700"
            >
                    Return to Home
            </Link>
        </div>
    );
};

export default NotFound;