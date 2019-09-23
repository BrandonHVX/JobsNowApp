import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";
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
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date, status },
  profile,
  auth,
  deleteComment
}) => (
  <div style={{ margin: "20px" }}>
    <div className="bg-white">
      {" "}
      <Link to={`/profile/${user}`}>
        <CardHeader
          className="comment-header"
          avatar={
            <img
              style={{ width: "60px", borderRadius: "50%" }}
              src={avatar}
              alt=""
            />
          }
          action={
            <div style={{ color: "white", fontWeight: "lighter" }}>
              <ChatBubbleIcon />
            </div>
          }
          title={name}
          subheader={status}
        ></CardHeader>{" "}
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p className="my-1">{text}</p>
        </Typography>
      </CardContent>
      <CardActions style={{ zIndex: 10 }} disableSpacing>
        <Fragment>
          <div>
            <div
              style={{
                fontSize: "10px",

                fontWeight: "lighter"
              }}
            >
              {" "}
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </div>
          </div>
          <div>
            <IconButton aria-label="show 4 new mails"></IconButton>
          </div>
        </Fragment>

        <IconButton style={{ fontSize: "10px", marginLeft: "auto" }}>
          {!auth.loading && user === auth.user._id && (
            <DeleteIcon
              style={{
                fontSize: "26px",
                paddingBottom: "5px",
                color: "red"
              }}
              onClick={() => deleteComment(postId, _id)}
            />
          )}
        </IconButton>
      </CardActions>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
