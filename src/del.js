import React from 'react'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";

function del() {

    const handleDelete = async () => {
        const taskDocRef = doc(db, 'tasks', id)
        try{
          await deleteDoc(taskDocRef)
        } catch (err) {
          alert(err)
        }
      }

  return (
    <div>
        <button className='task__deleteButton' onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default del