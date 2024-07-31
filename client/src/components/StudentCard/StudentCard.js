import React from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import "./StudentCard.css"
import DeleteImg from "./delete.png"

function StudentCard({_id, name, age, grade, address, phone, email, branch, photo, createdAt, loadStudents}) {

  const deleteStudent = async ()=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/student/${_id}`)

    toast.success(response.data.message)
    

    loadStudents()
  }

  return (
    <div className='student-card'>
      <img src={photo} alt="" className='photo'/>
      <h2 className='name'>{name}( <span className='age'>Age:{age}</span>)</h2>
      <p className='email'>
        Email ID:{email}
      </p>
      <span className='grade'>
        Grade:{grade}
      </span>
      <span className='branch'>
        {branch}
      </span>
      <span className='phone'>
        Mobile No:{phone}
      </span>
      <span className='date'>
        Added on: {new Date(createdAt).toLocaleString()}
      </span>
      <span className='address'>
       Address:{address}
      </span>
      <img src={DeleteImg} alt="" className='delete-icon' onClick={deleteStudent}/>
        <Toaster/>
    </div>
  )
}

export default StudentCard