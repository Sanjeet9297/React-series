import Login from "./components/Login"
import Profile from "./components/Profile"
import UsercontextProvider from "./context/UserContextProvider"


function App() {

  return (
    <UsercontextProvider>
    <h1>React with Chai</h1>
    <Login/>
    <Profile/>
    </UsercontextProvider>
  )
}

export default App
