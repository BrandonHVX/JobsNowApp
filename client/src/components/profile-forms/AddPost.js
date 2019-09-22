import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    jobtitle: '',
    company: '',
    jobtype: '',
    location: '',
    text: '',
    skills: [''],
    salary: '',
    duties: ''
  })

  const {
    text,
    jobtitle,
    jobtype,
    company,
    location,
    skills,
    duties,
    salary
  } = formData
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Fragment>
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Post a Job</h3>
        </div>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault()
            addPost(formData)
          }}
        >
          <div className="form-group">
            <input
              type="text"
              name="jobtitle"
              placeholder="Job Title"
              value={jobtitle}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <select name="jobtype" value={jobtype} onChange={e => onChange(e)}>
              <option>* Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <select name="salary" value={salary} onChange={e => onChange(e)}>
              <option>* Select Salary </option>
              <option value="$35,000-$40,000">$35,000-$40,000</option>
              <option value="$45,000-$50,000">$45,000-$50,000</option>
              <option value="$55,000-$60,000">$55,000-$60,000</option>
              <option value="$65,000-$70,000">$65,000-$70,000</option>
              <option value="$75,000-$80,000">$75,000-$80,000</option>
              <option value="$85,000-$90,000">$85,000-$90,000</option>
              <option value="$95,000-$100,000">$95,000-$100,000</option>
              <option value="$100,000-&Up">$100,000-&Up</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="text"
              placeholder="Job Summary"
              value={text}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="duties"
              placeholder="Job Duties and Responsiblities"
              value={duties}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="skills"
              placeholder="Skills & Qualifications"
              value={skills}
              onChange={e => onChange(e)}
            />
          </div>

          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </Fragment>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(
  null,
  { addPost }
)(PostForm)
