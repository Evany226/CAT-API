import { DOMSelectors } from "./DOM";

/*const card = document.getElementById("card");

card.addEventListener("click", flipCard);

function flipCard() {
  card.classList.toggle("flipCard");
}
*/

const query = async function () {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1`
    );
    const data = await response.json();
    console.log(data);
    data.forEach((cats) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="item-card" id="card">
      <div class="item-card-front">
          <img src="${cats.url}" alt="" class="image">
      </div>

      <div class="item-card-back">
      </div>
</div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
query();
