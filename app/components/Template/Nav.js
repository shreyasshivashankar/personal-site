import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/profile.png" alt="Shreyas Shivashankar" />
      </Link>
      <header>
        <h2>Shreyas Shivashankar</h2>
        <strong><a href="mailto:mail.shreyasgs@gmail.com">mail.shreyasgs@gmail.com</a></strong>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
            I am a <a href="https://www.khoury.northeastern.edu/">Northeastern University</a> CS graduate, <a href="http://www.nitc.ac.in/">NITC</a> Alumni, and a Computer Scientist.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;