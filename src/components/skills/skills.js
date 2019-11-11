/* eslint-disable no-useless-constructor */
import React from 'react';

import './skills.scss';

export default class Skills extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="skills" className="skills section">
        <div className="container">
          <div className="skills__wrapper container__wrapper">
            <div className="skills__item">Skills:</div>
            <div className="skills__item">Javascript</div>
            <div className="skills__item">ES5</div>
            <div className="skills__item">ES6</div>
            <div className="skills__item">VueJS</div>
            <div className="skills__item">NuxtJS</div>
            <div className="skills__item">jQuery</div>
            <div className="skills__item">HTML 5</div>
            <div className="skills__item">CSS</div>
            <div className="skills__item">SVG</div>
            <div className="skills__item">Scss</div>
            <div className="skills__item">Less</div>
            <div className="skills__item">Webpack</div>
            <div className="skills__item">Gulp</div>
            <div className="skills__item">Babel</div>
            <div className="skills__item">ESLint</div>
            <div className="skills__item">Stylelint</div>
            <div className="skills__item">Pretter</div>
            <div className="skills__item">Jest</div>
            <div className="skills__item">Mocha</div>
            <div className="skills__item">Cypress</div>
            <div className="skills__item">NodeJS</div>
            <div className="skills__item">Express</div>
            <div className="skills__item">MongoDB</div>
            <div className="skills__item">Puppeteer</div>
            <div className="skills__item">Git</div>
            <div className="skills__item">Workflow</div>
            <div className="skills__item">...</div>
          </div>
        </div>
      </div>
    );
  }
}