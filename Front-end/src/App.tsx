import { Routes, Route } from "react-router-dom"
import Auth from "./Components/Authentication/Auth"
import Signin from "./Components/Authentication/Signin"
import Signup from "./Components/Authentication/Signup";


function App() {

  return (
    <>
      <Auth />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;
