import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
