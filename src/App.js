import React, { useState } from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Students from './Component/Students'
import Contact from './Component/Contact'
import DataContext from './Component/DataContext'
import EditStudentPage from './Component/EditStudentPage'

const App = () => {
  const [data,setData] = useState([
    {
      name:'Rakesh',
      age:23,
      course:'MERN',
      batch:'22'
    },
    {
      name:'Vishnu',
      age:25,
      course:'Front-end',
      batch:'23'
    },
    {
      name:'Ansar',
      age:26,
      course:'MEAN',
      batch:'20'
    },
    {
      name:'Santhosh',
      age:24,
      course:'Back-End',
      batch:'22'
    },
    {
      name:'Srikanth',
      age:21,
      course:'MEARN',
      batch:'20'
    }
  ])
  return (
  
      <>
      <div className='main'>
        <nav>
          <h1>WELCOME</h1>
          <ul>
            <li><Link to={'./Comonent/Home'}><button>Home</button></Link></li>
            <li><Link to={'./Component/Students'}><button>Students</button></Link></li>
            <li><Link to={'./Component/Contact'}><button>Contact Us</button></Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path='/Comonent/Home' element={<Home/>}/>
        <Route path='/Component/Students' element={
          <DataContext.Provider value={{ents:data,updatefun:setData}}>
            <Students/>
          </DataContext.Provider>
        }/>
        <Route path='/Component/EditStudentPage' element={
          <DataContext.Provider value={{ents:data,updatefun:setData}}>
            <EditStudentPage/>
          </DataContext.Provider>
        }/>
        <Route path='/Component/Contact' element={<Contact/>}/>
      </Routes>
      </div>
      
      </>

  )
}

export default App
