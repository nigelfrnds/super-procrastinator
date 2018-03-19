import React, { Component } from 'react';
import DashboardContainer from '../containers/DashboardContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardContainer />
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '-12px',
    marginRight: '12px',
    marginBottom: '-16px'
  },
  contentStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
  },
  sidebarStyle: {
    width: '25%',
    height: "100%",
    backgroundColor: '#eee'
  }
};

export default Dashboard;
