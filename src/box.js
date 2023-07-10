import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Box(props) {
  return (
    <div className="object-cover">
      <img className="w-full h-3/4 mr-8 rounded-md object-cover" src={props.img} alt="Box Image" />
      <div>
        <div className="flex items-center justify-between">
        <div>
        <p  >{props.label}</p>
        <p className='text-2xl font-normal'>{props.text}</p>
          <p className=" font-bold text-xl text-base">{props.price}</p>
        </div>
          {props.icon && <FontAwesomeIcon color='white ' className=' bg-slate-800 p-4 m-2 rounded' icon={props.icon} size="1x" />}
        </div>
      </div>
    </div>
  );
}
