import { useState } from "react"
import { useParams } from "react-router-dom"
import { signUpUser, getEventUsers } from "@/services/eventApi"

const Welcome = ({name, email, close}) => {
  const whatsAppLink = process.env.REACT_APP_WHATSAPP

  return ( 
    <div className="lg:w-1/2 md:w-2/3 mx-auto mb-4">
      <div className="relative bg-gray-100 border-t border-b border-gray-500 text-gray-700 px-4 py-3" role="alert">
        <p className="font-bold">{name} has been signed up</p>
        <p className="text-sm">We hope you enjoy the session! As slots are limited, if you are unable to attend the session it would be greatly appreciated if you let us know in the <a className='font-bold hover:underline' href={whatsAppLink}>DUMMA WhatApps group chat (click to join)</a></p>
        <span onClick={close} className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>
   )
}

const EventSignUp = () => {
  const { id: eventId } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('None')

  const [message, setMessage] = useState({
    name: '',
    email: '',
    display: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        let users = await getEventUsers(eventId.toString())

        if (users.length >= 50) {
          alert("Sorry, this session is full!")
          return
        }

        const data = {
          name,
          email,
          experience,
          createdAt: new Date(),
          eventId,
        }

        await signUpUser(data)

        setMessage({
          name,
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
    if (name === '') {
      alert("Don't forgot to enter your name!")
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

    return true
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setExperience('None')
  }

  let eventTitle = ''
  let eventDisplay = ''
  if (eventId === '1') {
    eventTitle = 'Sign Up to the Taster!'
    eventDisplay = "5:00pm, Wednesday 28 September (2 hours)"
  } else if (eventId === '2') {
    eventTitle = 'Sign Up to the Taster!'
    eventDisplay = "5:00pm, Saturday 1st October (2 hours)"
  } else {
    eventTitle = 'This event does not exist!'
    eventDisplay = ': 0'
  }

  return ( 
    <section className="animate-fade text-gray-600 body-font relative mt-12">
      <div className="container px-5 py-5 mx-auto">
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
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{eventTitle}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{eventDisplay}</p>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)} value={name}/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Experience</label>
                <select className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setExperience(e.target.value)} value={experience}>
                  <option value="None">None</option>
                  <option value="Some">Some</option>
                  <option value="Lots">Lots</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-logo-yellow border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg" onClick={handleSubmit}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
 
export default EventSignUp;