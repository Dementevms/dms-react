/* eslint-disable no-useless-constructor */
import React from "react";

import "./contacts.scss";

export default class Conatcts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contacts" className="contacts section">
        <div className="container">
          <div className="section__wrapper">
            <div className="section__left">
              <div className="section__title">Contacts</div>
            </div>
            <div className="section__right">
              <div className="contacts__item">Phone | +7 951 480 3426</div>
              <div className="contacts__item">
                E-mail | dementevms@gmail.com
              </div>
              <div className="contacts__item">Skype | Dementevms</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
