import React from 'react';
import { Redirect } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Product from '../pages/Product';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/contact" />,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/product',
    exact: true,
    component: Product,
  },
  {
    path: '/contact',
    exact: true,
    component: Contact,
  },
];

export default routes;
