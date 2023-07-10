import { Input, Button } from "react-ui";

export default function Newsletter() {
  return (
    <div className="w-auto text-center">
      <div className=" limited-offer flex items-center justify-center">
        <div className="text bg-slate-900 rounded p-8 ">
          <h3 className="text-gray-400">Limited Offer</h3>
          <h1 className="text-white text-5xl">35% off only this Friday <br /> and get a special gift</h1>
          <Button className="mt-6 text-black bg-white p-6 rounded">Grab it Now</Button>
        </div>
      </div>
      <h3 className="text-3xl m-5 font-bold">
        Subscribe to our Newsletter to get updates <br /> to our latest collections
      </h3>
      <p className="text-gray-500 font-semibold">Get 20% off on your first order just by subscribing to our newsletter</p>
      <form className="w-1/3 my-6 mx-auto flex items-center justify-center">
        <Input className="w-full sm:w-auto py-2 px-4 bg-gray-50 rounded" placeholder="Enter your Email" />
        <Button className="text-white bg-slate-900 p-6 rounded">Subscribe</Button>
      </form>
      <p className="mb-24 text-gray-400">
        You will be able to unsubscribe at any time <br /> 
        Read our Privacy policy <span className="text-slate-900 underline">here</span>
      </p>
    </div>
  );
}
