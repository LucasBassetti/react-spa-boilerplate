import React from 'react';

const helloWorldCode =
`import React from 'react';
// Intro pages
import Installation from './components/docs/pages/intro/Installation';
import HelloWorld from './components/docs/pages/intro/HelloWorld';

const menu = {
  title: 'REACT SPA Boilerplate',
  description: 'A React SPA boilerplate for open source projects',
  homeLink: '/',
  docsLink: '/docs/installation',
  github: {
    user: 'lucasbassetti',
    repository: 'react-spa-boilerplate',
  },
  sections: [
    {
      title: 'Intro',
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/docs/installation',
          title: 'Installation',
          component: <Installation/>,
        },
        {
          href: '/docs/hello-world',
          title: 'Hello World',
          component: <HelloWorld/>,
        },
      ],
    },
    ...
  ],
};

export default menu;
`;

const HelloWorld = () => (
  <div className="docs-hello-world">
    <p>Access the <code>menu.jsx</code> file and edit to your preferences</p>
    <pre>
      <code className="jsx">
        { helloWorldCode }
      </code>
    </pre>
  </div>
);

export default HelloWorld;
