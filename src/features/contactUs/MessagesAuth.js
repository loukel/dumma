import { useEffect, useState } from "react"
import Messages from "./Messages"

const MessagesAuth = () => {
  const pw = process.env.REACT_APP_PASSWORD
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (password !== pw) {
      setPassword(prompt("Password", ""))
    }
    // eslint-disable-next-line
  }, [password])

  if (password === 'password') {
    return <Messages />
  } else {
    return (
      <div className='text-center'>
        Requires Auth
      </div>
    )
  }
}
 
export default MessagesAuth