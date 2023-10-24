const latest = document.querySelector('.latest')
const popular = document.querySelector('.popular')
console.log(popular)


const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

let idm
async function getUrl() {
  const response = await fetch(url);

  // h1.addEventListener('click', () => {})

  let data = await response.json();
  console.log(data);
   idm = data.meals[0].idMeal
  console.log(idm);

  localStorage.setItem('key', JSON.stringify(idm))

}
getUrl()


const urlApi = 'https://www.themealdb.com/api/json/v1/1/categories.php';

async function getapi(url) {

  const response = await fetch(url);
  let data = await response.json();
  let infos = data.categories
  infos.forEach((food) => {
    popular.innerHTML += `<div class="pop1">
    <img class="pop-img" src="${food.strCategoryThumb}" alt="">
    <h3 class="pasta">${food.strCategory}</h3>
  </div>
    `
  })

}
getapi(urlApi)


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function getapi3(url3) {

    const response3 = await fetch(url3);

    let data = await response3.json();
    console.log(data);
    let infos = data.meals

    // const winlocation = window.location.search
    // const newsearch = URLSearchParams(winlocation)
    // const defaultmealid = urlParams.get("id")

    // if(defaultmealid === idMeal){
      
    // }

    infos.forEach((food) => {
      latest.innerHTML += `<div class="late">
      <a href="/indexx.html?id=${food.idMeal}"><img class="recip-img" src="${food.strMealThumb}" alt=""></a>
      <h4>${food.strMeal}</h4>
    </div>`
    })
    console.log(infos)
}
getapi3(apiUrl)

// let images = document.getElementsByTagName("img");
// for(let i = 0; i < images.length; i++) {
//     let image = images[i];
//     image.onclick = function(event) {
//          window.location.href = "http://127.0.0.1:5501/indexx.html";
//     };
// }

const storedData = JSON.parse(localStorage.getItem('favoris'));
console.log(storedData);
if (storedData) {
  const filteredData = storedData.filter(meal => meal.idMeal === mealId?.mealId);
  console.log(mealId);
}
else {
  console.log('No data found in local storage.');
}
setupCounter(document.querySelector("#counter"));
