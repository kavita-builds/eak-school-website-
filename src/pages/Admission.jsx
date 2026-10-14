
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Make an enquiry",
    text: "Discover our programs and ask questions about the learning experience.",
  },
  {
    number: "02",
    icon: "📝",
    title: "Submit an application",
    text: "Complete the sample application form with student and parent details.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Interaction / Assessment",
    text: "Participate in an age-appropriate interaction or assessment, where applicable.",
  },
  {
    number: "04",
    icon: "🎉",
    title: "Selection",
    text: "Review the school's sample admission decision and next steps.",
  },
  {
    number: "05",
    icon: "🎒",
    title: "Enrollment",
    text: "Complete the enrollment checklist and prepare for the school journey.",
  },
];

const faqs = [
  {
    question: "Which grades can I apply for?",
    answer:
      "This demo school offers Primary, Middle, Secondary, and Senior Secondary stages. Availability for a particular grade would be confirmed by the school.",
  },
  {
    question: "What documents might be required?",
    answer:
      "Illustrative documents include a birth certificate, previous academic records where applicable, photographs, and parent or guardian contact details. Actual requirements would be confirmed by the school.",
  },
  {
    question: "Is an assessment required?",
    answer:
      "The sample admission process includes an interaction or assessment where applicable. The format would depend on the grade and the school's actual policy.",
  },
  {
    question: "How can I ask a question about admission?",
    answer:
      "You can complete the enquiry form on this page. It is a frontend demonstration and does not send your information to a school server.",
  },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="admissions-hero">
        <div className="container admissions-hero-grid">
          <div>
            <span className="eyebrow">YOUR JOURNEY STARTS HERE ✨</span>
            <h1>
              A bright future
              <br />
              <span>starts with one step.</span>
            </h1>
            <p>
              Explore our simple admission journey and discover
              a school where every child's potential matters.
            </p>
            <a href="#enquiry" className="button button-primary">
              Start an Enquiry ↗
            </a>
          </div>

          <div className="admissions-hero-art">
            <div className="admissions-emoji">🎒</div>
            <span className="admissions-sticker sticker-one">🌈</span>
            <span className="admissions-sticker sticker-two">⭐</span>
            <p>New adventures. New friendships. New possibilities.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>
            Five steps to your
            <br />
            <span>next big adventure.</span>
          </h2>
          <p>
            A clear overview of the admission process, from your
            first question to the first day of school.
          </p>
        </div>

        <div className="admission-steps">
          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <div className={`step-icon step-color-${index + 1}`}>
                {step.icon}
              </div>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eligibility-section">
        <div className="container eligibility-grid">
          <div>
            <span className="eyebrow">BEFORE YOU APPLY</span>
            <h2>
              Let's get you
              <br />
              <span>ready for the journey.</span>
            </h2>
            <p>
              Review these illustrative guidelines before preparing
              your enquiry.
            </p>

            <div className="check-list">
              <div>
                <span>✓</span>
                Identify the grade you are interested in.
              </div>
              <div>
                <span>✓</span>
                Prepare basic student and parent information.
              </div>
              <div>
                <span>✓</span>
                Check grade-specific eligibility with the school.
              </div>
              <div>
                <span>✓</span>
                Ask about the process, dates, and available places.
              </div>
            </div>
          </div>

          <div className="documents-card">
            <div className="documents-heading">
              <span>📂</span>
              <div>
                <h3>Documents to prepare</h3>
                <p>Illustrative checklist</p>
              </div>
            </div>

            {[
              "Student birth certificate",
              "Previous academic records, if applicable",
              "Transfer certificate, if applicable",
              "Recent student photographs",
              "Parent / guardian contact details",
            ].map((document) => (
              <div className="document-row" key={document}>
                <span>✓</span>
                {document}
              </div>
            ))}

            <p className="small-note">
              These are sample requirements, not official school
              admission rules.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">YOUR QUESTIONS, ANSWERED</span>
          <h2>
            Good to know
            <br />
            <span>before you begin.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenFaq(openFaq === index ? -1 : index)
                }
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="enquiry-section" id="enquiry">
        <div className="container enquiry-grid">
          <div className="enquiry-copy">
            <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
            <h2>
              Every great journey
              <br />
              <span>begins with hello.</span>
            </h2>
            <p>
              Share your interest in EAK International School.
              This sample form demonstrates the frontend experience.
            </p>

            <div className="contact-highlight">
              <span>💌</span>
              <div>
                <strong>Have a question?</strong>
                <p>Use the enquiry form to try the demo.</p>
              </div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <h3>Admission enquiry</h3>
            <p>Tell us a little about your school interests.</p>

            {submitted ? (
              <div className="demo-success" role="status">
                <span>🎉</span>
                <h3>Thank you for trying our demo!</h3>
                <p>
                  Your form was validated in the browser. No data
                  has been sent or saved.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <label htmlFor="parentName">Parent / guardian name</label>
                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <label htmlFor="grade">Grade of interest</label>
                <select id="grade" name="grade" required defaultValue="">
                  <option value="" disabled>
                    Select a grade
                  </option>
                  <option>Primary School</option>
                  <option>Middle School</option>
                  <option>Secondary School</option>
                  <option>Senior Secondary</option>
                </select>

                <label htmlFor="message">Your question (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="What would you like to know?"
                />

                <button
                  type="submit"
                  className="button button-primary form-submit"
                >
                  Preview Enquiry ↗
                </button>

                <small className="form-disclaimer">
                  Demo only. Your information is not transmitted
                  to a server.
                </small>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
