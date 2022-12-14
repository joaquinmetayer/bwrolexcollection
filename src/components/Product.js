import { Component } from "react";

const styles = {
  product: {
    maxWidth: "350px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    textAlign: 'center',
  },
  img: {
    width: "100%",
  },
  productTitle: {
    paddingTop: '12px',
    textTransform: 'uppercase',
  },
  hr:{
    border: '1px solid #000',
    backgroundColor: '#000',
    width: '100px',
  }
};

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img} />
        <hr style={styles.hr}/>
        <h2 style={styles.productTitle}>{product.name}</h2>
        <p>{product.description}</p>
        <p>$ {product.priceDots}</p>
      </div>
    );
  }
}

export default Product;