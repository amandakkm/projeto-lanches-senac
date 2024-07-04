import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import { Navbar } from "./components/Navbar"
import LoginFake from "./pages/LoginFake"


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/loginFake" element={<LoginFake />} />
      </Routes>
    </>
  )
}

export default App
