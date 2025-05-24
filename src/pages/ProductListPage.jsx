import ProductsGrid from '../components/ProductsGrid';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async () => {
  // FETCH PRODUCTS DATA AND RETURN IT FOR THE LOADER
  const response = await customFetch(url);
  const products = response.data;
  return { products };
};

const ProductListPage = () => {
  return (
    <>
      <ProductsGrid />
    </>
  );
};

export default ProductListPage;