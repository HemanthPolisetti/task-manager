import React from 'react'
import Navbar from './Navbar'
import Mainbody from './Mainbody'

const Homepage = ({uri}) => {
  return (
    <div >
      <Navbar/>
      <Mainbody uri={uri}/>
    </div>
  )
}

export default Homepage
