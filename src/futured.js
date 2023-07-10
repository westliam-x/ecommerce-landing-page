import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import Box from "./box";

library.add(faCartPlus);

export default function Futured() {
  return (
    <div>
      <h3 className="text-3xl my-10">Futured Products</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Box img="../images/model-5.jpg" text="Casual" price="$58" icon={faCartPlus}/>
          <Box img="../images/model-6.jpg" text="Pink " price="$87" icon={faCartPlus}/>
          <Box img="../images/model-7.jpg" text="sassy" price="$32" icon={faCartPlus}/>
        </div>
      </div>
    </div>
  );
}
