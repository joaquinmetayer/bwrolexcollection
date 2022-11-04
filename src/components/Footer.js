import { Component } from "react";
import videoFt from "../assets/finalvideo.mp4";

const styles = {
  footer: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#00000095",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: 'center',
    position: "absolute",
    bottom: "0",
  },
  footerTitle: {
    fontSize: "50px",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif",
    padding: "10px",
    color: '#fff',
  },
  footerVideo: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
};

class Footer extends Component {
  render() {
    return (
      <>
        <video src={videoFt} autoPlay loop muted />
        <div style={styles.footer}>
          <a style={styles.footerTitle} href="https://www.rolex.com/en-us/rolex-dealers/argentina.html">contact an official rolex jeweler</a>
        </div>
      </>
    );
  }
}

export default Footer;
