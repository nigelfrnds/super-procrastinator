import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

import SideBar from '../components/SideBar';

class DashboardContainer extends Component {
  constructor(props){
    super(props);

    this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts('all', () => {});
  }

  renderPosts() {
    const { posts, title } = this.props;
    console.log('renderPosts: ', posts);
    if(posts !== undefined) {
      return posts.map((post,index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <p>{post.data.author}</p>
            </div>
          </div>
        );
      });
    } else {
      return (
        <p>No new posts!</p>
      );
    }
  }
  render() {
    const { fetchPosts } = this.props;
    return (
      <div style={styles.containerStyle}>
        <SideBar fetchPosts={fetchPosts} />
        <div style={styles.contentStyle}>
          <h3>Dashboard</h3>
          <h5>{this.props.title}</h5>
          {this.renderPosts()}
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

const mapStateToProps = ({ posts }) => {
  const { data } = posts;
  console.log('mstp: ', data);
  return { posts: data.posts, title: data.title };
};

export default connect(mapStateToProps, { fetchPosts })(DashboardContainer);
