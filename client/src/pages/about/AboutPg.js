import Layout from '../../layout/Layout';
import './AboutPg.css';

function AboutPg() {
  return (
    <Layout>
      <div className='page aboutPg pt100' id="about">
          <div className="about-content">
              <div className="about-text">
                  <h2 className="headline">About Me</h2>
                  <p className="body-copy">
                      I started my career as a designer and then became a front end developer. I developed interactive dashboards and award winning interactive stories using JavaScript and Python for Data scraping / processing. I went on to upskill myself to become a full stack developer as a continuous process of upgrading to take my career on a growth path. Intend to continue up skilling to reach the ultimate levels.
                  </p>
                  <h3 className="subhead">My Skills</h3>
                  <ul className="myskills">
                      <li>HTML / CSS</li>
                      <li>JavaScript</li>
                      <li>JQuery</li>
                      <li>D3JS</li>
                      <li>ReactJS</li>
                      <li>NodeJS</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>Python</li>
                      <li>AWS</li>
                      <li>UI/UX Design</li>
                      <li>Illustration</li>
                  </ul>
              </div>
              <img src="https://via.placeholder.com/300" />
          </div>
      </div>
    </Layout>
  )
}

export default AboutPg