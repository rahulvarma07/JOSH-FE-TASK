// render food items grid
const foodItems = [
  {
    img: "ASSETS/Images/food_item_image_1.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },  {
    img: "ASSETS/Images/food_item_image_2.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },  
  {
    img: "ASSETS/Images/food_item_image_3.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: true
  },  
  {
    img: "ASSETS/Images/food_item_image_4.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },  
  {
    img: "ASSETS/Images/food_item_image_5.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },  
  {
    img: "ASSETS/Images/food_item_image_6.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },  
  {
    img: "ASSETS/Images/food_item_image_7.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: true
  },  
  {
    img: "ASSETS/Images/food_item_image_8.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: true
  },  
  {
    img: "ASSETS/Images/food_item_image_9.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },
  {
    img: "ASSETS/Images/food_item_image_10.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },
  {
    img: "ASSETS/Images/food_item_image_11.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: true
  },
  {
    img: "ASSETS/Images/food_item_image_12.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  }
]

function renderFoodCard({img, name, price, rating, time, isTrue}) {
  if(isTrue == true){
    return `<div class="food-item-display">
      <div class = "show-discount">
        <h7>20%</h7>
      </div>
      <img src="${img}" alt="food_item" />
      <div class="food-item-details">
        <div class="name-price">
          <p>${name}</p>
          <p>₹${price}</p>
        </div>
        <div class="add-food-item">
          <div class="rating-and-time">
            <button class="rating-button">★ ${rating}</button>
            <div class="show-time">
              <button class="show-time-button"><p>${time}</p></button>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="add-to-cart-button">
              <img src="ASSETS/Images/plus_icon_image.png" alt="plus_icon_image" />
            </button>
          </div>
        </div>
      </div>
    </div>`
  }

  return `
    <div class="food-item-display">
      <img src="${img}" alt="food_item" />
      <div class="food-item-details">
        <div class="name-price">
          <p>${name}</p>
          <p>₹${price}</p>
        </div>
        <div class="add-food-item">
          <div class="rating-and-time">
            <button class="rating-button">★ ${rating}</button>
            <div class="show-time">
              <button class="show-time-button"><p>${time}</p></button>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="add-to-cart-button">
              <img src="ASSETS/Images/plus_icon_image.png" alt="plus_icon_image" />
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderSpecialFoodCards({img, name, price, rating, time, isTrue}) {
  if(isTrue == true){
    return `<div class = "food-item-display-layout">
    <div class="food-item-display">
      <div class = "show-discount">
        <h7>20%</h7>
      </div>
      <img src="${img}" alt="food_item" />
      <div class="food-item-details">
        <div class="name-price">
          <p>${name}</p>
          <p>₹${price}</p>
        </div>
        <div class="add-food-item">
          <div class="rating-and-time">
            <button class="rating-button">★ ${rating}</button>
            <div class="show-time">
              <button class="show-time-button"><p>${time}</p></button>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="add-to-cart-button">
              <img src="ASSETS/Images/plus_icon_image.png" alt="plus_icon_image" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>`
  }

  return `<div class = "food-item-display-layout">
    <div class="food-item-display">
      <img src="${img}" alt="food_item" />
      <div class="food-item-details">
        <div class="name-price">
          <p>${name}</p>
          <p>₹${price}</p>
        </div>
        <div class="add-food-item">
          <div class="rating-and-time">
            <button class="rating-button">★ ${rating}</button>
            <div class="show-time">
              <button class="show-time-button"><p>${time}</p></button>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="add-to-cart-button">
              <img src="ASSETS/Images/plus_icon_image.png" alt="plus_icon_image" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid-display");
  grid.innerHTML = foodItems.map(renderFoodCard).join("");
});

// add elements inside a slider
const sliderSpecialItems = [
    {
    img: "ASSETS/Images/food_item_image_1.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
    },
    {
    img: "ASSETS/Images/popular_item_2.png",
    name: "Tandoori Chicken",
    price: 184,
    rating: 4.3,
    time: "15‑29 min",
    isTrue: true
    },
    {
    img: "ASSETS/Images/popular_item_3.png",
    name: "Chilli Chicken",
    price: 116,
    rating: 4.1,
    time: "30‑40 min",
    isTrue: true
  },
  {
    img: "ASSETS/Images/food_item_image_6.jpg",
    name: "Home made pizza",
    price: 190,
    rating: 4.7,
    time: "50‑79 min",
    isTrue: false
  },
  {
    img: "ASSETS/Images/food_item_image_11.jpg",
    name: "Home made pizza",
    price: 180,
    rating: 4.7,
    time: "30‑50 min",
    isTrue: false
  },
]

document.addEventListener("DOMContentLoaded", ()=>{
  const popularItemsGrid = document.querySelector(".slider");
  popularItemsGrid.innerHTML = sliderSpecialItems.map(renderSpecialFoodCards).join("");
})

// Slider-functionality

const scroller = document.querySelector('.slider');
const scrollLeft = document.querySelector('.swipe-left');
const scrollRight = document.querySelector('.swipe-right');

const cardWidth = 278.5;
const gap = 50;
const scrollStep = cardWidth + gap;
let index = 1;

function highlightCenterCard() {
  const visibleSlides = Array.from(scroller.children).slice(0, 5);
  if (visibleSlides[index - 1]) visibleSlides[index - 1].classList.remove("center-shadow");
  if (visibleSlides[index + 1]) visibleSlides[index + 1].classList.remove("center-shadow");
  if (visibleSlides[index]) visibleSlides[index].classList.add("center-shadow");
}

scrollLeft.addEventListener('click', () => {
  scroller.style.scrollBehavior = 'smooth';
  scroller.scrollLeft -= scrollStep;
  if (index > 1) {
    index--;
    highlightCenterCard();
  }
});

scrollRight.addEventListener('click', () => {
  scroller.style.scrollBehavior = 'smooth';
  scroller.scrollLeft += scrollStep;
  if (index < 3) {
    index++;
    highlightCenterCard();
  }
});

window.addEventListener('load', highlightCenterCard);

// video play-pause option
const video = document.getElementById("foodVideo");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "flex";
  }
});

video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    playButton.style.display = "flex";
  }
});


// modal open
const modalModel = document.querySelector('.modal');

function dishRequest(){
  modalModel.classList.add('open-model'); 
  document.body.classList.add('no-scroll');  
}

function closeRequest(){
  modalModel.classList.remove('open-model');
  document.body.classList.remove('no-scroll');
}




