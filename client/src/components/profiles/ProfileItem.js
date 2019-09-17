import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'
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
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    borderRadius: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'var(--primary-color)'
  },
  media: {
    paddingTop: '20px',

    '&::before': {
      content: `''`,
      zIndex: '-30',
      height: '190%',
      width: '100%',
      backgroundImage: 'linear-gradient(120deg,#eaee44,#33d0ff)',

      backgroundColor: 'var(--light-color)',
      border: '100px solid transparent',
      borderTopColor: 'var(--danger-color)'
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    social
  }
}) => {
  const classes = useStyles()
  return (
    <div className="profiles">
      <Card className={classes.card}>
        <CardMedia className={classes.media}>
          <img src={avatar} alt="" className="round-img-profile" />
        </CardMedia>
        <div className="center">
          <CardContent>
            <div classNam="profile-card-header">
              <CardHeader
                title={name}
                subheader={location && <span>{location}</span>}
              />
            </div>
            <Typography color="textSecondary" component="p">
              <strong>
                <div style={{ color: 'var(--primary-color)' }}>
                  <p>
                    <h3>{company}</h3>
                  </p>
                </div>
              </strong>
              <div style={{ color: 'var(--primary-color)' }}>
                <p> {status}</p>
              </div>

              <div className="profile-top ">
                <div className="icons my-1">
                  {social && social.twitter && (
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </a>
                  )}
                  {social && social.facebook && (
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </a>
                  )}
                  {social && social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x" />
                    </a>
                  )}
                  {social && social.youtube && (
                    <a
                      href={social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  )}
                  {social && social.instagram && (
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </a>
                  )}
                </div>
              </div>
            </Typography>
          </CardContent>{' '}
        </div>
      </Card>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
