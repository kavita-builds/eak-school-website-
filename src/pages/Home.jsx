
import { Link } from "react-router-dom";

const strengths = [
  {
    icon: "🧠",
    title: "Curiosity First",
    text: "We encourage students to ask questions, explore ideas, and discover their strengths.",
    color: "yellow",
  },
  {
    icon: "🌱",
    title: "Grow with Values",
    text: "Kindness, responsibility, confidence, and respect shape every learning experience.",
    color: "pink",
  },
  {
    icon: "🚀",
    title: "Ready for Tomorrow",
    text: "Creative projects, digital learning, and teamwork prepare students for a changing world.",
    color: "blue",
  },
];

const programs = [
  {
    icon: "🧸",
    title: "Primary School",
    grades: "Grades 1–5",
    text: "Building strong foundations through joyful, hands-on learning.",
    color: "yellow",
  },
  {
    icon: "🔭",
    title: "Middle School",
    grades: "Grades 6–8",
    text: "Developing independent thinking, discovery, and collaboration.",
    color: "pink",
  },
  {
    icon: "🎯",
    title: "Secondary School",
    grades: "Grades 9–10",
    text: "Strengthening subject knowledge and preparing for future choices.",
    color: "blue",
  },
  {
    icon: "🌟",
    title: "Senior Secondary",
    grades: "Grades 11–12",
    text: "Exploring academic pathways, career goals, and leadership.",
    color: "green",
  },
];

const facilities = [
  { icon: "📚", title: "Learning Library", text: "A space for reading and discovery." },
  { icon: "🧪", title: "Science Labs", text: "Explore concepts through experiments." },
  { icon: "💻", title: "Digital Learning", text: "Build confidence with technology." },
  { icon: "⚽", title: "Sports & Play", text: "Develop teamwork and healthy habits." },
];

const events = [
  {
    day: "18",
    month: "NOV",
    type: "CAMPUS LIFE",
    title: "Young Innovators Day",
    text: "A celebration of student ideas, creative projects, and discovery.",
  },
  {
    day: "25",
    month: "NOV",
    type: "SPORTS",
    title: "Annual Sports Meet",
    text: "A day of teamwork, friendly competition, and school spirit.",
  },
  {
    day: "05",
    month: "DEC",
    type: "CULTURE",
    title: "Festival of Talents",
    text: "Students share their talents in music, art, and performance.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              ✨ LEARN · LEAD · INSPIRE
            </span>

            <h1>
              Big dreams begin with{" "}
              <span>little discoveries.</span>
            </h1>

            <p>
              Welcome to EAK International School, where curious minds
              grow, friendships flourish, and every student gets the
              chance to shine.
            </p>

            <div className="hero-actions">
              <Link
                to="/admissions"
                className="button button-primary"
              >
                Start Your Journey ↗
              </Link>

              <a href="#about" className="button button-light">
                Discover Our School ↓
              </a>
            </div>

            <div className="hero-note">
              <span>💛</span>
              A happy place to learn, explore, and belong.
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                alt="Students learning together in a classroom"
              />
            </div>

            <span className="floating-bubble bubble-one">📚</span>
            <span className="floating-bubble bubble-two">⭐</span>
            <div className="floating-card">
              <span>🌈</span>
              <div>
                <strong>Every child matters</strong>
                <small>Every day, in every way.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-wave" />
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <strong>100%</strong>
            <span>Student focused</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Learning stages</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Supportive community</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Possibilities to grow</span>
          </div>
        </div>
        <p className="stats-note">
          Illustrative school profile figures and statements for this demo.
        </p>
      </section>

      <section className="section container" id="about">
        <div className="section-heading">
          <span className="eyebrow">A SCHOOL THAT FEELS LIKE HOME</span>
          <h2>
            More than a school.
            <br />
            <span>A place to become.</span>
          </h2>
          <p>
            We believe education should develop the whole child:
            curious thinkers, kind people, creative problem-solvers,
            and confident future leaders.
          </p>
        </div>

        <div className="card-grid three-columns">
          {strengths.map((item) => (
            <article
              className={`feature-card ${item.color}`}
              key={item.title}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section academics-section" id="academics">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">LEARNING AT EVERY STAGE</span>
            <h2>
              Growing minds,
              <br />
              <span>step by step.</span>
            </h2>
            <p>
              Learning experiences designed to support students as
              their interests, abilities, and ambitions grow.
            </p>
          </div>

          <div className="card-grid four-columns">
            {programs.map((program) => (
              <article
                className={`program-card ${program.color}`}
                key={program.title}
              >
                <div className="card-icon">{program.icon}</div>
                <span className="program-grades">{program.grades}</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <Link to="/admissions" className="text-link">
                  Explore admission ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">ROOM TO EXPLORE</span>
          <h2>
            Spaces that spark
            <br />
            <span>big ideas.</span>
          </h2>
        </div>

        <div className="card-grid four-columns">
          {facilities.map((facility) => (
            <article className="facility-card" key={facility.title}>
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.title}</h3>
              <p>{facility.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principal-section">
        <div className="container principal-grid">
          <div className="principal-illustration">
            <span>👩‍🏫</span>
            <div>LEARN WITH PURPOSE</div>
          </div>

          <div className="principal-copy">
            <span className="eyebrow">A MESSAGE FROM OUR PRINCIPAL</span>
            <h2>
              Every child has a
              <br />
              <span>story worth nurturing.</span>
            </h2>
            <p>
              "Our aim is to create a learning environment where
              students feel safe to explore, confident to ask
              questions, and inspired to make a positive difference."
            </p>
            <strong>Principal</strong>
            <small>EAK International School</small>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">LIFE BEYOND THE CLASSROOM</span>
          <h2>
            Little moments.
            <br />
            <span>Big memories.</span>
          </h2>
        </div>

        <div className="card-grid three-columns">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>
              <span className="event-type">{event.type}</span>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
              <Link to="/admissions" className="text-link">
                Join our community ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container testimonial-content">
          <span className="eyebrow">KIND WORDS, HAPPY HEARTS</span>
          <h2>
            A community that
            <br />
            <span>grows together.</span>
          </h2>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "We want a learning environment that encourages
              curiosity, kindness, and confidence. That is the
              experience we hope every family will find here."
            </p>
            <strong>Sample Parent Testimonial</strong>
            <small>Illustrative content for the website demo</small>
          </div>
        </div>
      </section>

      <section className="admission-banner">
        <div className="container admission-banner-inner">
          <div>
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Ready to let your child shine?</h2>
            <p>
              Discover a learning journey filled with possibility.
            </p>
          </div>
          <Link to="/admissions" className="button button-dark">
            Explore Admissions ↗
          </Link>
        </div>
      </section>
    </>
  );
}
