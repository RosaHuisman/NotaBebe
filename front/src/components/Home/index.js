import React from 'react';
import { Link } from 'react-router-dom';
import Contact from 'src/components/Contact';

import './styles.scss';

const Home = () => (
  <>
    <div className="welcome">
      <div className="welcome__title">
        <p>Bienvenue sur NotaBebe,</p>
        <p>Merci de vous connecter</p>
      </div>
      <Link to="/login">
        <div className="welcome__submit">
          Se connecter
        </div>
      </Link>
    </div>
    <Contact />
  </>
);

export default Home;
