import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Badge from "@material-ui/core/Badge";

import InsertCommentIcon from "@material-ui/icons/InsertComment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center"
  }
}));

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {
    _id,
    text,
    jobtitle,
    jobtype,
    company,
    location,
    skills,
    salary,
    duties,
    name,
    avatar,
    user,
    likes,
    comments,
    date
  },
  showActions
}) => (
  <div>
    <div className="cards-view">
      <Card>
        {" "}
        <CardHeader
          style={{ fontSize: "40px" }}
          className="post-header"
          title={jobtitle}
        >
          {location}
        </CardHeader>
        <div className={useStyles.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="p">
                {" "}
                <Typography variant="body2" color="textSecondary">
                  <p className="my-1">
                    <strong className="text-primary">Company: </strong>
                    {company}
                  </p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="my-1">
                    <strong className="text-primary">Location: </strong>
                    {location}
                  </p>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="p">
                {" "}
                <Typography variant="body2" color="textSecondary">
                  <p className="my-1">
                    {" "}
                    <strong className="text-primary">Type: </strong> {jobtype}
                  </p>
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="my-1">
                    {" "}
                    <strong className="text-primary">Salary: </strong> {salary}
                  </p>
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12}>
              <div className="p">
                {" "}
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="my-1">
                    {" "}
                    <strong className="text-primary">Summary: </strong> {text}
                  </p>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="p">
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="my-1">
                    {" "}
                    <strong className="text-primary">
                      {" "}
                      Duties/Responsibilities:{" "}
                    </strong>{" "}
                    {duties}
                  </p>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="p">
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className="my-1">
                    <strong className="text-primary"> Qualifications: </strong>{" "}
                    {skills}
                  </p>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <CardActions style={{ zIndex: 10 }} disableSpacing>
          {showActions && (
            <Fragment>
              <div>
                <IconButton
                  className="post-links"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge
                    color="secondary"
                    badgeContent={
                      likes.length > 0 && <span>{likes.length}</span>
                    }
                  >
                    {" "}
                    <FavoriteIcon onClick={() => addLike(_id)} />{" "}
                  </Badge>
                </IconButton>

                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge
                    color="secondary"
                    badgeContent={
                      comments.length > 0 && <span>{comments.length}</span>
                    }
                  >
                    <InsertCommentIcon style={{ color: "black" }} />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 4 new mails">
                  {!auth.loading && user === auth.user._id && (
                    <DeleteIcon
                      style={{
                        fontSize: "26px",
                        paddingBottom: "5px"
                      }}
                      onClick={() => deletePost(_id)}
                    />
                  )}{" "}
                </IconButton>
              </div>
            </Fragment>
          )}
        </CardActions>
      </Card>
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
