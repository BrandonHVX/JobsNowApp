import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import ViewItem from "../posts/ViewItem";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";
import { getPost } from "../../actions/post";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  const classes = useStyles();
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {" "}
      <div className={classes.root}>
        {" "}
        <Link to="/posts" className="btn p-1">
          Back To Posts
        </Link>
        <ViewItem post={post} showActions={false} />
        <div className={useStyles.root}>
          <div>
            <h3 className="large text-primary p-1">Comments</h3>
          </div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <div className="comments">
                {post.comments.map(comment => (
                  <CommentItem
                    key={comment._id}
                    comment={comment}
                    postId={post._id}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CommentForm postId={post._id} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
