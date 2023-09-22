import React from 'react'

export default function Notes(props) {
  return (
    <div className="course-col">
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>
  )
}
