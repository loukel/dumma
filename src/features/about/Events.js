import { useEffect, useState } from "react"
import { getEventUsers } from "@/services/eventApi"
import EventCard from "@/components/EventCard"

const Events = () => {
  const [event5Count, setEvent5Count] = useState('')

  useEffect(() => {
    async function getEventCounts() {
      const event5 = await getEventUsers("5")
      setEvent5Count(event5.length)
    }
    getEventCounts()
  }, [])

  return ( 
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Try a Taster Session!</h1>
      <section className='text-gray-800'>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-6'>
          <EventCard 
            imgUrl='/resources/mma_1.jpg'
            link='/events/5'
            title='Kickboxing at Maiden Castle Dojo'
            date='Sun 2nd October'
            time='4-5pm'
            limit={50}
            usedSlots={event5Count}
          />
        </div>
      </section>
    </div>
  )
}
 
export default Events
