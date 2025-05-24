import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Error, ProductListPage, ProductDetailPage } from './pages';
import Layout from './components/Layout';
import { ErrorElement } from './components';

// LOADERS
import { loader as productsLoader } from './pages/ProductListPage';
import { loader as singleProductLoader } from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <ProductListPage />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
