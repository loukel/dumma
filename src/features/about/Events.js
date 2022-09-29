import { useEffect, useState } from "react";
import { getEventUsers } from "../../services/eventApi";
import EventCard from "./EventCard";

const Events = () => {
  // const [event1Count, setEvent1Count] = useState('')
  // const [event2Count, setEvent2Count] = useState('')
  const [event3Count, setEvent3Count] = useState('')
  const [event4Count, setEvent4Count] = useState('')
  const [event5Count, setEvent5Count] = useState('')

  useEffect(() => {
    async function getEventCounts() {
      // const event1 = await getEventUsers("1")
      // const event2 = await getEventUsers("2")
      const event3 = await getEventUsers("3")
      const event4 = await getEventUsers("4")
      const event5 = await getEventUsers("5")
      // setEvent1Count(event1.length)
      // setEvent2Count(event2.length)
      setEvent3Count(event3.length)
      setEvent4Count(event4.length)
      setEvent5Count(event5.length)
    }
    getEventCounts()
  }, [])

  return ( 
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Try a Taster Session!</h1>
      <section className='text-gray-800'>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-6'>
          {/* <EventCard 
            imgUrl='/resources/bjj_2.jpg'
            link='/events/1'
            title='BJJ at Maiden Castle Dojo'
            time='5-6pm'
            date='Wed 28th September'
            limit={50}
            usedSlots={event1Count}
          /> */}
          {/* <EventCard 
            imgUrl='/resources/mma_1.jpg'
            link='/events/2'
            title='MMA at Maiden Castle Dojo'
            date='Wed 28th September'
            time='6-7pm'
            limit={50}
            usedSlots={event2Count}
          /> */}
          <EventCard 
            imgUrl='/resources/mma_2.jpg'
            link='/events/3'
            title='MMA at Maiden Castle Dojo'
            date='Sat 1st October'
            time='11-12pm'
            limit={50}
            usedSlots={event3Count}
          />
          <EventCard 
            imgUrl='/resources/bjj_2.jpg'
            link='/events/4'
            title='BJJ at 5th Element'
            date='Sun 2nd October'
            time='11-12pm'
            limit={50}
            usedSlots={event4Count}
          />
          <EventCard 
            imgUrl='/resources/mma_1.jpg'
            link='/events/5'
            title='Kickboxing at Maiden Castle Dojo'
            date='Sun 2nd October'
            time='5-6pm'
            limit={50}
            usedSlots={event5Count}
          />
        </div>
      </section>
    </div>
  )
}
 
export default Events;