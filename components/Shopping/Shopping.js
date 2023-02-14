class Shopping {
  handlerClear() {
    ROOT_SHOPPING.innerHTML = "";
    ROOT_SHOPPING.classList.add("remove");
    document.body.classList.remove("active");
    productsPage.render();
  }

  addCount(element, id) {
    const productsStore = localStorageUtil.getProducts();
    const index = productsStore.map((e) => e.id).indexOf(id);
    productsStore[index].count = Number(productsStore[index].count) + 1;
    localStorage.setItem("products", JSON.stringify(productsStore));
    shoppingPage.render();
  }

  minusCount(element, id) {
    const productsStore = localStorageUtil.getProducts();
    const index = productsStore.map((e) => e.id).indexOf(id);
    productsStore[index].count = Number(productsStore[index].count) - 1;
    localStorage.setItem("products", JSON.stringify(productsStore));
    shoppingPage.render();
  }

  remove(element, id) {
    const productsStore = localStorageUtil.getProducts();
    const index = productsStore.map((e) => e.id).indexOf(id);
    productsStore.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productsStore));
    shoppingPage.render();
    headerPage.render(productsStore.length);
  }

  render() {
    ROOT_SHOPPING.classList.remove("remove");
    document.body.classList.add("active");
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    productsStore.forEach(({ id, name, price, img, count }) => {
      htmlCatalog += `
        <div class="shopping__content">
          <div class="shopping__body">
            <img src="${img}" alt="">
            <div class="shopping__info">
              <div class="shopping__name">${name}</div>
              <div class="shopping__price">${price.toLocaleString()} USD</div>
              <button
              onclick="shoppingPage.remove(this, '${id}');"
              >remove</button>
            </div>
          </div>
          <div class="shopping__counter">
            <img 
              class="arrow__top" 
              src="https://cdn-icons-png.flaticon.com/512/54/54833.png " width="25" height="25" alt="" title="" class="img-small"
              onclick="shoppingPage.addCount(this, '${id}');"
              >
              <p>${count}</p>
            <img 
              class="arrow__bottom" 
              src="https://cdn-icons-png.flaticon.com/512/54/54833.png " width="25" height="25" alt="" title="" class="img-small"
              onclick="shoppingPage.minusCount(this, '${id}');"
              >
          </div>
        </div>
                `;
      sumCatalog += price * count;
    });

    const html = `
            <div class="shopping__wrap">
              ${htmlCatalog}
              <div class="shopping__bottom">
              <button 
                class="go-bask"
                onclick="shoppingPage.handlerClear();"
                >Go bask</button>
              <p class="shopping__total">${sumCatalog.toLocaleString()} USD</p>
            </div>

        `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
