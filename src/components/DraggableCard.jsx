import React from 'react'

const DraggableCard = ({title, content}) => {
  return (
    <div style={{fontFamily: "Montserrat, sans-serif"}} className='w-[150px] h-fit flex items-center justify-center py-10 px-15 rounded-xl'>
      <div className="flex items-center w-[70%] bg-emerald-500 rounded-full">
        <p className="text-lg text-center">{title}</p>
      </div>
      <p className="text-lg text-center">{content}</p>
    </div>
  )
}

export default DraggableCard
