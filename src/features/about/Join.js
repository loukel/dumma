import axios from "axios"
import { useState } from "react"

const Welcome = ({name, email, close}) => {
  return ( 
    <div className="lg:w-1/2 md:w-2/3 mx-auto mb-4">
      <div class="relative bg-gray-100 border-t border-b border-gray-500 text-gray-700 px-4 py-3" role="alert">
        <p class="font-bold">Welcome {name}!</p>
        <p class="text-sm">{email} has been added to our mailing list.</p>
        <span onClick={close} class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>
   )
}

const Join = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [college, setCollege] = useState('')
  const [subject, setSubject] = useState('')
  const [graduation, setGraduation] = useState('')
  const [situation, setSituation] = useState('')

  const [message, setMessage] = useState({
    name: '',
    email: '',
    display: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const payload = {
          merge_fields: {
            "FNAME": firstName,
            "LNAME": lastName,
            "COLLEGE": college,
            "MMERGE3": subject,
            "MMERGE4": graduation,
            "MMERGE6": situation,
          },
          email_address: email,
        }
        await axios({
          url: '/.netlify/functions/signup-email',
          method: 'POST',
          data: payload,
        })

        setMessage({
          name: `${firstName} ${lastName}`,
          email,
          display: true,
        })
        clearForm()
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  const validateForm = () => {
    if (firstName === '') {
      alert("Don't forgot to enter your first name!")
      return false
    }

    if (lastName === '') {
      alert("Don't forgot to enter your last name!")
      return false
    }

    if (email === '') {
      alert("Don't forgot to enter your email!")
      return false
    }

    // Check if the email format is valid
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(email)) {
      alert("Please enter a real email!")
      return false
    }

    if (college === '') {
      alert("Don't forgot to enter your college! If you don't have one, select N/A")
      return false
    }

    if (subject === '') {
      alert("Don't forgot to enter your subject! If you don't have one, type 'x'")
      return false
    }

    if (!graduation) {
      alert("Don't forgot to enter your graudation year! If you don't have one, type 'x'")
      return false
    }

    if (!situation) {
      alert("Don't forgot to enter your situation!")
      return false
    }

    return true
  }

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setCollege('')
    setSubject('')
    setGraduation('')
    setSituation('')
  }

  return ( 
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-5 mx-auto">
        {/* Modified banner alert from https://v1.tailwindcss.com/components/alerts */}
        {message.display && 
          <Welcome 
            name={message.name} 
            email={message.email} 
            close={() => setMessage({
              name: '',
              email: '',
              display: false,
            })}
          />
        }
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Join the Mailing List</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Stay up to date with Entrepreneurs Durham and join the revolution!</p>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="firstName" class="leading-7 text-sm text-gray-600">First Name</label>
                <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="lastName" class="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>
            </div>
            <div className='p-2 w-full'>
              <div class="relative">
                <label for="college" class="leading-7 text-sm text-gray-600">College</label>
                <select class="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setCollege(e.target.value)} value={college}>
                  <option value=""></option>
                  <option value="Collingwood">Collingwood</option>
                  <option value="Grey">Grey</option>
                  <option value="Hatfield">Hatfield</option>
                  <option value="John Snow">John Snow</option>
                  <option value="Josephine Butler">Josephine Butler</option>
                  <option value="South">South</option>
                  <option value="St Aidan's">St Aidan's</option>
                  <option value="St Chad's">St Chad's</option>
                  <option value="St Cuthbert's">St Cuthbert's</option>
                  <option value="St Hild &amp; St Bede">St Hild &amp; St Bede</option>
                  <option value="St John's">St John's</option>
                  <option value="St Mary's">St Mary's</option>
                  <option value="Stephenson">Stephenson</option>
                  <option value="Trevelyan">Trevelyan</option>
                  <option value="University (Castle)">University (Castle)</option>
                  <option value="Van Mildert">Van Mildert</option>
                  <option value="Ustinov">Ustinov</option>
                  <option value="N/A">N/A</option>
                </select>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="degree" class="leading-7 text-sm text-gray-600">Degree Subject</label>
                <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setSubject(e.target.value)} value={subject}/>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="graduation" class="leading-7 text-sm text-gray-600">Year of Graduation</label>
                <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-300 focus:ring-2 focus:ring-red-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setGraduation(e.target.value)} value={graduation}/>
              </div>
            </div>
            <div className='p-2 w-full'>
              <div class="relative">
                <label for="situation" class="leading-7 text-sm text-gray-600">Pick your Situation</label>
                <select class="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setSituation(e.target.value)} value={situation}>
                  <option value=""></option>
                  <option value="I run my own business">I run my own business</option>
                  <option value="I have a great business idea">I have a great business idea</option>
                  <option value="I want to start my own business but don't know what">I want to start my own business but don't know what</option>
                  <option value="I want to work with/for (a) start-up(s)">I want to work with/for (a) start-up(s)</option>
                  <option value="I am just here for the skills and some fun">I am just here for the skills and some fun</option>
                </select>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-logo-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleSubmit}>Join</button>
            </div>
          </div>
        </form>
      </div>
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    </section>
   )
}
 
export default Join