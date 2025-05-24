import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const loader = async ({ params }) => {
  try {
    const response = await customFetch(`/products/${params.id}`);

    // Handle APIs returning empty data instead of 404
    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Response('Product Not Found', { status: 404 });
    }

    return { product: response.data };
  } catch (error) {
    const status = error.response?.status || 404;
    const message = error.response?.data?.message || 'Product Not Found';
    throw new Response(message, { status });
  }
};

const ProductDetailPage = () => {
  // SCROLL TO TOP ON COMPONENT MOUNT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { product } = useLoaderData();
  const { image, title, price, description, category } = product;
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* PRODUCT */}
      <div className="mt-6 max-sm:mt-2 grid gap-y-3 lg:grid-cols-2 lg:gap-y-16 gap-x-6">
        {/* IMAGE */}
        <img src={image} alt={image} className="w-full max-h-[500px] object-contain rounded-lg mx-auto" />

        {/* PRODUCT TITLE */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <p className="mt-3 text-xl">${price}</p>
          <p className="mt-6 leading-6">{description}</p>
          <span className="w-max h-max mt-2 px-2 pt-1 pb-1.5 flex justify-center items-center rounded-lg bg-violet-900">
            {category}
          </span>
          <div className="flex mt-8 w-full justify-center">
            <Link
              to="/products"
              className="btn btn-neutral shadow-[0px_0px_3px_0px_#ffffff] px-4 py-2 text-xl"
            >
              <IoMdArrowRoundBack />
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
