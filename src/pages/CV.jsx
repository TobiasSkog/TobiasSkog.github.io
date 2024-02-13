import CvImage from '../assets/cv-img.png'
import jsonData from '../data/cv.json';

export default function CV() {
  function fetchJsonData(dataType, data) {
    if (dataType === "Education") {
      return data.map((educationElement) => (
        <>
          <dt className="cv-title" key={educationElement.Id}> {educationElement.Name} </dt>
          <dd className="cv-date">  {educationElement.Date} </dd>
          <dd className="cv-desc"> {educationElement.Description} </dd>
        </>
      ));
    } else if (dataType === "Experience") {
      return data.map((experienceElement) => (
        <>
          <dt className="cv-title" key={experienceElement.Id}> {experienceElement.Name} </dt>
          <dd className="cv-date"> {experienceElement.Date} </dd>
          <dd className="cv-desc"> {experienceElement.Description} </dd>
        </>
      ));
    }
  }
  return (
    <>

      <aside className="cv-left-container">
        <section className="cv-content-container">
          <div className="info-box-root">
            <h1>Tobias Skog </h1>
          </div>
          <div className="img-container">
            <img className='cv-img' src={CvImage} alt="Tobias Skog" />
          </div>
          <div className="info-box">
            <h2>Contact Information</h2>
          </div>
          <div className="info-row">
            <i className="fas fa-envelope" />
            <p>Skoog.tobias&#64;gmail&#46;com</p>
          </div>
          <div className="info-row">
            <i className="fas fa-phone" />
            <p>+4763-660 15 76</p>
          </div>
          <div className="info-row">
            <i className="fas fa-map-marker-alt" />
            <p>Örnsköldsvik</p>
          </div>
          <div className="info-box">
            <h2>Socials</h2>
          </div>
          <div className="info-row-social-links" >
            <a href="https://www.github.com/TobiasSkog" target="_blank" rel="noreferrer">
              <i className=" fa-brands fa-github" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tobiasskog/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" alt="LinkedIn" /></a>
          </div>
        </section>
      </aside >

      <div className="divider">
        <section className="content-container">
          <div className="info-box-root">
            <h2>Profile</h2>
          </div>
          <article className="cv">
            <section className="cv-item">
              <p>As an individual, I am highly curious and eager to learn as much as possible. I possess a strong work
                ethic,
                taking my work seriously and consistently giving my best effort. I am meticulous, proactive, and
                goal-oriented, always striving to work towards collectively established objectives with the best interests
                of the company and the team in mind.</p>
            </section>
            <section className="cv-item">
              <p>In my role as an instructor at Lernia, teaching CAD for a vocational training program, I had the
                opportunity
                to impart the fundamentals and, to some extent, more advanced features of CAD. This role was particularly
                interesting as it involved working with a completely new CAD program. Adapting lessons to ensure
                understanding for students with varied backgrounds made the work more challenging and engaging.</p>
            </section>
            <section className="cv-item">
              <p> During my time at Komatsu as an assembler, I honed my practical skills in the technical field.
                Unfortunately, my tenure at Komatsu ended due to the Greek financial crisis, which resulted in many
                layoffs.</p>
            </section>
            <section className="cv-item">
              <p>My experience extends to customer-facing roles as well. Over the course of four years, my parents owned
                an
                ICA store in Bullmark, and I also worked at ICA Maxi during the summers. These experiences provided me
                with
                valuable insights into social competence and customer interaction. Regularly engaging with new people each
                day, I became adept at effective communication.</p>
            </section>
            <section className="cv-item">
              <p>In my high school years, I undertook an extended internship at Volvo Trucks AB within the engineering
                department, contributing to the development of a new premetering device. At Volvo, I worked on
                problem-solving and product development based on customer requirements, which was highly intriguing.</p>
            </section>
            <section className="cv-item">
              <p>I took a hiatus from the workforce due to significant sleep-related challenges, seeking help and support
                during this period. Now that I have received the assistance I needed to reintegrate into the workforce, I
                am
                highly motivated to resume my professional journey.</p>
            </section>
            <section className="cv-item">
              <p>Since 2019, I've been actively involved in a leadership role in the game World of Warcraft. This
                experience
                has equipped me with skills applicable in workplace settings, as detailed on the next page.</p>
            </section>
            <section className="cv-item">
              <p>As part of my <span className="important-text">leadership role</span>, I have:</p>
              <ul>
                <li>Established and maintained rules for a pleasant and sustainable environment within the group.</li>
                <li>Set clear and concise goals for all participants.</li>
                <li>Led recruitment initiatives for expansion and development.</li>
                <li>Implemented reward systems, familiarizing myself with and utilizing these systems, and educating
                  participants on their use.</li>
                <li>Adopted and applied strategies, including adaptation and implementation.</li>
                <li>Conducted individual meetings with goals for development and improvement.</li>
                <li>Facilitated leadership meetings with goals for development and improvement, including problem
                  analysis, strategy development, recruitment, and performance evaluations.</li>
                <li>Applied strategies for individual performance improvement for all participants.</li>
                <li>Programmed a tool in the game to assign roles, providing visual feedback when specific individuals
                  need to perform certain tasks at specific times.</li>
              </ul>
              <p>Kind regards,
                Tobias Skog</p>
            </section>
          </article>
          <div className="info-box">
            <h2>Work Experience</h2>
          </div>
          <article className="cv">
            <section className="cv-item">
              <dl className="cv-table" id="cv-exp" >
                {fetchJsonData("Experience", jsonData.Experience)}
              </dl>
            </section>
          </article>
          <div className="info-box">
            <h2>Education</h2>
          </div>
          <article className="cv">
            <section className="cv-item">
              <dl className="cv-table" id="cv-edu" >
                {fetchJsonData("Education", jsonData.Education)}
              </dl>
            </section>
          </article>
        </section>
      </div>
      <div className="side-border"></div>

    </>
  );
}