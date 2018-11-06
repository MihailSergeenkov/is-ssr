import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CatalogPage from './src/CatalogPage';
import products from './constants/Products';

const render = () => {
  return ReactDOMServer.renderToString(<CatalogPage products={products} />);
};

export default render;
