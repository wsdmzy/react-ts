import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('add')
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click',updateMouse)
    return () => {  //清除
      console.log('remove')
      document.removeEventListener('click', updateMouse)
    }
  },[])
  console.log('before render')
  return (
    <p>X: {positions.x}  Y: {positions.y}</p>
  )
}

export default MouseTracker