import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import PostForm from "./../posts/PostForm";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import jobsnowbg from "../../img/cooljobsbg.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white"
  },
  text: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white"
  },
  background: {
    backgroundImage: "red",
    backgroundPosition: "center",
    backgroundImage: `url(${jobsnowbg})`,
    backgroundRepeat: "no-repeat"
  }
}));

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading, name, avatar, social, website, company, status }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const classes = useStyles();

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Paper className={classes.background}>
        <div className="dark-overlay-main">
          <div className={classes.root}>
            <div className={classes.paper}>
              <img
                src={user && user.avatar}
                style={{ width: "200px", borderRadius: "50%" }}
              />
            </div>

            <div className={classes.text}>
              Welcome to the Community,
              <p>
                <h1> {user && user.name}</h1>
                <DashboardActions />
              </p>
            </div>
          </div>
        </div>
      </Paper>
      {profile !== null ? (
        <Fragment>
          {/* <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div> */}
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
