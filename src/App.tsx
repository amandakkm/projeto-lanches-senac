import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
