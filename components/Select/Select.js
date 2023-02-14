class Select {
  select = function () {
    let selectHeader = document.querySelectorAll(".select__header");
    let selectItem = document.querySelectorAll(".select__item");

    selectHeader.forEach((item) => {
      item.addEventListener("click", selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("is-active");
    }

    function selectChoose() {
      let text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select__current");
      currentText.innerText = text;
      select.classList.remove("is-active");

      let cards = document.getElementsByName("simpleNameCart");

      CATALOG.forEach(({ id, name, price, img, category }) => {
        if (category === text || text === "all") {
          console.log(id);
          cards[id].classList.remove("hide");
          cards[id].classList.add("cart__content");
        } else {
          cards[id].classList.add("hide");
          cards[id].classList.remove("cart__content");
        }
      });
    }
  };

  render() {
    const html = `
    <div class="select">
      <div class="select__header">
        <span class="select__current">Filter</span>
        <div class="select__icon">&times;</div>
      </div>
    
      <div class="select__body">
        <div class="select__item">all</div>
        <div class="select__item">T-shirt</div>
        <div class="select__item">swimsuit</div>
        <div class="select__item">sweater</div>
      </div>
    </div>
        `;

    ROOT_SELECT.innerHTML = html;

    this.select();
  }
}

const selectPage = new Select();
