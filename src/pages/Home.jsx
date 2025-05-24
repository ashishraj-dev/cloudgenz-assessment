import { Link } from 'react-router-dom';
import sampleImg from '../assets/sampleImg.png';

const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-8 max-lg:px-0 max-sm:pt-0 max-sm:pb-5">
        <div className="flex max-md:flex-col w-full gap-8 max-sm:gap-10 justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold sm:text-6xl break-words whitespace-normal text-primary">
              We’re Transforming the shopping experience
            </h1>
            <p className="text-xl mt-4 max-w-xl">
              Discover a smarter, faster, and more personalized way to browse products. Say goodbye to the old
              hassles — and hello to convenience, innovation, and style tailored just for you.
            </p>
            <div className="mt-8">
              <Link to="/products" className="btn btn-primary text-xl p-5">
                Explore Products
              </Link>
            </div>
          </div>
          <div className=" rounded-box w-full h-[30rem] flex justify-center max-sm:h-auto">
            <img src={sampleImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
