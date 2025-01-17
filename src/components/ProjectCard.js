import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        style={{
          
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#1f4037",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />
        <div
          className="proj-txtx"
          style={{
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 style={{ color: "#99f2c8", fontWeight: "bold", marginBottom: "10px" }}>
            {title}
          </h5>
          <p
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              lineHeight: "1.5",
              marginBottom: "15px",
            }}
          >
            {description}
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#FFD700",
                color: "#1f4037",
                padding: "10px 20px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5c100")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
            >
              View
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
