import React from 'react';

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