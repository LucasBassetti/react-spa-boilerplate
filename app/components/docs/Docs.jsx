import React from 'react';
import PropTypes from 'prop-types';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import menu from './menu';

require('./Docs.css');

const routes = [];
for (let i = 0, len = menu.length; i < len; i += 1) {
  for (let j = 0, jlen = menu[i].links.length; j < jlen; j += 1) {
    routes[menu[i].links[j].href] = menu[i].links[j];
  }
}

const Docs = (props) => {
  const link = routes[props.link];

  return (
    <div className="docs">
      <Sidebar />
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
};

export default Docs;
