import React from 'react';
import Helper from "../../modules/helper";

import './bg.scss';

export default class Bg extends React.Component {
  constructor(props){
    super(props);
    this.bgItems = null;
  }

  componentDidMount(){
    this.init();
  }

  init() {
    this.bgItems = document.querySelectorAll(".bg__item");
    this.animationBg();
  }

  animationBg() {
    this.bgItems.forEach(item => {
      const w = window.innerWidth - 100;
      const h = window.innerHeight - 100;
      const x = Helper.random(100, w);
      const y = Helper.random(100, h);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
    });
  }

  render () {
    return (
      <div className="bg">
        <div className="bg__item">Javascript</div>
        <div className="bg__item">ES5</div>
        <div className="bg__item">ES6</div>
        <div className="bg__item">jQuery</div>
        <div className="bg__item">Vue</div>
        <div className="bg__item">Scss</div>
        <div className="bg__item">Less</div>
        <div className="bg__item">Git</div>
        <div className="bg__item">Workflow</div>
        <div className="bg__item">Webpack</div>
        <div className="bg__item">Gulp</div>
        <div className="bg__item">Babel</div>
        <div className="bg__item">ESLint</div>
        <div className="bg__item">Stylelint</div>
        <div className="bg__item">Pretter</div>
        <div className="bg__item">NodeJS</div>
        <div className="bg__item">Jess</div>
        <div className="bg__item">Moca</div>
      </div>    
    );
  }
}