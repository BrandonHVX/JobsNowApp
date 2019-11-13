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
import ProfileTop from '../profile/ProfileTop';








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
    minHeight: '600px',
    backgroundPosition: "center top",
    backgroundSize: "100%",
    backgroundImage: `url(${jobsnowbg})`,
    backgroundRepeat: "no-repeat",

  }



}));


const headerbackground = {

  backgroundPosition: "center ",

  backgroundImage: `url(${jobsnowbg})`,
  backgroundRepeat: "no-repeat",

}




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

        <div>
          <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={headerbackground} >

            <span class="mask bg-gradient-default opacity-1" />

            <div class="container-fluid d-flex align-items-center">
              <div class="row">
                <div class="col-lg-7 col-md-10">
                  <h1 class="display-2 text-white">Hello, {user && user.name}</h1>
                  <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>

                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid mt--7">
            <div class="row">
              <div class="col-xl-4 order-xl-1 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                  <div class="row justify-content-center">
                    <div class="col-lg-3 order-lg-2">
                      <div class="card-profile-image">

                        <img src={user && user.avatar} style={{ width: '200px' }} class="rounded-circle" />

                      </div>
                    </div>
                  </div>

                  <div class="card-body pt-5 pt-md-4 mt-5">
                    <div class="row">
                      <div class="col">
                        <div class="card-profile-stats d-flex justify-content-center mt-md-5">



                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <h4>
                        {user && user.name}
                      </h4>
                      <div class="h5 font-weight-300">
                        <i class="ni location_pin mr-2"></i>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 order-xl-2">
                <div class="card bg-secondary shadow">
                  <div class="card-header bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <h3 class="mb-0">My account</h3>
                      </div>
                      <div class="text-center">
                        <DashboardActions />
                      </div>
                    </div>
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


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
