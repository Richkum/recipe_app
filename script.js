const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

const imageDiv = document.querySelector('.img-div')

async function getapi(url) {

  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
  let infos = data.meals
  infos.forEach((food) => {
    imageDiv.innerHTML += `<div class="img-div">
    <img class="main-img" src="${food.strYoutube}" alt="">
  </div>`
  })
// console.log(about)
}
getapi(apiUrl)