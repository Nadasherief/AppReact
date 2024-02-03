import React from 'react'

export default function About() {
  return (
    <div className="about text-white d-flex justify-content-center align-items-center" style={{ backgroundColor:'#1abc9c',height: '100vh',width: '100vw'}}>
    <div className="container">
    <div>
      <div className="text-center pt-4" style={{ color: 'white' }}>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">About Component</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3" style={{ backgroundColor: 'white', width: '90px', height: '5px' }}></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3" style={{ backgroundColor: 'white',width: '90px', height: '5px' }}></div>
        </div>
      </div>
    </div>
      <div className="row px-5">
        <div className="col-md-6 ps-md-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 pe-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
