import React from 'react'
import "./Loader.css"

const Loader = ({loader}) => {
  console.log(loader)
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader