import React from 'react';
import PropTypes from 'prop-types';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import menu from '../../menu';

require('./Docs.css');

const routes = [];
for (let i = 0, len = menu.sections.length; i < len; i += 1) {
  for (let j = 0, jlen = menu.sections[i].links.length; j < jlen; j += 1) {
    const link = menu.sections[i].links[j];
    routes[link.href] = link;
  }
}

const Docs = (props) => {
  const link = routes[props.link];

  return (
    <div className="docs">
      <Sidebar handleLink={props.handleLink} />
      <main>
        {
          link ? (
            <div>
              <Header
                title={link.title}
                description={link.description}
              />
              { link.component }
            </div>
          ) : (
            <Header
              title="404 - Not Found"
              description="Page not found"
            />
          )
        }
      </main>
    </div>
  );
};

Docs.propTypes = {
  link: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired,
};

export default Docs;
