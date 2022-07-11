import React from 'react'

const WelcomePgCard = ({ course }) => {
  return (
    <div className="my-card" key={course.module_num}>
        <div className="card-header">
            {course.title}
        </div>
        <div className="card-info">
            <ul className="content-list">
                <li>{"Module ".concat(course.module_num)}</li>
                <li>Intro </li>
                <li>Hari</li>
            </ul>
        </div>
        <div className="card-body">
            {course.description}
        </div>

    </div>
  )
}

export default WelcomePgCard