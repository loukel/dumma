const TimetableDisplay = () => {
  return ( 
    <section>
      {/* Use grid instead wtih squares from monday to sunday */}
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