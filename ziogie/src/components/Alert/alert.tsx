import React from 'react'
import calssnames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

interface AlertProps {
  className?: string;
  altType?: AlertType;
  description?: string;
  title: string;
  closable?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    altType,
    title,
    description,
    closable
  } = props
  const classes = calssnames('alt', className, {
    [`btn-${altType}`]: altType
  })

  return (
    <div
      className={classes}
      >
      <p>{title}</p>
      {
        closable && (
          <button>X</button>
        )
      }
      {
        description && (<p>{description}</p>) 
      }
      
    </div>
  )
}

Alert.defaultProps = {
  altType: AlertType.Default,
  closable: true
}


export default Alert