import React from "react";
import {withRouter, Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class Dashboard extends React.Component {
  render() {
    return (
        <div>
          <div>Im Dashboard</div>
          <Button
              to={{pathname: '/'}}
              component={Link}>
            Main
          </Button>
        </div>
    )
  }
}

export default withRouter(Dashboard);