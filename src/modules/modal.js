export default class Modal {
  constructor() {
    this.init();
    this.bind();
  }
  init() {
    const items = document.querySelectorAll(".js-modal-open");
    items.forEach(item => {
      this.setParamsInHtml(item);
    });
  }
  bind() {
    document.addEventListener(
      "click",
      e => {
        const objOpen = e.target.closest(".js-modal-open");
        if (objOpen) {
          this.open(objOpen);
        }
        const objClose = e.target.closest(".js-modal-close");
        if (objClose) {
          this.close(objClose);
        }
      },
      false
    );
  }
  open(obj) {
    const template = document.createElement("div");
    template.innerHTML = this.getTemplate();
    if (obj.params.type === "image") {
      const src = obj.params.src;
      const img = document.createElement("img");
      img.setAttribute("src", src);
      template
        .querySelector(".js-modal-content")
        .insertAdjacentElement("afterbegin", img);
    }
    document.body.style.overflow = "hidden";
    document.body.insertAdjacentElement("beforeend", template.firstChild);
  }
  close(obj) {
    obj.closest(".js-modal").remove();
    document.body.style.overflow = "inherit";
  }
  setParamsInHtml(item) {
    const data = item.dataset;
    item.params = {};
    for (let key in data) {
      item.params[key] = data[key];
    }
  }
  getTemplate() {
    const tmpl = `
    <div class="modal js-modal">
      <div class="modal__wrapper">
        <div class="modal__cover">
          <div class="modal__content js-modal-content"></div>
        </div>
      </div>
      <div class="modal__close js-modal-close"></div>
    </div>`;
    return tmpl.trim();
  }
}
