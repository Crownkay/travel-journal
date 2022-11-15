import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Data from './data'

export default function App(){
const newElem = Data.map(item =>{
  return <Card 
    key= {item.id}
    item ={item}
  />
})

  return (
    <div>
      <Navbar />
      {newElem}
    </div>
  )
}