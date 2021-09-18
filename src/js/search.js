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
        data[0].breeds.forEach((cats) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `                    <img src="${cats.url}" alt="" class="search-image">
            <h3 class="search-name">${cats.name}</h3>


                <p class="search-title">Origin:</p>
                <p class="search-subtitle">${cats.origin}</p>


                <p class="search-title">Description:</p>
                <p class="search-subtitle">${cats.description}.</p>


                <p class="search-title">Traits:</p>
                <p class="search-subtitle">${cats.temperament}</p>`
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
