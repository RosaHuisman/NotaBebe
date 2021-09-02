import React, { useEffect } from 'react';
import {
  Link, useHistory, useLocation,
} from 'react-router-dom';
import Header from 'src/containers/Header';

import './styles.scss';

const WelcomeHome = () => {
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const previousPage = () => {
    history.goBack();
  };

  const getToken = localStorage.getItem('MyToken');

  return (
    <>
      {getToken
        ? (
          <>
            <div>
              <Header />
            </div>
            <div className="welcome">
              <div className="welcomePage">
                <div className="welcomePage__headerBox">
                  <div className="welcomePage__headerBox__titleHome">
                    <p>Bienvenue sur NotaBebe</p>
                    <p>Merci de vous connecter</p>
                  </div>
                </div>
              </div>
              <div className="contentButtonHome">
                <button type="button" onClick={previousPage} className="buttonHome">Retour</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Header />
            </div>
            <div className="welcome">
              <div className="welcomePage">
                <div className="welcomePage__headerBox">
                  <div className="welcomePage__headerBox__titleHome">
                    <p>Bienvenue sur NotaBebe</p>
                    <p>Merci de vous connecter</p>
                  </div>
                </div>
              </div>
              <Link
                className="contentButtonHome"
                exact="true"
                to="/login"
              >
                <button type="button" className="buttonHome">Se connecter</button>
              </Link>
            </div>
          </>
        )}
    </>
  );
};

export default WelcomeHome;
