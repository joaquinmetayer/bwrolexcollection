import { Component } from "react";

const styles = {
  product: {
    width: "400px",
    padding: "20px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
  },
  img: {
    width: "100%",
  },
  productTitle: {
    fontSize: '30px',
    paddingTop: '12px',
    textTransform: 'uppercase',
  },
  productPrice:{
    fontSize: '30px',
  },
  productDescription:{
    fontSize: '23px',
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
        <p style={styles.productDescription}>{product.description}</p>
        <p style={styles.productPrice}>$ {product.priceDots}</p>
      </div>
    );
  }
}

export default Product;