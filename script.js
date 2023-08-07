// https://api.themoviedb.org/3/search/movie?api_key=f43332ad4cb3ac42bcdbdc6d9efdf1d5&query=jhon
// https://api.themoviedb.org/3/movie/331546?api_key=f43332ad4cb3ac42bcdbdc6d9efdf1d5

const puplarSearch = document.querySelector(".form-control");
const searchList = document.querySelector(".search-list");
const searchListAll = document.querySelectorAll(".search-list-item");

// console.log();

puplarSearch.addEventListener("keyup", (e) => {
   let searchValue = e.target.value;
   showRes(searchValue);
   if (showRes(searchValue)) {
      console.log(searchListAll);
   }
});

const showRes = (searchValue) => {
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=f43332ad4cb3ac42bcdbdc6d9efdf1d5&query=${searchValue}`).then((res) => {
      res.json().then((result) => {
         const listMove = result.results;
         searchList.innerHTML = listMove.map((e) => {
            // console.log(e);
            return ` <div class="search-list-item">
                        <div class="search-item-thumbnail">
                           <img src="${e.poster_path}" />
                        </div>
                        <div class="search-item-info">
                           <h3>${e.title}</h3>
                        <p>${e.release_date}</p>
                        </div>
                     </div>`;
            // console.log(e.title);
         }).join('');
      });
   });
}
console.log(searchListAll);
// const infoMovePage = () => { }
