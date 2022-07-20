import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'
function update() {


    const handleUpdate = async (e) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'tasks', id)
        try{
          await updateDoc(taskDocRef, {
            title: title,
            description: description
          })
          onClose()
        } catch (err) {
          alert(err)
        }    
      }

  return (
    <div>
        <form onSubmit={handleUpdate} className='editTask' name='updateTask' />

    </div>
  )
}

export default update