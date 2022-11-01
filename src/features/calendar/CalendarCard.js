const CalendarCard = ({ colour, title, location, date, url }) => {
  return ( 
    <div data-mdb-ripple='true' data-mdb-ripple-color='light' className={'overflow-hidden rounded ' + colour}>
        <a href={url} target='_blank' rel='noreferrer'>
          <div>
            <div className='flex justify-start items-end h-full'>
              <div className='text-white m-6'>
                <h3 className='font-bold text-lg'>{title}</h3>
                <h3 className='text-lg'>{location}</h3>
                <h3 className='text-lg'>{date}</h3>
              </div>
            </div>
          </div>
        </a>
    </div>
  )
}
 
export default CalendarCard