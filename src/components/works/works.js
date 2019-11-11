import React from "react";
import Modal from "../../modules/modal";

import "./works.scss";

export default class Works extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        title: "Artel",
        image: "images/works/artel.png",
        imagePrev: "images/works/artel_prev.png"
      },
      {
        title: "Unacare",
        image: "images/works/unacare.png",
        imagePrev: "images/works/unacare_prev.png"
      },
      {
        title: "Veziauto",
        image: "images/works/veziauto.png",
        imagePrev: "images/works/veziauto_prev.png"
      },
      {
        title: "L.E.P",
        image: "images/works/lep.png",
        imagePrev: "images/works/lep_prev.png"
      },
      {
        title: "Diplomnajarabota",
        image: "images/works/diplomnajarabota.png",
        imagePrev: "images/works/diplomnajarabota_prev.png"
      },
      {
        title: "Rusalochka",
        image: "images/works/rusalochka.png",
        imagePrev: "images/works/rusalochka_prev.png"
      }
    ];
  }

  componentDidMount(){
    new Modal();
  }

  listItems() {
    return this.items.map((item, index) => (
      <div key={index} className="works__item">
        <div
          className="works__item-image js-modal-open"
          data-type="image"
          data-src={item.image}
        >
          <img src={item.imagePrev} alt="" />
        </div>
        <div className="works__item-title">{item.title}</div>
      </div>
    ));
  }

  render() {
    return (
      <div id="works" className="works section">
        <div className="container">
          <div className="works__wrapper container__wrapper">
            {this.listItems()}
          </div>
        </div>
      </div>
    );
  }
}
