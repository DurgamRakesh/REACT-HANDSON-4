import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext'

const EditStudentPage = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const index = (location.state.data)
  console.log(location.state.data);
  const newobj={
    name: context.ents[index].name,
    age: context.ents[index].age,
    course: context.ents[index].course,
    batch: context.ents[index].batch,

  }
  const ChangeHandle = (e)=>{
    newobj[e.target.name] = e.target.value;
  }
  const Update = (e)=>{
    context.updatefun((p) =>{
      p[index] = newobj;
      return p;
    })
    Navigate('/')
  }
  return (
    <div>
      <input type="text" onChange={ChangeHandle} name='name' placeholder={context.ents[index].name} />
      <button onClick={Update}>update</button>
    </div>
  )
}

export default EditStudentPage