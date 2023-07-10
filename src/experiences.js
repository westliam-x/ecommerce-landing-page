import { faTruck, faSmile, faCircleCheck, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTruck, faSmile, faCircleCheck, faClock, faShoppingCart);

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-12 md:mt-24 flex flex-col md:flex-row md:gap-x-80">
        <h2 className="flex-initial font-bold text-3xl w-full md:w-2/6 text-left md:text-center">
          We provide the best <br /> customer experiences
        </h2>
        <div className="border-l-2 border-slate-600 pl-4 md:pl-7 mt-6 md:mt-0">
          <p className="text-slate-400 font-semibold">We ensure our customers have the best shopping experience</p>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 md:mt-20">
        <div>
          <FontAwesomeIcon className=' bg-slate-200 p-4 rounded' icon={faCircleCheck} />
          <h3 className="text-xl py-4">Original Products</h3>
          <p className="text-sm">We provide a money-back guarantee if the products are not original</p>
        </div>
        <div>
          <FontAwesomeIcon className=' bg-slate-200 p-4 rounded' icon={faSmile} />
          <h3 className="text-xl py-4">Satisfaction guarantee</h3>
          <p className="text-sm">We provide the opportunity to exchange your products if you are not satisfied</p>
        </div>
        <div>
          <FontAwesomeIcon className=' bg-slate-200 p-4 rounded' icon={faClock} />
          <h3 className="text-xl py-4">New arrivals every day</h3>
          <p className="text-sm">We update our collection almost every day</p>
        </div>
        <div>
          <FontAwesomeIcon className=' bg-slate-200 p-4 rounded' icon={faTruck} />
          <h3 className="text-xl py-4">Fast, Free shipping</h3>
          <p className="text-sm">We provide fast and free shipping for your orders</p>
        </div>
      </section>
    </div>
  );
}
