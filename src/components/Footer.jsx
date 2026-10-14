
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">🎓</span>
            <span>
              <strong>EAK</strong>
              <small>INTERNATIONAL SCHOOL</small>
            </span>
          </Link>

          <p>
            Inspiring curious minds, nurturing kind hearts,
            and helping every student discover their potential.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
            <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
            <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <a href="/#about">About Us</a>
          <a href="/#academics">Academics</a>
          <Link to="/admissions">Admissions</Link>
        </div>

        <div>
          <h3>Student Life</h3>
          <a href="/#academics">Learning Programs</a>
          <a href="/#facilities">School Facilities</a>
          <a href="/#events">Events</a>
          <Link to="/admissions">Join Our School</Link>
        </div>

        <div>
          <h3>Get in touch</h3>
          <p>📍 Sample School Address</p>
          <p>✉️ hello@example.com</p>
          <p>☎️ +91 00000 00000</p>
          <small>Sample contact details for demonstration.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} EAK International School.
            Frontend assignment demo.
          </p>
          <a href="/#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
