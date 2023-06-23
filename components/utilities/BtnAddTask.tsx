import React from 'react'

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  return <button className={`btn ${className}`}>Add new task</button>
}

export default BtnAddTask
