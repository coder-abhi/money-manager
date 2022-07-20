import React from 'react'

function Task({id,key,completed, title,description}) {
  return (
    <div>{id}{key}{completed} {title} {description} </div>
  )
}

export default Task