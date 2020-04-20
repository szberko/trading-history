import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Main extends React.Component {
  render() {
    return (
        <div>
          <div>Im Main</div>
          <Button
            to={{ pathname: '/dashboard'}}
            component={Link}>
            Dashboard
          </Button>
        </div>
    );
  }
}

export default withRouter(Main);