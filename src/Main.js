import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import TradeTable from "./TradeTable";
const trades = window.require('electron').remote.getGlobal('database');

class Main extends React.Component {

  componentDidMount() {
    trades.find({}).sort({closeTime: 1}).exec((err, doc) => {
      this.setState({data: doc});
    });
  }

  render() {
    return (
        <div>
          { this.state && this.state.data &&
            <ResponsiveContainer width='100%' height={700}>
              <LineChart data={this.state.data}>
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="closeTime" />
                <YAxis domain={[0, 30000]}/>
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          }
          { this.state && this.state.data &&
          <TradeTable data={this.state.data}/>
          }
        </div>
    );
  }
}

export default withRouter(Main);