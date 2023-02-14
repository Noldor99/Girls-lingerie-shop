class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }
  putProducts(id, name, price, img, count) {
    let products = this.getProducts();
    let pushProduct = false;
    // const index = products.indexOf(id);
    const index = products.map((e) => e.id).indexOf(id);
    if (index === -1) {
      console.log(id);
      products.push({ id, name, price, img, count });
      console.log(products);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
