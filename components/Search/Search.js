class Search {
  serching() {
    //initializations
    let searchInput = document.getElementsByClassName("search-input").value;
    let elements = document.querySelectorAll(".name");
    let cards = document.querySelectorAll(".cart__content");

    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      console.log(searchInput);
      if (searchInput) {
        if (element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove("hide");
        } else {
          //hide others
          cards[index].classList.add("hide");
        }
      }
    });
  }

  render() {
    const html = `
    <svg
    class='icon'
    id='icon'
    enableBackground="new 0 0 32 32"
    id="EditableLine"
    version="1.1"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="14"
      cy="14"
      fill="none"
      id="XMLID_42_"
      r="9"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      fill="none"
      id="XMLID_44_"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      x1="27"
      x2="20.366"
      y1="27"
      y2="20.366"
    />
  </svg>
  <input
    class='search-input'
    id='search-input'
    placeholder="Search..."
 
  />
        `;

    ROOT_SEARCH.innerHTML = html;

    document.getElementById("search-input").addEventListener("click", () => {
      //initializations
      let searchInput = document.getElementById("search-input").value;
      let elements = document.getElementsByName("simpleName");
      let cards = document.getElementsByName("simpleNameCart");

      //loop through all elements
      elements.forEach((element, index) => {
        console.log(searchInput);
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove("hide");
          cards[index].classList.add("cart__content");
        } else {
          //hide others
          cards[index].classList.add("hide");
          cards[index].classList.remove("cart__content");
        }
      });
    });
  }
}

const searchPage = new Search();
