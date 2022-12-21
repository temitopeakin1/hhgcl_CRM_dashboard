import React from 'react'

const DeleteCard = () => {
  
  const deleteTicket = () => {
    console.log('deleted')
  }
  return (
    <div className='delete-Card'>
      <div className='delete-icon' onClick = {deleteTicket}>x</div>
     
    </div>
  )
}

export default DeleteCard 
 