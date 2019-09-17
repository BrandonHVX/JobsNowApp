import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import jobsnow from '../../img/JOBSNOW.png'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav
      className="navbar "
      style={{ backgroundColor: 'var(--primary-color)' }}
    >
      <Link to="/">
        <img src={jobsnow} style={{ width: '90px' }} />
      </Link>

      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt" />{' '}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  )

  const guestLinks = <ul></ul>

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
