const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

const imageDiv = document.querySelector('.img-div')
const instruct = document.querySelector('.instruct')
const h1 = document.querySelector('.h1')

async function getapi(url) {

  const response = await fetch(url);

  // h1.addEventListener('click', () => {})

  let data = await response.json();
  console.log(data);
  let infos = data.meals
  infos.forEach((food) => {
    h1.innerHTML = `<h2 class="h1">${food.strMeal}</h2>`

    imageDiv.innerHTML += `<div class="img-div">
    <iframe width="100%" height="315" src="${food.strYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`

    instruct.innerHTML = `    <div class="inst">
    <p class="numb">1</p>
    <p>${food.strInstructions}</p>
  </div> `
  
  })
// console.log(about)
}
getapi(apiUrl)