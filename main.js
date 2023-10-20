const latest = document.querySelector('.latest')
const popular = document.querySelector('.popular')
console.log(popular)

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
    infos.forEach((food) => {
      latest.innerHTML += `<div class="late">
      <a href="/indexx.html"><img class="recip-img" src="${food.strMealThumb}" alt=""></a>
      <h4>${food.strMeal}</h4>
    </div>`
    })
    console.log(infos)
}
getapi3(apiUrl)

let images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++) {
    let image = images[i];
    image.onclick = function(event) {
         window.location.href = "http://127.0.0.1:5501/indexx.html";
    };
}


// const images = document.getElementsByTagName('img').onClick(  location.href("http://127.0.0.1:5501/indexx.html"))



// async function getMeals(name) {
// const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name || ''}`).then(res=>res.json()).then()
// return data
// }
// // 