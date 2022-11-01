import CalenderCard from "./CalenderCard"

const Calender = () => {
  return (
    <div className="animate-fade lg:mx-16">
      <div className='text-center flex justify-center flex-col md:flex-row pt-6'>
        <div className='p-4 flex justify-center text-lg'><div className='bg-green-500 mr-2' style={{ width: '20px', height: '20px'}}></div>Internal Competition</div>
        <div className='p-4 flex justify-center text-lg'><div className='bg-red-600 mr-2' style={{ width: '20px', height: '20px'}}></div>External Competition</div>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>November</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-green-500'} title={'K1: In-House Comp'} location={'Durham - MC Dojo'} date={'26th November'}/>
            <CalenderCard colour={'bg-green-500'} title={'BJJ: In-House Comp'} location={'Durham - 5th Element'} date={'27th November'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>December</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-red-600'} title={'BJJ: Open No-Gi'} location='Conventry' date={'3rd December'}/>
            <CalenderCard colour={'bg-red-600'} title={'MMA: GUFS-06'} location='Watford' date={'4th December'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>January</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-red-600'} title={'BJJ: Grappling Industries'} location='Edinburgh' date={'14th January'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>February</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-red-600'} title={'BJJ: Allstars'} location='Manchester' date={'4th February'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>March</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-red-600'} title={'MMA: Inter-Uni MMA Event'} location='Birmingham' date={'26th March'}/>
          </div>
        </section>
      </div>
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-center mb-6'>July</h1>
        <section className='text-gray-800'>
          <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            <CalenderCard colour={'bg-red-600'} title={'BJJ: Grappling Industries'} location='Birmingham' date={'29th July'}/>
          </div>
        </section>
      </div>
    </div>
  )
}
 
export default Calender