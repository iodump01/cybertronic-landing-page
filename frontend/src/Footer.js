import React from "react";
export const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-white btn-outline-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a
              href="https://www.instagram.com/iodump01/"
              className="me-4 text-reset"
              target="_blank"
            >
              <i className="fs-3 fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/iodump01"
              className="me-4 text-reset"
              target="_blank"
            >
              <i className="fs-3 fab fa-github"></i>
            </a>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p>© 2022 IODump</p>
          <p className="text-center">Made with <i className="text-danger fa-solid fa-heart"></i> By: Zeal Firefox CLub</p>
        </div>
        
      </footer>
    </div>
  );
};
