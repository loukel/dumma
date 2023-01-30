import CalendarCard from "./CalendarCard"

const Calendar = () => {
  return (
    <div className="animate-fade lg:mx-16">
      <div className='text-center flex justify-center flex-col md:flex-row pt-6'>
        <div className='p-4 flex justify-center text-lg'><div className='bg-green-500 mr-2' style={{ width: '20px', height: '20px'}}></div>Internal Competition</div>
        <div className='p-4 flex justify-center text-lg'><div className='bg-red-600 mr-2' style={{ width: '20px', height: '20px'}}></div>External Competition</div>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>February</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalendarCard colour={'bg-red-600'} title={'BJJ: Allstars'} location='Manchester' date={'4th February'}/>
            <CalendarCard colour={'bg-green-500'} title={'BJJ: In-House Comp'} location="5th Element's Gym" date={'5th February'}/>
            <CalendarCard colour={'bg-red-600'} title='MMA: Inter-Uni MMA Comp' location='Bristol' date={'25th February'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>March</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <CalendarCard colour={'bg-green-500'} title={'MMA: In-House Comp'} location='Maiden Castle' date={'4th March'}/>
            <CalendarCard colour={'bg-red-600'} title={'MMA: Inter-Uni MMA Event'} location='Birmingham' date={'26th March'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>April</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalendarCard colour={'bg-red-600'} title={'BJJ: Scottish Open (ADCC)'} location='Scotland' date={'2nd April'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>July</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalendarCard colour={'bg-red-600'} title={'BJJ: Grappling Industries'} location='Birmingham' date={'29th July'}/>
          </div>
        </section>
      </div>
    </div>
  )
}
 
export default Calendar