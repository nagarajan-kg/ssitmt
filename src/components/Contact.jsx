import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              {/* As requested, no backend — form won't submit anywhere */}
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" type="text" placeholder="Your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone / Email</label>
                  <input className="form-control" type="text" placeholder="Phone or email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Course Interested</label>
                  <select className="form-select">
                    <option>React JS</option>
                    <option>Full Stack</option>
                    <option>Data Science</option>
                  </select>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">We will contact you within 24 hours</small>
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-3 text-muted small text-center">
            Or call: <strong>+91 98765 43210</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
