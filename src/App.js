import React, { useState } from 'react'
import Inc from './Inc'
import Dec from './Dec'

function App() {
  const [value, setValue]= useState(1)
  function a(){
    setValue(value+1)
  }
  return (
    <div>


  <Inc data={value} />
  <Dec file={a} />
  <h1>hello</h1>




    </div>
  )
}

export default App
