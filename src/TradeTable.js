import React from 'react';
import MaterialTable from 'material-table';
import update from 'react-addons-update';
const trades = window.require('electron').remote.getGlobal('database');

class TradeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Ticket No.", field: "ticketNo", editable: 'never' },
        { title: "Instrument", field: "instrument", editable: 'never' },
        { title: "Strategy", field: "strategy", editable: 'onUpdate'},
        { title: "Open Time", field: "openTime", editable: 'never' },
        { title: "Close Time", field: "closeTime", editable: 'never' },
        { title: "Order Type", field: "orderType", editable: 'never' },
        { title: "Net Profit", field: "netProfit", editable: 'never' },
        { title: "Balance", field: "balance", editable: 'never' },
      ],
      data: props.data
    }
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    trades.update({ticketNo: oldData.ticketNo}, { $set: {"strategy": newData.strategy} }, {} , (err, numReplaced) => {
                      err === null ?
                        console.log("The record has been updated successfully.") :
                        console.log('Error during data update. Ticket No: ', oldData.ticketNo, " | ERROR: " , err) ;
                    });

                    const index = this.state.data.indexOf(oldData);
                    this.setState(update(this.state, {
                      data: {
                        [index]: {
                          $set: newData
                        }
                      }
                    }));

                  }
                  resolve();
                }, 200);
              })
          }}
          title="All trades"
        />
      </div>
    );
  }
}

export default TradeTable;
