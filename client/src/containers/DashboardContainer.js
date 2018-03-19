import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';

class DashboardContainer extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <SideBar />
        <div style={styles.contentStyle}>
          <h3>Dashboard</h3>
        </div>
      </div>
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

export default DashboardContainer;
