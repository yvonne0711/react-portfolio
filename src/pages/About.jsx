import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header>
        About
      </Header>
      <section>
        Hi, I'm Yvonne. I didn't have the opportunity to grow up in a programming world. I'm a past graduate Data Scientist and a graduate of edX's Front-End Web Development bootcamp, discovering my passion for creative problem solving and the science of design.
        <p className="current-foci">
          Current foci:
          <ul className="list">
            <li>
              CS50x
              <ul>
                <li>C, Arrays, Algorithms</li>
              </ul>
            </li>
            <li>
              Frontend Mentor Challenges
              <ul>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </li>
            <li>
              Personal portfolio
            </li>
            <ul>
              <li>HTML, CSS, Bootstrap, JavaScript, React</li>
            </ul>
          </ul>
        </p>
        <p className="other-interests">
          Other interests:
          <ul className="list">
            <li>
              Social Justice
            </li>
            <li>
              Gaming
            </li>
            <li>
              Baking
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default About;