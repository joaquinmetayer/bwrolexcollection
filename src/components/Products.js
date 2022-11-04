import { Component } from 'react'
import Product from './Product'

const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 10px 50px 10px',
    maxWidth: '2000px',
    height: '100vh',
  }
}

class Products extends Component {
  render() {
    const { products } = this.props

    return (
      <div style={styles.products}>
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
