// import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import NavBoard from './Components/NavBoard'

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <NavBoard category={category}/>
    </div>
  )
}

export default App
