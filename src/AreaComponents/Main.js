import React from 'react';
import './css/main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
          {this.props.children}
      </main>
    );
  }
}

export default Main;