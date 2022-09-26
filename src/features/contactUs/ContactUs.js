import cuid from "cuid"
import { useState } from "react"
import { sendMessage } from "@/services/contactUsApi"

const Welcome = ({ close }) => {
  return ( 
    <div className="lg:w-1/2 md:w-2/3 mx-auto mb-4">
      <div className="relative bg-gray-100 border-t border-b border-gray-500 text-gray-700 px-4 py-3" role="alert">
        <p className="font-bold">Your Message has been sent</p>
        <p className="text-sm">We will respond to you (by email) as soon as we can!</p>
        <span onClick={close} className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>
   )
}

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [display, setDisplay] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const data = {
          id: cuid(),
          name,
          email,
          subject,
          message,
          createdAt: new Date().toString(),
        }

        await sendMessage(data)

        setDisplay(true)
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

    if (subject === '') {
      alert("Don't forgot to enter your subject!")
      return false
    }

    if (message === '') { 
      alert("Don't forgot to enter your message!")
      return false
    }

    return true
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return ( 
    <section className="animate-fade text-gray-600 body-font relative mt-12">
      <div className="container px-5 py-5 mx-auto">
        {/* Modified banner alert from https://v1.tailwindcss.com/components/alerts */}
        {display && 
          <Welcome 
            close={() => setDisplay(false)}
          />
        }
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Let us know about your enquiry!</p>
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
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Subject</label>
                <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setSubject(e.target.value)} value={subject}/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Message</label>
                <textarea className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-300 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" rows="4" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-logo-yellow border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg" onClick={handleSubmit}>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs