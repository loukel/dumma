import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventUsers } from "@/services/eventApi";
import { getSuggestedQuery } from "@testing-library/react";

const EventPeople = () => {
  const {id: eventId } = useParams()
  const [people, setPeople] = useState() 
  const [filteredPeople, setFilteredPeople] = useState([]) 
  const [query, setQuery] = useState('') 

  useEffect(async () => {
    let result = await getEventUsers(eventId.toString())
    setPeople(result.map(item => item.data))
  }, [])

  useEffect(() => {
    if (query !== '') {
      setFilteredPeople(people.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.email.toLowerCase().includes(query.toLowerCase())))
    }
  }, [query]) 

  console.log(query)

  return ( 
    <div className='flex justify-center flex-col mx-2 sm:mx-10 text-center'>
      <div className='flex flex-row justify-center my-4'>
        <h1 className='text-3xl mt-2 mr-2'>Event Users</h1>
        {query !== '' && <button onClick={() => setQuery('')} class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Reset Filter</button>}
      </div>
      <input
        type="text"
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        value={query}
        placeholder="Search People"
        onChange={e => setQuery(e.target.value)}
      />
      <table className='table-auto text-xs sm:text-base'>
        <thead className='bg-gray-300'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100 text-center'>
          {people && query === '' ? 
            people.map(person => (
              <tr>
                <td className='py-2'>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.experience}</td>
              </tr>
            ))
            :
            filteredPeople.map(person => (
              <tr>
                <td className='py-2'>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.experience}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
 
export default EventPeople