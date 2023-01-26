import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './DataContext'
import './Students.css'


const Students = () => {
  const context = useContext(DataContext)
  return (
    <>
    <div>
      <h1 className='h1-tag'>Student Data</h1>
    </div>
    <table className='tab'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
          context.ents.map((data,i) =>(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.course}</td>
              <td>{data.batch}</td>
              <td>
                {
                  <Link to='./EditStudentPage' state={{data:i}}>Edit</Link>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default Students