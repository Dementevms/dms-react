/* eslint-disable no-useless-constructor */

import React from "react";

import "./nav.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  clickArrow() {
    const number = Math.round(window.scrollY / window.innerHeight);
    const target = window.innerHeight * number;
    window.scroll({ top: target, behavior: "smooth" });
  }

  scrollToSection(id) {
    this.currentSection = id;
    const section = document.querySelector(`#${id}`);
    const offsetTop = section.getBoundingClientRect().top;
    const target = offsetTop + window.scrollY;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  render() {
    return (
      <div className="nav">
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("home");
          }}
        >
          Home
        </div>
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("about");
          }}
        >
          About
        </div>
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("skills");
          }}
        >
          Skills
        </div>
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("career");
          }}
        >
          Career
        </div>
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("works");
          }}
        >
          Works
        </div>
        <div
          className="nav__item"
          onClick={() => {
            this.scrollToSection("contacts");
          }}
        >
          Contacts
        </div>
      </div>
    );
  }
}
