import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Main extends React.Component {


  render() {
    const pv = 1;
    const amt = 1;
    const data = [
      {name: 'Page A', uv: 400, pv: pv, amt: amt},
      {name: 'Page B', uv: 800, pv: pv, amt: amt},
      {name: 'Page C', uv: 300, pv: pv, amt: amt},
      {name: 'Page D', uv: 600, pv: pv, amt: amt},
      {name: 'Page E', uv: 100, pv: pv, amt: amt},
      ];

    return (
        <div>
          <div>Im Main</div>
          <Button
            to={{ pathname: '/dashboard'}}
            component={Link}>
            Dashboard
          </Button>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
    );
  }
}

export default withRouter(Main);