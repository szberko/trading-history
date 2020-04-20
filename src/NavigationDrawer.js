import React from 'react';
import {withRouter, Link, HashRouter, Route, Switch} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from "./Menu";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});


class NavigationDrawer extends React.Component {

  render () {
  const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HashRouter>
          <CssBaseline/>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Clipped drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
          >
            <Toolbar/> {/* Move the components lower because of the Toolbar the top */}
            <div className={classes.drawerContainer}>
              <List>
                {Menu.map((menu) => (
                  <ListItem
                    component={Link}
                    to={{pathname: menu.pathname}}
                    key={menu.label}
                    button
                  >
                      <ListItemIcon>{menu.icon}</ListItemIcon>
                      <ListItemText primary={menu.label}/>
                    </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Toolbar/> {/* Move the components lower because of the Toolbar the top */}
            <Switch>
              {Menu.map((menu) => (
                <Route exact path={menu.pathname} component={menu.component} key={menu.label} />
              ))}
            </Switch>
          </main>
        </HashRouter>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationDrawer);
