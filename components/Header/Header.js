class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
        <div class="header__wrap">
        <img src="./svg/Logo.svg" alt="">
        <nav>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/shop">Магазин</a></li>
            <li><a href="/about">О бренде </a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </nav>
        <div class="header__right">
          <div class="header__phone">
            <img src="./svg/phone.svg" alt="">
            <p>+7 (495) 823-54-12</p>
          </div>
          <div 
            class="header__basket"
            onclick="headerPage.handlerOpenShoppingPage();"
            >
            <img class="" src="./svg/basket.svg" alt="">
            <div class="header__count">${count}</div>
          </div>
        </div>
      </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
