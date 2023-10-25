// 



const data = window.location.search;
const urlParam = new URLSearchParams(data);
const mealId = urlParam.get("id");
const mealCategory = urlParam.get("category");
const mealVideo = urlParam.get("video");
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`;
const apiIng = "https://www.themealdb.com/api/json/v1/1/search.php?s";


const favoriteBtn = document.querySelector('#favorite')
favoriteBtn.addEventListener("click", () => {
  const favorite = JSON.parse(localStorage.getItem("favoris") || "[]");
  if (!favorite.includes(mealId)) {
    favorite.push(mealId)
    localStorage.setItem("favoris", JSON.stringify(favoris))
    alert("Successfully Add !")
  } else {
    alert("Already in favoris!")
  }
})

fetch(apiIng)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayDetailsMeals(data.meals);
    displayVideo(data.meals);
  });

  function displayVideo(meals) {meals
    const mealContainer = document.querySelector(".img-div")
    meals.forEach((meal) => {
      if (mealId == meal.idMeal) {
        const videoURL = meal.strYoutube;
        console.log(videoURL);
        const splited = videoURL.split("v=");
        const videoId = splited[1];
        console.log(splited);

        const h1 = document.querySelector('.h1')

        h1.innerHTML += `
        <h2 class="h1">${meal.strMeal}</h2>

        `
        mealContainer.innerHTML += `
      <iframe width="100%" height="710px" class="videos-food"
        src="https://www.youtube.com/embed/${videoId}">
      </iframe>
      `
      }
    });
  }


  function displayDetailsMeals(meals) {
    const mealContainer = document.querySelector(".ingredients")
    meals.forEach((meal) => {
      if (mealId == meal.idMeal) {
        if (
          meal.strIngredient1 != "" ||
          meal.strIngredient1 != null ||
          meal.strIngredient2 != "" ||
          meal.strIngredient2 != null ||
          meal.strIngredient3 != "" ||
          meal.strIngredient3 != null ||
          meal.strIngredient4 != "" ||
          meal.strIngredient4 != null ||
          meal.strIngredient5 != "" ||
          meal.strIngredient5 != null ||
          meal.strIngredient6 != "" ||
          meal.strIngredient6 != null ||
          meal.strIngredient7 != "" ||
          meal.strIngredient7 != null ||
          meal.strIngredient8 != "" ||
          meal.strIngredient8 != null ||
          meal.strIngredient9 != "" ||
          meal.strIngredient9 != null ||
          meal.strIngredient10 != "" ||
          meal.strIngredient10 != null ||
          meal.strIngredient11 != "" ||
          meal.strIngredient11 != null ||
          meal.strIngredient12 != "" ||
          meal.strIngredient12 != null ||
          meal.strIngredient13 != "" ||
          meal.strIngredient13 != null ||
          meal.strIngredient14 != "" ||
          meal.strIngredient14 != null ||
          meal.strIngredient15 != "" ||
          meal.strIngredient15 != null ||
          meal.strIngredient16 != "" ||
          meal.strIngredient16 != null ||
          meal.strIngredient17 != "" ||
          meal.strIngredient17 != null ||
          meal.strIngredient18 != "" ||
          meal.strIngredient18 != null ||
          meal.strIngredient19 != "" ||
          meal.strIngredient19 != null ||
          meal.strIngredient20 != "" ||
          meal.strIngredient20 != null
        ) {
          mealContainer.innerHTML += `
          <div class="ingred-list">
            <h5>For the crust</h5>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure1}</p>
              <p>${meal.strIngredient1}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure2}</p>
              <p>${meal.strIngredient2}</p>
            </div>
            <h5>For the cheesecaket</h5>
            <div class="ingred">
              <i class="fa-regular fa-circle-check"></i>
              <p class="ing-ps">${meal.strMeasure3}</p>
              <p>${meal.strIngredient3}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure4}</p>
              <p>${meal.strIngredient4}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure5}</p>
              <p>${meal.strIngredient5}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure6}</p>
              <p>${meal.strIngredient6}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure7}</p>
              <p>${meal.strIngredient7}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure8}</p>
              <p>${meal.strIngredient8}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure9}</p>
              <p>${meal.strIngredient9}</p>
            </div>
            <div class="ingred">
              <i class="fa-regular fa-circle"></i>
              <p class="ing-p">${meal.strMeasure10}</p>
              <p>${meal.strIngredient10}</p>
            </div>
          </div>
          `
        }
      }
    });
  }

  fetch(apiIng)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayInstruction(data.meals);
  });
function displayInstruction(meals) {
  const mealContainer = document.querySelector(".instruct")
  meals.forEach((meal) => {
    if (mealId == meal.idMeal) {
      mealContainer.innerHTML += `
      <p class="numb">1</p>
      <p> ${meal.strInstructions} </p>
    `
    }
  });
}

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayDetailMeals(data.meals);
  });

function displayDetailMeals(meals) {
  const mealContainer = document.querySelector('.recipie');
  meals.forEach((meal) => {
    mealContainer.innerHTML += `
    <img class="fresh-img" src="  ${meal.strMealThumb}" alt="">
    <div class="fresh1">
      <div class="stars">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <p class="fresh-p">  ${meal.strMeal}</p>
    </div>
      `
  });
}