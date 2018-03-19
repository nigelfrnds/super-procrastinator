import React from 'react';

const SideBar = (props) => {
  return (
    <div style={styles.containerStyle}>
      <ul className="nav nav-pills flex-column">
        <h5>Pick your poison</h5>
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#home">reditt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#menu1">{`9GAG`}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#menu2">{`4chan`}</a>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  containerStyle: {
    width: '25%',
    height: "100%",
    backgroundColor: '#eee'
  }
};

export default SideBar;
