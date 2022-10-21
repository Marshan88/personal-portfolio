import { Col } from "react-bootstrap";

const handleClick = (link) => () => {
  window.location.href=link;
}

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4} onClick={handleClick(link)}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
    </Col>
  );
};
