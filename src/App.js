import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    products: [
      {
        name: "Daytona",
        price: 150000,
        priceDots: "150,000.00",
        img: "./img/cosmograph-daytona-1.png",
        description: "A chronograph for the race circuit",
      },
      {
        name: "Submariner",
        price: 100000,
        priceDots: "100,000.00",
        img: "./img/submariner.png",
        description: "A true, divers watch by simple design",
      },
    ],
  };

  render() {
    document.title = "Rolex B&W Limited Edition";

    return (
      <>
        <Hero />
        <Layout>
          <Products products={this.state.products} />
        </Layout>
        <Footer />
      </>
    );
  }
}

export default App;
