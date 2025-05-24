import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  // Get products from loader data
  const { products } = useLoaderData();

  return (
    <div className="pt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map(product => {
        const { image, title, price, category } = product;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300 bg-zinc-950"
          >
            <figure className="px-4 pt-2 bg-white">
              <img src={image} alt={image} className="rounded-xl h-64 md:h-48 w-full object-contain" />
            </figure>

            <div className="card-body flex flex-col justify-between pb-2">
              <div>
                <h2 className="card-title capitalize tracking-wide">{title}</h2>
                <span className="w-max h-max mt-2 px-2 pt-1 pb-1.5 flex justify-center items-center rounded-lg bg-violet-900">
                  {category}
                </span>
              </div>

              <span className="text-white text-xl pt-2 text-center">${price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
