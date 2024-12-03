import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import HeroSection from './components/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <HeroSection />
    </>
  )
}

export default App
