import React from 'react'

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>hello {props.message}</h2>
}

Hello.defaultProps = {
  message: "world"
}

export default Hello