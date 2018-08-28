import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowBack from '@material-ui/icons/ArrowBack'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuButton: {
    borderColor: 'white',
    color: '#fff',
    margin: 0
  },
  menuIcon: {
    fontSize: '2.35rem',
    marginRight: '.5rem'
  },
  appbar: {
    paddingBottom: '.25rem',
    paddingTop: '.25rem',
  },
  avatar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition:`
      250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
    `,
    borderRadius: 0,
    border: '1px solid white',
    fontWeight: 900,
    height: 50,
    width: 50,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },
  avatarIcon: {
    color: '#fff',
    fontSize: '2rem'
  },
  arrowIcon: {
    fontSize: '1rem'
  }
})

const Header = ({ classes, landing }) => (
  <div className={classes.root}>
    <AppBar
      className={classes.appbar}
      position="static"
      elevation={2}
    >
      <Toolbar>
        <div className={classes.flex}>
          <Avatar
            component={Link}
            className={classes.avatar}
            to="/"
          >
            HN
          </Avatar>
        </div>
        {
          !landing && (
            <div>
              <Button
                className={classes.menuButton}
                component={Link}
                disableRipple
                size="small"
                to="/"
                variant="outlined"
              >
                <ArrowBack className={classes.arrowIcon} /> Back
              </Button>
            </div>
          )
        }
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(Header)