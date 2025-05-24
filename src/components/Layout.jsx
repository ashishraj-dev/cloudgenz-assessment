import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Loading } from '../components';

const Layout = () => {
  // GET CURRENT NAVIGATION STATE FROM REACT ROUTER
  const navigation = useNavigation();
  // CHECK IF A PAGE TRANSITION IS CURRENTLY HAPPENING
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main className="align-element py-8">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default Layout;
