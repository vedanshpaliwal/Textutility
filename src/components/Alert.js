import React from 'react'

export const Alert = (props) => {
    const capitilize = (word)=>{
        const lower = word.toLowerCase()
        return  lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
        <strong>{capitilize(props.alert.type)}  </strong> : {props.alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    )
}

export default Alert