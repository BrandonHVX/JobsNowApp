import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from '../auth/Login'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import jobsnow from '../../img/JOBSNOW.png'
import jobsbg from '../../img/cooljobsbg.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '200px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

    color: theme.palette.text.secondary
  }
}))



const pagebg = {
  backgroundImage: `url(${jobsbg})`,

}

const Landing = ({ isAuthenticated }) => {
  const classes = useStyles()
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <body class="login-page sidebar-collapse">



      <div class="page-header clear-filter" filter-color="orange">
        <div class="page-header-image" style={pagebg} ></div>
        <div class="content">
          <div class="container">
            <div class="col-md-4 ml-auto mr-auto">
              <div class="card card-login card-plain">
                <form class="form" method="" action="">
                  <div class="card-header text-center">
                    <div class="logo-container">
                      <img src={jobsnow} alt="" />
                    </div>
                  </div>
                  <div class="card-body">


                    <Login />

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>







    </body>

  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
