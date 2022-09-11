import { Link } from "react-router-dom";

const EventCard = ({ imgUrl, link, description, time, date, duration, limit, usedSlots }) => {
  return ( 
    <div className='relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg'
    style={{ backgroundPosition: '50%' }} data-mdb-ripple='true' data-mdb-ripple-color='light'>
      <span className='absolute top-2 right-2 text-white'>
        {usedSlots} / {limit}
      </span>
      <img src={imgUrl} className='w-full' alt='display' />
      <Link onClick={(event) => usedSlots >= limit && event.preventDefault() } to={link}>
        <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='flex justify-start items-end h-full'>
            <div className='text-white m-6'>
            <h3 className='font-bold text-lg'>{time}</h3>
              <h3 className='font-bold text-lg'>{date}</h3>
              <h3 className='font-bold text-lg'>{duration}</h3>
              <p className='text-gray-300'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
 
export default EventCard;