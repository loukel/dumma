const TimetableDisplay = () => {
  return ( 
    <section className='flex justify-center flex-col'>
      <h1 className="text-3xl font-bold text-center mb-5">Timetable</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 text-center text-lg">
        <div>
          <div className="bg-logo-yellow text-white p-2 rounded m-1 font-bold">Monday</div>
          <div className="p-2 bg-red-200 rounded m-1">
            <div className='font-semibold'>
              BJJ [4-6pm]
            </div>
            <div>
              Maiden Castle Dojo
            </div>
            <div className="italic">
              5th Element
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block">
          <div className="bg-logo-yellow text-white p-2 rounded m-1">Tuesday</div>
        </div> */}
        <div>
          <div className="bg-logo-yellow text-white p-2 rounded m-1 font-bold">Wednesday</div>
          <div className="p-2 bg-green-200 rounded m-1">
            <div className='font-semibold'>
              Open Mat [11-1pm]
            </div>
            <div>
              Maiden Castle Dojo
            </div>
          </div> 
          <div className="p-2 bg-purple-200 rounded m-1">
            <div className='font-semibold'>
              MMA [5-7pm]
            </div>
            <div>
              Maiden Castle Dojo
            </div>
            <div className="italic">
              Itaipava
            </div>
          </div> 
        </div>
        {/* <div className="hidden md:block">
          <div className="max-h-fit hidden md:block bg-logo-yellow text-white p-2 rounded m-1">Thursday</div>
        </div>
        <div className="hidden md:block">
          <div className="bg-logo-yellow text-white p-2 rounded m-1">Friday</div>
        </div> */}
        <div>
          <div className="bg-logo-yellow text-white p-2 rounded m-1 font-bold">Saturday</div>
          <div className="p-2 bg-purple-200 rounded m-1">
            <div className='font-semibold'>
              MMA [10-12pm]
            </div>
            <div>
              Maiden Castle Dojo
            </div>
            <div className="italic">
              Itaipava
            </div>
          </div> 
        </div>
        <div>
          <div className="bg-logo-yellow p-2 rounded m-1 text-white font-bold">Sunday</div>
          <div className="p-2 bg-red-200 rounded m-1">
            <div className='font-semibold'>
              BJJ [10-12pm]
            </div>
            <div>
              5th Element Dojo
            </div>
            <div className="italic">
              5th Element
            </div>
          </div> 
          <div className="p-2 bg-blue-200 rounded m-1">
            <div className='font-semibold'>
              Kickboxing [3-5pm]
            </div>
            <div>
              5th Element Dojo
            </div>
            <div className="italic">
              Ironworks
            </div>
          </div>
        </div>
      </div>
      {/* <p className="p-2">Mondays 4-6pm at Maiden Castle Dojo – BJJ w/5th Element</p>
      <p className="p-2">Wednesday 5-7pm at Maiden Castle Dojo – MMA w/Itaipava</p> 
      <p className="p-2">Saturday 10-12pm at Maiden Castle Dojo – MMA w/Itaipava</p> 
      <p className="p-2">Sunday 10-12pm at 5th Element Dojo – BJJ w/5th Element</p> 
      <p className="p-2">Sunday 3-5pm at Maiden Castle – Kickboxing w/Ironworks</p>  */}
      {/* Use grid instead wtih squares from monday to sunday */}

    </section>
  )
}
 
export default TimetableDisplay