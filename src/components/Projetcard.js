import React, { useState } from 'react';
// import ImageModal from './ImageModal';
import '../assets/css/style.css';

export default function Projetcard() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = [
    {
      title: 'Web Application to manage a pharmacy',
      description: "This project is a web application to manage a pharmacy. It allows the user to manage the pharmacy's stock, orders, sales, customers, suppliers, client demands, invoice history, etc.",
      tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Jsx - React - Axios - Git - Github',
      imagesUrl: [],
      githubLink: 'https://github.com/YounessSerrakhi/medicyFront',
      externalLink: 'https://younessserrakhi.github.io/medicyFront',
    },
    {
      title: 'Web Application to manage conferences of FST Marrakech',
      description: "This project is a web application to manage conferences of FST Marrakech. It allows the user to manage the conferences, speakers, participants, sessions, papers, reviews, and easily switch between different conferences.",
      tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Javascript - React - Axios - Git - Github',
      imagesUrl: [],
      githubLink: 'https://github.com/YounessSerrakhi/conferenceClient',
      externalLink: 'https://younessserrakhi.github.io/conferenceClient',
    },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
          {/* <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className="mx-3 active" data-filter="*">All Projects</li>
              <li className="mx-3" data-filter=".first">UI/UX Design</li>
              <li className="mx-3" data-filter=".second">Graphic Design</li>
            </ul>
          </div> */}
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          {projectsData.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={project.imagesUrl[0]} alt="" />
                <div className="portfolio-btn">
                  <button className="btn btn-lg-square btn-outline-secondary border-2 mx-1" onClick={() => openModal(index)}>
                    <i className="fa fa-eye"></i>
                  </button>
                  {project.githubLink && (
                    <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github"></i>
                    </a>
                  )}
                  {project.externalLink && (
                    <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.externalLink} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-link"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal 
          // <ImageModal
          //   images={projectsData[currentImageIndex].imagesUrl}
          //   title={projectsData[currentImageIndex].title}
          //   description={projectsData[currentImageIndex].description}
          //   tools={projectsData[currentImageIndex].tools}
          //   onClose={closeModal}
          // />
        }
      </div>
    </div>
  );
}
