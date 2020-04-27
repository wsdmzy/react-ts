import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('add')
    const updateMouse = (e: MouseEvent) => {
      // console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove',updateMouse)
    return () => {  //清除
      console.log('remove')
      document.removeEventListener('mousemove', updateMouse)
    }
  },[])
  return positions
}

export default useMousePosition

