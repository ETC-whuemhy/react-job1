import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React ContextApi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
