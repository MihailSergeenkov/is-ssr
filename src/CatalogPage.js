import React, { Component } from 'react';
import Catalog from './Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Catalog products={this.props.products}/>;
  }
}

export default CatalogPage;
