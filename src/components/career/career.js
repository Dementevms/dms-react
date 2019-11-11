/* eslint-disable no-useless-constructor */
import React from "react";

import "./career.scss";

export default class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="career" class="career section">
        <div class="container">
          <div class="section__wrapper">
            <div class="section__left">
              <div class="section__title">Career</div>
            </div>
            <div class="section__right">
              <div class="career__item">
                <div class="career__item-title">3DiVi Inc</div>
                <div class="career__item-time">2011 - 2015</div>
                <div class="career__item-desc">
                  Nullam porta turpis diam, sed imperdiet quam sagittis id. Sed
                  viverra egestas posuere. Phasellus rhoncus sit amet sem sit
                  amet viverra. Morbi vehicula lectus maximus posuere volutpat.
                  Fusce tempus imperdiet elit, ut dapibus ex consequat a. Nunc
                  arcu ex, scelerisque suscipit enim non, tempor efficitur dui.
                  Vivamus vel magna ac sem congue facilisis ut id lectus.
                </div>
              </div>
              <div class="career__item">
                <div class="career__item-title">Freelance</div>
                <div class="career__item-time">2015 - 2018</div>
                <div class="career__item-desc">
                  Mauris varius turpis ac tellus semper, vitae vehicula justo
                  tempus. Aliquam et commodo dui. Vivamus quis suscipit ligula.
                  Vivamus condimentum, tellus accumsan molestie auctor, neque
                  nisi lacinia tellus, eu eleifend quam dolor eu ante. Nullam
                  lobortis molestie turpis, eget efficitur nisi facilisis eget.
                  Vestibulum tincidunt nibh leo, et commodo libero volutpat nec.
                </div>
              </div>
              <div class="career__item">
                <div class="career__item-title">
                  Hearst Shkulev Digital Regional Network
                </div>
                <div class="career__item-time">2019</div>
                <div class="career__item-desc">
                  Vivamus vitae pretium urna. Integer pellentesque maximus
                  convallis. Praesent ante odio, porttitor imperdiet odio ut,
                  hendrerit dignissim nulla. Cras molestie mi nec enim vehicula,
                  sed congue metus pharetra. Cras vel fringilla turpis, non
                  suscipit tortor. Duis porta volutpat enim, ut efficitur nibh
                  luctus ac. Suspendisse aliquam non ligula a dignissim. Aenean
                  a nulla ipsum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
