import React from 'react';
import MaterialTable from 'material-table';

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
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              })
          }}
          title="All trades"
        />
      </div>
    );
  }
}

export default TradeTable;
