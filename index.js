function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  searchPage.render();
  selectPage.render();
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch("http://localhost:5000/girls")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 250);
  })
  .catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
  });

window.onload = function () {};
