import { useEffect, useState } from "react";
import { getEventUsers } from "../../services/eventApi";
import EventCard from "./EventCard";

const Events = () => {
  const [event1Count, setEvent1Count] = useState('')
  const [event2Count, setEvent2Count] = useState('')

  useEffect(async () => {
    const event1 = await getEventUsers("1")
    const event2 = await getEventUsers("2")
    setEvent1Count(event1.length)
    setEvent2Count(event2.length)
  }, [])

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
            limit={50}
            usedSlots={event1Count}
          />
          <EventCard 
            imgUrl='/resources/mma_2.jpg'
            link='/events/2'
            description='Come and try out our MMA taster session!'
            date='Saturday 1st October'
            time='5:00pm'
            duration='(2 hours)'
            limit={50}
            usedSlots={event2Count}
          />
        </div>
      </section>
    </div>
  )
}
 
export default Events;