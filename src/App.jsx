import './App.css'
import { useState } from 'react'
import { UserContext } from './context/userContext'
import Header from './Header/Header'
import Main from './Main/Main'

function App() {

  const [email, setEmail] = useState('')

  const updateEmail = (newEmail) => {
    setEmail(newEmail)
  }

  return (
    <UserContext.Provider value={{ email, updateEmail }}>
      <div>
        <Header />
        <Main />
      </div>
    </UserContext.Provider>
  )
}

export default App
