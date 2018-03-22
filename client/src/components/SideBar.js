import React from 'react';

const SideBar = (props) => {
  return (
    <div style={styles.containerStyle}>
      <ul className="nav nav-pills flex-column">
        <h6>Pick your poison</h6>
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" onClick={() => props.fetchPosts('all',() => {})} href="#">All</a>
          <hr />
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" onClick={() => props.fetchPosts('reddit',() => {})} href="#">reddit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" onClick={() => props.fetchPosts('9GAG',() => {})} href="#menu1">{`9GAG`}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" onClick={() => props.fetchPosts('4chan',() => {})} href="#menu2">{`4chan`}</a>
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
