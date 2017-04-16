import React, { Component } from 'react';
import Home from './components/home/Home';
import Docs from './components/docs/Docs';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
    };

    this.goToLink = this.goToLink.bind(this);
  }

  componentDidMount() {
    const self = this;
    $('body').on('click', 'a:not(.external-link)', handleLink);
    self.setState({ link: window.location.hash.replace('#', '') });

    function handleLink(event) {
      event.preventDefault();
      const link = $(this).attr('href');

      if (link !== '#') {
        window.location.hash = link;
        self.setState({ link });
      }
    }
  }

  goToLink(link) {
    this.setState({ link });
  }

  render() {
    const { link } = this.state;
    const isHome = link.indexOf('/docs') < 0;

    return isHome ? (
      <Home
        link={link}
        goToLink={this.goToLink}
      />
    ) : (
      <Docs
        link={link}
        goToLink={this.goToLink}
      />
    );
  }
}

export default App;
