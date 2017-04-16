import React from 'react';
// Intro
import Installation from './pages/intro/Installation';
import HelloWorld from './pages/intro/HelloWorld';
// Examples
import Example1 from './pages/examples/Example1';
import Example2 from './pages/examples/Example2';
// API Referece
import Component1 from './pages/reference/Component1';
// Others
import Contribute from './pages/others/Contribute';
import Github from './pages/others/Github';

const menu = [
  {
    title: 'Intro',
    icon: 'fa fa-arrow-right',
    links: [
      {
        href: '/docs/installation',
        title: 'Installation',
        component: <Installation />,
      },
      {
        href: '/docs/hello-world',
        title: 'Hello World',
        component: <HelloWorld />,
      },
    ],
  },
  {
    title: 'Examples',
    icon: 'fa fa-code',
    links: [
      {
        href: '/docs/example1',
        title: 'Example 1',
        component: <Example1 />,
      },
      {
        href: '/docs/example2',
        title: 'Example 2',
        component: <Example2 />,
      },
    ],
  },
  {
    title: 'API Reference',
    icon: 'fa fa-cogs',
    links: [
      {
        href: '/docs/component1',
        title: 'Component 1',
        description: 'Description of component 1',
        component: <Component1 />,
      },
    ],
  },
  {
    title: 'Others',
    icon: 'fa fa-th',
    links: [
      {
        href: '/docs/contribute',
        title: 'How to Contribute',
        component: <Contribute />,
      },
      {
        href: '/docs/github',
        title: 'Github Page',
        component: <Github />,
      },
    ],
  },
];

export default menu;
