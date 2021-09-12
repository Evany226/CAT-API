import { DOMSelectors } from "./DOM";

const myHeaders = new Headers({
  "x-api-key": "23a9022c-c652-4ef8-8427-9c8d230601aa",
});

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_id=${searchParams}`
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
        alert("Hey something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
