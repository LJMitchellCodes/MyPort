import React, { Component } from 'react';
import '../Loading/style.css';
import { Redirect } from 'react-router-dom';

import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
     this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
   
  }
    
  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
        
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"black"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;