import { useEffect, useState } from "react";
import { getMessages } from "@/services/contactUsApi";
import { updateMessage } from "../../services/contactUsApi";

const Messages = () => {
  const [tab, setTab] = useState('new')
  const [messages, setMessages] = useState([])
  const [newMessages, setNewMessages] = useState([])
  const [readMessages, setReadMessages] = useState([])

  useEffect(() => {
    const getMessagesFromApi = async () => {
      const res = await getMessages()
      setMessages(res)
    }
    getMessagesFromApi()
  }, [])

  useEffect(() => {
    setNewMessages(messages.filter(message => !message.data.readAt === true))
    setReadMessages(messages.filter(message => !message.data.readAt === false))
  }, [messages])

  const updateReadAt = async (id, data) => {
    await updateMessage(id, data)

    let newMessages = [...messages]
    newMessages = newMessages.map(message => {
      if (message.ref.id === id) {
        message.data.readAt = data.readAt
      }
      return message
    })
    setMessages(newMessages)
  }

  return (
    <div className='flex justify-center flex-col mx-2 sm:mx-10 text-center'>
      <h1 className='text-3xl mt-2 mr-2'>Messages</h1>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
            <a href="#new" aria-current="page" className={tab === 'new' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"} onClick={() => setTab('new')}>New</a>
        </li>
        <li className="mr-2">
            <a href="#read" className={tab === 'read' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"} onClick={() => setTab('read')}>Read</a>
        </li>
      </ul>
      <table className='table-auto text-xs sm:text-base'>
        <thead className='bg-gray-300'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>At</th>
            <th>Read</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100 text-center'>
          {messages && tab === 'new' 
            ? newMessages.map(message => (
              <tr key={message.ref.id} className='border-b'>
                <td className='py-2'>{message.data.name}</td>
                <td className='bg-gray-50'>{message.data.email}</td>
                <td>{message.data.subject}</td>
                <td className='bg-gray-50'>{message.data.message}</td>
                <td>{new Date(message.data.createdAt).toLocaleDateString("en-UK")}</td>
                <td className='bg-gray-50'><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={message.data.readAt} onChange={e => updateReadAt(message.ref.id, { ...message.data, readAt: e.target.checked ? new Date().toString() : null })}/></td>
              </tr>
            ))
            : readMessages.map(message => (
              <tr key={message.ref.id} className='border-b'>
                <td className='py-2'>{message.data.name}</td>
                <td className='bg-gray-50'>{message.data.email}</td>
                <td>{message.data.subject}</td>
                <td className='bg-gray-50'>{message.data.message}</td>
                <td>{new Date(message.data.createdAt).toLocaleDateString("en-UK")}</td>
                <td className='bg-gray-50'><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={message.data.readAt} onChange={e => updateReadAt(message.ref.id, { ...message.data, readAt: e.target.checked ? new Date().toString() : null })}/></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
 
export default Messages
