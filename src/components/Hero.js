import { Component } from "react";
import videoBg from "../assets/video.mp4";

const styles = {
  heroIntro: {
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: "0",
    backgroundColor: "#00000095",
  },
  rolex: {
    height: "100px",
    padding: "20px",
    fontSize: "25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    height: "70vh",
  },
  heroTitle: {
    fontSize: "50px",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif",
    padding: "10px",
  },
  heroDescription: {
    fontSize: "32px",
    paddingTop: "20px",
    color: "#ffffff99",
    fontStyle: "italic",
    padding: "10px",
  },
};
class Hero extends Component {
  render() {
    return (
      <>
        <video src={videoBg} autoPlay loop muted />
        <div style={styles.heroIntro}>
          <div style={styles.rolex}>
            <h1>ROLEX</h1>
          </div>
          <div style={styles.heroContainer}>
            <p style={styles.heroTitle}>More simplicity is more time</p>
            <p style={styles.heroDescription}>
              Black and White Limited Edition.
              <br />
              Only thirty pieces of watches for each model,
              <br />
              defending the extreme simplicity and functionality.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
