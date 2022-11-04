import { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {
    const { products } = this.props
    return (
      <div className='products' >
        {products.map(product =>
          <Product
            key={product.name}
            product={product}
          />)}
      </div>
    )
  }
}

export default Products
