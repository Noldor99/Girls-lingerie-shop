class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handlerSetLocatStorage(element, id, name, price, img, count) {
    console.log(name);
    const { pushProduct, products } = localStorageUtil.putProducts(
      id,
      name,
      price,
      img,
      count
    );

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img, count }) => {
      let activeClass = "";
      let activeText = "";

      const index = productsStore.map((e) => e.id).indexOf(id);
      if (index === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlCatalog += `
      <div 
      class="cart__content"
      name="simpleNameCart"
      >
        <div class="cart__photo">
          <img src="${img}" alt="">
        </div>
        <p 
        class="name"
        name="simpleName"
        >${name}</p>
        <p class="price">${price.toLocaleString()}$</p>
        <button 
          class="cart__btn${activeClass}" 
          onclick="productsPage.handlerSetLocatStorage(this, 
            '${id}','${name}','${price}','${img}','${count}');">
          ${activeText}
        </button>
      </div>
            `;
    });

    const html = `
          <div class="cart__wrap">
            ${htmlCatalog}
          </div>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
