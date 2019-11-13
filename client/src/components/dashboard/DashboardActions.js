import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div className="dash-buttons">



      <Link to="/edit-profile" class="btn btn-sm btn-primary">
        <i className="fas fa-user-circle " /> Edit Profile
      </Link>
      <Link to="/add-experience" class="btn btn-sm btn-primary">
        <i className="fab fa-black-tie" /> Add Experience
      </Link>
      <Link to="/add-education" class="btn btn-sm btn-primary">
        <i className="fas fa-graduation-cap" /> Add Education
      </Link>
      <Link to="/add-post" class="btn btn-sm btn-primary">
        <i className="fas fa-graduation-cap" /> Add Post
      </Link>
    </div>
  )
}

export default DashboardActions
