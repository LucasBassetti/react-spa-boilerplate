import React, { Component } from 'react';
import Home from './components/home/Home';
import Docs from './components/docs/Docs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
    };

    this.handleLink = this.handleLink.bind(this);
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace('#', '') });
  }

  handleLink(link) {
    window.location.hash = link;
    this.setState({ link });
  }

  render() {
    const { link } = this.state;
    const isHome = link.indexOf('/docs') < 0;

    return isHome ? (
      <Home
        link={link}
        handleLink={this.handleLink}
      />
    ) : (
      <Docs
        link={link}
        handleLink={this.handleLink}
      />
    );
  }
}

export default App;
