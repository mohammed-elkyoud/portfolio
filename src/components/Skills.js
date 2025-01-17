import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="skill"
      id="skills"
      style={{
        background: "linear-gradient(to right, #1f4037, #99f2c8)",
        padding: "60px 0",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="skill-bx wow zoomIn"
              style={{
                textAlign: "center",
                padding: "30px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 style={{ color: "#FFD700", marginBottom: "20px" }}>Skills</h2>
              <p style={{ fontSize: "16px", marginBottom: "40px" }}>
              
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>PHP/Laravel</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>React JS</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                 
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>Java/Springboot</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>Javascript</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                 
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>HTML/CSS</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                 
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>Flutter</h5>
                </div>
                <div
                  className="item"
                  style={{
                    background: " #1f4037",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
                  }}
                >
                 
                  <h5 style={{ color: "rgb(255, 255, 255)" }}>C</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          opacity: "0.1",
        }}
      />
    </section>
  );
};
