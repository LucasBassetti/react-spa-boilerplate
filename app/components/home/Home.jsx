import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../menu';

require('./Home.css');

const Home = (props) => {
  const { title, description, docsLink, github } = menu;
  return (
    <div className="home">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="buttons">
        <div className="button">
          <a
            className="github-button"
            href={`https://github.com/${github.user}/${github.repository}`}
            data-style="mega"
            data-count-href={`/${github.user}/${github.repository}/stargazers`}
            data-count-api={`/repos/${github.user}/${github.repository}#stargazers_count`}
            data-count-aria-label="# stargazers on GitHub"
            aria-label={`Star ${github.user}/${github.repository} on GitHub`}
          >
            Star
          </a>
        </div>
        <div className="button">
          <a
            className="github-button"
            href={`https://github.com/${github.user}/${github.repository}/fork`}
            data-style="mega"
            data-count-href={`/${github.user}/${github.repository}/network`}
            data-count-api={`/repos/${github.user}/${github.repository}#forks_count`}
            data-count-aria-label="# forks on GitHub"
            aria-label={`Fork ${github.user}/${github.repository} on GitHub`}
          >
            Fork
          </a>
        </div>
      </div>
      <p className="documentation">
        <a
          className="docs-button"
          onClick={() => props.handleLink(docsLink)}
        >
          <i className="fa fa-book" />
          Documentation
        </a>
      </p>
    </div>
  );
};

Home.propTypes = {
  handleLink: PropTypes.func.isRequired,
};

export default Home;
