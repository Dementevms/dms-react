/* eslint-disable no-useless-constructor */
import React from "react";

import "./about.scss";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about" className="about section">
        <div className="container">
          <div className="section__wrapper">
            <div className="section__left">
              <div className="section__title">About</div>
            </div>
            <div className="section__right">
              <div className="about__image">
                <img src="images/about.png" alt="about" />
              </div>
              <div className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel mattis lorem, at pellentesque erat. Fusce hendrerit, turpis
                ac suscipit sagittis, erat mauris hendrerit mauris, eu laoreet
                ipsum quam id mi. Donec condimentum nunc leo, quis volutpat
                ipsum finibus quis. Duis volutpat rhoncus augue, id semper
                ligula tempus sed. Praesent nisl massa, varius id imperdiet non,
                finibus et tellus. Aliquam suscipit maximus tortor nec ornare.
                Donec efficitur facilisis metus vitae sollicitudin. Donec
                scelerisque, magna non facilisis euismod, ex leo sollicitudin
                quam, sed pulvinar dolor est nec justo. Etiam vel lacinia ex.
                Vestibulum nec consectetur elit. Phasellus bibendum ipsum eget
                gravida mollis. Cras venenatis gravida urna, et mattis risus
                mattis sit amet. Phasellus quis nulla ut metus tincidunt rutrum
                in sit amet ante. Nulla sed elit a tortor ornare pellentesque.
                Mauris tincidunt, lorem ut dictum porta, dolor lectus porta
                arcu, a facilisis turpis dolor ac quam.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
