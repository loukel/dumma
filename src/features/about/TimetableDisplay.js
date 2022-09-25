const TimetableDisplay = () => {
  return ( 
    <section className='text-center'>
      <h1 className="text-3xl font-bold text-center mb-5">Timetable</h1>
      <p className="p-2">Mondays 4-6pm at Maiden Castle Dojo – BJJ w/5th Element</p>
      <p className="p-2">Wednesday 5-7pm at Maiden Castle Dojo – MMA w/Stephen</p> 
      <p className="p-2">Saturday 10-12pm at Maiden Castle Dojo – MMA w/Stephen</p> 
      <p className="p-2">Sunday 10-12pm at 5th Element Dojo – BJJ w/5th Element</p> 
      {/* Use grid instead wtih squares from monday to sunday */}
      {/* <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
        </tr>
        <tr>
          <td>Monday Subject 1</td>
          <td>Tuesday Subject 1</td>
          <td>Wednesday Subject 1</td>
        </tr>
        <tr>
          <td>Monday Subject 2</td>
          <td>Tuesday Subject 2</td>
          <td>Wednesday Subject 2</td>
        </tr>
      </table> */}
    </section>
  )
}
 
export default TimetableDisplay;