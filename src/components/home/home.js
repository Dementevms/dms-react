/* eslint-disable no-useless-constructor */
import React from 'react';

import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="home" className="home section">
        <div className="container">
          <div className="container__wrapper">
            <div className="home__title">Dementyev Mikhail</div>
            <div className="home__subtitle">Frontend developer</div>
          </div>
        </div>
      </div>
    );
  }
}
