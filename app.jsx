import './style.css'

function App() {
  return (
    <>
      <nav>
        <h2>My Portfolio</h2>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#connections">Connections</a>
      </nav>

      <section id="home">
        <h1>Welcome!</h1>
        <p>
          A space where I share my journey as an Information Technology student and the experiences that shape my learning.
        </p>
        <p>
         Explore my projects, discover my growing skills, and learn about my passion for technology and personal development.
        </p>
        <a href="#about">Learn More</a>
      </section>

      <section id="about">
        <h1>Kesia M. Historillo</h1>
        <p>
         Hi! I'm a 20-year-old student currently studying at Batangas State University – Balayan Campus. I am from Pantay, Pag-asa, City of Calaca, Batangas. As an IT student, I am continuously learning about programming, web development, computer systems, and other areas of technology.
        </p>
        <p>
        To explore new ideas, developing my skills, and challenging myself to become better both personally and academically. This website serves as a glimpse into who I am, what I learn, and what I aspire to achieve in the world of Information Technology. I believe every experience is an opportunity to grow, every challenge is a chance to improve, and every new skill brings me closer to my goals.
        </p>
      </section>

      <section id="projects">
        <h1>My Projects</h1>
        <p>
          Explore the projects I have developed individually and
          collaboratively, showcasing my skills in system development,
          web development, database management, and problem-solving.
          Each project reflects my goal of creating practical and
          user-friendly solutions to real-world problems.
        </p>

        <div className="project-container">

          <div className="project-card">
            <h2>SmartQueue</h2>
            <p>
              SmartQueue is a school canteen queuing system developed
              with my groupmates to minimize ordering errors and reduce
              delays during peak hours. It aims to organize the
              queuing process and make ordering more efficient for
              students and canteen staff.
            </p>
            <p><strong>Type:</strong> Group Project</p>
            <p>
              <strong>Focus:</strong> System Development, Queue
              Management, Problem-Solving
            </p>
          </div>

          <div className="project-card">
            <h2>LIKHARVY</h2>
            <p>
              LIKHARVY is a functional website I helped develop for
              a client who owns a handmade bouquet business. It
              includes online marketing, order analytics, and order
              handling and management to help the client promote
              products and manage business transactions more efficiently.
            </p>
            <p><strong>Type:</strong> Collaborative Project</p>
            <p>
              <strong>Focus:</strong> Web Development, Order
              Management, Business Analytics
            </p>
          </div>

          <div className="project-card">
            <h2>Barangay Document Management System</h2>
            <p>
              This is my personal development project designed to
              help a barangay secretary manage the distribution of
              certificates and other official documents. The system
              aims to replace manual processes with a more organized
              digital approach, making document records and distribution
              easier to manage and track.
            </p>
            <p><strong>Type:</strong> Personal Project</p>
            <p>
              <strong>Focus:</strong> System Development, Records
              Management, Process Automation
            </p>
          </div>

        </div>
      </section>

      <section id="connections">
        <h1>Connections</h1>
        <p>
          Get in touch for collaboration, sharing ideas,
          and connecting with others in the technology field.
        </p>
        <p>
        Feel free to connect with me through my social media accounts.
        </p>

      <div className="social-links">
        <a
        href="https://www.facebook.com/share/151SBjBfdW/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Facebook
        </a>

        <a
        href="https://www.instagram.com/k.hist?vrfl=MTV5dTR0bmRrMWU4aA=="
        target="_blank"
        rel="noopener noreferrer"
        >
        Instagram
        </a>

        <a
        href="https://github.com/kesia-h"
        target="_blank"
        rel="noopener noreferrer"
        >
        GitHub
        </a>

        <a href="24-13240@g.batstate-u.edu.ph">
      Email Me
        </a>
      </div>
      
      </section>
    </>
  )
}

export default App