import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    backgroundColor: '#ffffff'
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('')
  const classes = useStyles()
  return (
    <div className="comment-view">
      <div>
        <CardHeader
          className="comment-header"
          action={
            <div
              style={{
                fontSize: '10px',
                color: 'white',
                fontWeight: 'lighter'
              }}
            ></div>
          }
          title="Leave a Comment"
        ></CardHeader>
        <CardContent>
          <form
            onSubmit={e => {
              e.preventDefault()
              addComment(postId, { text })
              setText('')
            }}
          >
            <TextField
              id="multiline-flexible"
              label="Leave a Comment"
              multiline
              rowsMax="15"
              fullWidth="true"
              value={text}
              onChange={e => setText(e.target.value)}
              className={classes.textField}
              variant="outlined"
            />{' '}
          </form>
        </CardContent>
        <CardActions style={{ zIndex: 10 }} disableSpacing>
          <IconButton style={{ fontSize: '10px', marginLeft: 'auto' }}>
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
          </IconButton>
        </CardActions>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(
  null,
  { addComment }
)(CommentForm)
