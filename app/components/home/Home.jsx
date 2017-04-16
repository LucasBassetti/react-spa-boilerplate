import React from 'react';

require('./Home.css');

const home = {
  title: 'REACT SPA Boilerplate',
  description: 'A React SPA boilerplate for open source projects',
  docsLink: '/docs/installation',
  github: {
    user: 'lucasbassetti',
    repository: 'react-spa-boilerplate',
  },
};

const Home = () => {
  const { title, description, docsLink, github } = home;
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
            data-count-href={`${github.user}/${github.repository}/stargazers`}
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
            data-count-href={`${github.user}/${github.repository}/network`}
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
          href={docsLink}
        >
          <i className="fa fa-book" />
          Documentation
        </a>
      </p>
    </div>
  );
};

export default Home;
