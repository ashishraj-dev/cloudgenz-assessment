import { useRouteError, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const ErrorElement = () => {
// RETRIEVE ANY ERROR THAT OCCURRED DURING ROUTE LOADING OR RENDERING
  const error = useRouteError();
  const message =
    error.status === 404
      ? "Product not found - The item you're looking for doesn't exist."
      : 'Something went wrong. Please try again later.';

  return (
    <div className="h-96 flex flex-col items-center justify-center ">
      <h1 className="text-9xl font-semibold mb-4 text-error">{error.status}</h1>
      <p className="text-xl mb-8 text-center">{message}</p>
      <div className="flex gap-4 max-sm:flex-col">
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link to="/products" className="btn btn-neutral shadow-[0px_0px_3px_0px_#ffffff] px-4 py-2 text-xl">
          <IoMdArrowRoundBack />
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
