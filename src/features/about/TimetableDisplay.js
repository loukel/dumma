import Timetable from 'react-timetable-events'

const TimetableDisplay = () => {
  return ( 
    <section>
      <Timetable
        events={{
          monday: [
            {
              id: 1,
              name: "BJJ W/ REECE",
              type: "custom",
              startTime: new Date("2018-02-23T16:00:00"),
              endTime: new Date("2018-02-23T18:00:00"),
            },
          ],
          wednesday: [
            {
              id: 2,
              name: "MMA W/ REECE",
              type: "custom",
              startTime: new Date("2018-02-23T17:00:00"),
              endTime: new Date("2018-02-23T19:00:00"),
            },
          ],
          saturday: [],
          sunday: [],
        }}
        style={{ height: '500px', fontSize: '30px' }}
        bodyAttributes={{ "className": "font-varela-round" }}
        headerAttributes={{ "className": "font-varela-round bg-primary" }}
        hoursInterval={{ from: 14, to: 22 }}
      />
      <table>
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
      </table>
    </section>
  )
}
 
export default TimetableDisplay;