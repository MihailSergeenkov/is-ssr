import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <div>
          <Image src={product['imageUrl']} width="150" height="150" alt={product['title']} />
        </div>
        <div>
          <TextBox text={product['title']} />
        </div>
        <div>
          <Price price={product['price']} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
