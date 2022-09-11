import EventCard from "./EventCard";

const Events = () => {
  return ( 
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Try a Taster Session!</h1>
      <section className='text-gray-800'>
        <div className='grid md:grid-cols-2 gap-6'>
          <EventCard 
            imgUrl='/resources/mma_1.jpg'
            link='/events/1'
            description='Come and try out our MMA taster session!'
            time='5:00pm'
            duration='(2 hours)'
            date='Wednesday 28 September'
          />
          <EventCard 
            imgUrl='/resources/mma_2.jpg'
            link='/events/2'
            description='Come and try out our MMA taster session!'
            date='Saturday 1st October'
            time='5:00pm'
            duration='(2 hours)'
          />
        </div>
      </section>
    </div>
  )
}
 
export default Events;