import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
    
          <div className="proj-txtx">
  <h5 style={{ color: 'black' }}>{title}</h5>
  <span>{description}</span>
  <h4 ><a style={{ color: 'black' }} href={url}>view</a></h4>
</div>

      </div>
    </Col>
  )
}
